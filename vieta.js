const seating = [

    {
        table: 1,
        guests: [
            { name: "Aldas Plankis", gender: "male" },
            { name: "Kamilė Mikšionė", gender: "female" },
            { name: "Pijus Mikšionis", gender: "male" },
            { name: "Benas Mockus", gender: "male" },
            { name: "Diana Mockienė", gender: "female" },
            { name: "Gabija Būtėnaitė", gender: "female" },
            { name: "Kamile Kvedaraitė", gender: "female" },
            { name: "Julija Tumul", gender: "female" },
            { name: "Valerija Valner", gender: "female" },
            { name: "Evelina Kaukėnaitė", gender: "female" }
        ]
    },

    {
        table: 2,
        guests: [
            { name: "Violeta Žavoronkienė", gender: "female" },
            { name: "Laura Balsienė", gender: "female" },
            { name: "Viktoras Rupšas", gender: "male" },
            { name: "Nerijus Paškevičius", gender: "male" },
            { name: "Daiva Paškevičienė", gender: "female" },
            { name: "Renata Bit", gender: "female" },
            { name: "Karolis Rupšas", gender: "male" },
            { name: "Zita Balsienė", gender: "female" },
            { name: "Bronislovas Rupšas", gender: "male" },
            { name: "Uogutė Rupšienė", gender: "female" }
        ]
    },

    {
        table: 3,
        guests: [
            { name: "Meida Mikalaikevičiūtė", gender: "female" },
            { name: "Samanta Žavoronkytė", gender: "female" },
            { name: "Bronius Rupšas", gender: "male" },
            { name: "Edvinas Stirbys", gender: "male" },
            { name: "Ema Girždytė", gender: "female" },
            { name: "Vanesa Kaminskaitė", gender: "female" },
            { name: "Žygimantas Kontrimas", gender: "male" },
            { name: "Paulius Stonkus", gender: "male" },
            { name: "Indrė Klevinskaitė", gender: "female" },
            { name: "Gabija Zajanckauskaitė", gender: "female" },
            { name: "Patricija Markevičiūtė", gender: "female" }
        ]
    },

    {
        table: 4,
        guests: [
            { name: "Kazimieras Pabiržis", gender: "male" },
            { name: "Kamile Pabiržienė", gender: "female" },
            { name: "Aušrinė Jokubauskaitė", gender: "female" },
            { name: "Giedrius Dima", gender: "male" },
            { name: "Rokas Narkus", gender: "male" },
            { name: "Beatričė", gender: "female" },
            { name: "Dovydas Narkus", gender: "male" },
            { name: "Alvyda", gender: "female" },
            { name: "Viktorija Linkevičiūtė", gender: "female" },
            { name: "Paulius Bastys", gender: "male" },
            { name: "Patricija Šarskutė", gender: "female" },
            { name: "Benas Tamaušauskas", gender: "male" }
        ]
    },

    {
        table: 5,
        guests: [
            { name: "Mantas Rupšas", gender: "male" },
            { name: "Laurynas Girdžius", gender: "male" },
            { name: "Viktorija Rupšaitė", gender: "female" },
            { name: "Jurga Balsytė", gender: "female" },
            { name: "Neringa Balsytė", gender: "female" },
            { name: "Marius Alšauskis", gender: "male" },
            { name: "Ugnius Paškevičius", gender: "male" },
            { name: "Nedas Paškevičius", gender: "male" }
        ]
    }
];

function normalizeText(text){
    return text
        .toLowerCase()
        .trim()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
}

function firstName(fullName){
    return fullName.split(" ")[0];
}

function renderTables(){
    const area = document.getElementById("tablesArea");
    area.innerHTML = "";

    seating.forEach(tableData => {
        const tableBlock = document.createElement("div");
        tableBlock.className = `table-block table-${tableData.table}`;

        const circle = document.createElement("div");
        circle.className = "table-circle";
        circle.innerText = tableData.table;

        tableBlock.appendChild(circle);

        const total = tableData.guests.length;
        const startAngle = -155;
        const endAngle = 155;
        const step = total === 1 ? 0 : (endAngle - startAngle) / (total - 1);

        tableData.guests.forEach((guest, index) => {
            const angle = startAngle + step * index;

            const guestEl = document.createElement("div");
            guestEl.className = "guest";
            guestEl.style.setProperty("--angle", `${angle}deg`);

            const avatar = document.createElement("div");
            avatar.className = `avatar ${guest.gender}`;
            avatar.innerText = guest.gender === "male" ? "♙" : "♙";

            guestEl.appendChild(avatar);
            tableBlock.appendChild(guestEl);
        });

        area.appendChild(tableBlock);
    });
}

function allGuestsFlat(){
    const list = [];

    seating.forEach(tableData => {
        tableData.guests.forEach(guest => {
            list.push({
                ...guest,
                table: tableData.table
            });
        });
    });

    return list;
}

function findSeat(){
    const inputRaw = document.getElementById("seatInput").value;
    const input = normalizeText(inputRaw);
    const result = document.getElementById("seatResult");

    if(input === ""){
        result.innerHTML = "Įveskite vardą arba vardą ir pavardę.";
        return;
    }

    const guests = allGuestsFlat();

    const exactFullMatches = guests.filter(guest =>
        normalizeText(guest.name) === input
    );

    if(exactFullMatches.length === 1){
        showSeatResult(exactFullMatches[0]);
        return;
    }

    const firstNameMatches = guests.filter(guest =>
        normalizeText(firstName(guest.name)) === input
    );

    if(firstNameMatches.length === 1){
        showSeatResult(firstNameMatches[0]);
        return;
    }

    if(firstNameMatches.length > 1){
        result.innerHTML = `
            Vardo neužtenka, nes šventėje yra daugiau nei vienas žmogus tokiu vardu.<br>
            Įveskite vardą ir pavardę.
        `;
        return;
    }

    const partialMatches = guests.filter(guest =>
        normalizeText(guest.name).includes(input)
    );

    if(partialMatches.length === 1){
        showSeatResult(partialMatches[0]);
        return;
    }

    if(partialMatches.length > 1){
        result.innerHTML = `
            Rasta keli žmonės pagal šį įrašą.<br>
            Įveskite vardą ir pavardę.
        `;
        return;
    }

    result.innerHTML = "Vardas nerastas. Pasitikrinkite, ar įrašėte teisingai.";
}

function showSeatResult(person){
    const result = document.getElementById("seatResult");

    result.innerHTML = `
        Jūsų vieta:<br>
        <strong>${person.table} stalas</strong>
    `;
}

renderTables();
