const seating = [

    {
        table: 1,
        guests: [
            { name: "Aldas Plankis", display: "Aldas", gender: "male" },
            { name: "Kamilė Mikšionė", display: "Kamilė M.", gender: "female" },
            { name: "Pijus Mikšionis", display: "Pijus", gender: "male" },
            { name: "Benas Mockus", display: "Benas M.", gender: "male" },
            { name: "Diana Mockienė", display: "Diana", gender: "female" },
            { name: "Gabija Būtėnaitė", display: "Gabija B.", gender: "female" },
            { name: "Kamile Kvedaraitė", display: "Kamilė K.", gender: "female" },
            { name: "Julija Tumul", display: "Julija", gender: "female" },
            { name: "Valerija Valner", display: "Valerija", gender: "female" },
            { name: "Evelina Kaukėnaitė", display: "Evelina", gender: "female" }
        ]
    },

    {
        table: 2,
        guests: [
            { name: "Violeta Žavoronkienė", display: "Violeta", gender: "female" },
            { name: "Laura Balsienė", display: "Laura", gender: "female" },
            { name: "Viktoras Rupšas", display: "Viktoras", gender: "male" },
            { name: "Nerijus Paškevičius", display: "Nerijus", gender: "male" },
            { name: "Daiva Paškevičienė", display: "Daiva", gender: "female" },
            { name: "Renata Bit", display: "Renata", gender: "female" },
            { name: "Karolis Rupšas", display: "Karolis", gender: "male" },
            { name: "Zita Balsienė", display: "Zita", gender: "female" },
            { name: "Broniuslovas Rupšas", display: "Broniuslovas", gender: "male" },
            { name: "Uogutė Rupšienė", display: "Uogutė", gender: "female" }
        ]
    },

    {
        table: 3,
        guests: [
            { name: "Meida Mikalaikevičiūtė", display: "Meida", gender: "female" },
            { name: "Samanta Žavoronkytė", display: "Samanta", gender: "female" },
            { name: "Bronius Rupšas", display: "Bronius", gender: "male" },
            { name: "Edvinas Stirbys", display: "Edvinas", gender: "male" },
            { name: "Ema Girždytė", display: "Ema", gender: "female" },
            { name: "Vanesa Kaminskaitė", display: "Vanesa", gender: "female" },
            { name: "Žygimantas Kontrimas", display: "Žygis", gender: "male" },
            { name: "Paulius Stonkus", display: "Paulius S.", gender: "male" },
            { name: "Indrė Klevinskaitė", display: "Indrė", gender: "female" },
            { name: "Gabija Zajanckauskaitė", display: "Gabija", gender: "female" },
            { name: "Patricija Markevičiūtė", display: "Patricija", gender: "female" }
        ]
    },

    {
        table: 4,
        guests: [
            { name: "Kazimieras Pabiržis", display: "Kazimieras", gender: "male" },
            { name: "Kamile Pabiržienė", display: "Kamilė P.", gender: "female" },
            { name: "Aušrinė Jokubauskaitė", display: "Aušrinė", gender: "female" },
            { name: "Giedrius Dima", display: "Giedrius", gender: "male" },
            { name: "Rokas Narkus", display: "Rokas", gender: "male" },
            { name: "Beatričė", display: "Beatričė", gender: "female" },
            { name: "Dovydas Narkus", display: "Dovydas", gender: "male" },
            { name: "Alvyda", display: "Alvyda", gender: "female" },
            { name: "Viktorija Linkevičiūtė", display: "Viktorija L.", gender: "female" },
            { name: "Paulius Bastys", display: "Paulius B.", gender: "male" },
            { name: "Patricija Šarskutė", display: "Patricija Š.", gender: "female" },
            { name: "Benas Tamaušauskas", display: "Benas T.", gender: "male" }
        ]
    },

    {
        table: 5,
        guests: [
            { name: "Mantas Rupšas", display: "Mantas", gender: "male" },
            { name: "Laurynas Girdžius", display: "Laurynas", gender: "male" },
            { name: "Viktorija Rupšaitė", display: "Viktorija R.", gender: "female" },
            { name: "Jurga Balsytė", display: "Jurga", gender: "female" },
            { name: "Neringa Balsytė", display: "Neringa", gender: "female" },
            { name: "Marius Alšauskis", display: "Marius", gender: "male" },
            { name: "Ugnius Paškevičius", display: "Ugnius", gender: "male" },
            { name: "Nedas Paškevičius", display: "Nedas", gender: "male" }
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
        const startAngle = -145;
        const endAngle = 145;
        const step = total === 1 ? 0 : (endAngle - startAngle) / (total - 1);

        tableData.guests.forEach((guest, index) => {
            const angle = startAngle + step * index;

            const guestEl = document.createElement("div");
            guestEl.className = "guest";
            guestEl.style.setProperty("--angle", `${angle}deg`);
            guestEl.style.setProperty("--text-angle", `${angle / 2}deg`);

            const nameEl = document.createElement("div");
            nameEl.className = "guest-name";
            nameEl.innerText = guest.display;

            const avatar = document.createElement("div");
            avatar.className = `avatar ${guest.gender}`;
            avatar.innerText = guest.gender === "male" ? "👤" : "👤";

            guestEl.appendChild(nameEl);
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

    if(exactFullMatches.length > 1){
        result.innerHTML = "Rasta daugiau nei vienas žmogus. Įveskite vardą ir pavardę.";
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
