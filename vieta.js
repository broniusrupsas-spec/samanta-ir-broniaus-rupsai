const seating = [

    {
        table: 1,
        guests: [
            { name: "Aldas Plankis" },
            { name: "Kamilė Mikšionė" },
            { name: "Pijus Mikšionis" },
            { name: "Benas Mockus" },
            { name: "Diana Mockienė" },
            { name: "Gabija Būtėnaitė" },
            { name: "Kamile Kvedaraitė" },
            { name: "Julija Tumul" },
            { name: "Valerija Valner" },
            { name: "Evelina Kaukėnaitė" }
        ]
    },

    {
        table: 2,
        guests: [
            { name: "Violeta Žavoronkienė" },
            { name: "Laura Balsienė" },
            { name: "Viktoras Rupšas" },
            { name: "Nerijus Paškevičius" },
            { name: "Daiva Paškevičienė" },
            { name: "Renata Bit" },
            { name: "Karolis Rupšas" },
            { name: "Zita Balsienė" },
            { name: "Bronislovas Rupšas" },
            { name: "Uogutė Rupšienė" }
        ]
    },

    {
        table: 3,
        guests: [
            { name: "Meida Mikalaikevičiūtė" },
            { name: "Samanta Žavoronkytė" },
            { name: "Bronius Rupšas" },
            { name: "Edvinas Stirbys" },
            { name: "Ema Girždytė" },
            { name: "Vanesa Kaminskaitė" },
            { name: "Žygimantas Kontrimas" },
            { name: "Paulius Stonkus" },
            { name: "Indrė Klevinskaitė" },
            { name: "Gabija Zajanckauskaitė" },
            { name: "Patricija Markevičiūtė" }
        ]
    },

    {
        table: 4,
        guests: [
            { name: "Kazimieras Pabiržis" },
            { name: "Kamile Pabiržienė" },
            { name: "Aušrinė Jokubauskaitė" },
            { name: "Giedrius Dima" },
            { name: "Rokas Narkus" },
            { name: "Beatričė" },
            { name: "Dovydas Narkus" },
            { name: "Alvyda" },
            { name: "Viktorija Linkevičiūtė" },
            { name: "Paulius Bastys" },
            { name: "Patricija Šarskutė" },
            { name: "Benas Tamaušauskas" }
        ]
    },

    {
        table: 5,
        guests: [
            { name: "Mantas Rupšas" },
            { name: "Laurynas Girdžius" },
            { name: "Viktorija Rupšaitė" },
            { name: "Jurga Balsytė" },
            { name: "Neringa Balsytė" },
            { name: "Marius Alšauskis" },
            { name: "Ugnius Paškevičius" },
            { name: "Nedas Paškevičius" }
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
        <strong>${person.table} STALAS</strong>
    `;
}

renderTables();
