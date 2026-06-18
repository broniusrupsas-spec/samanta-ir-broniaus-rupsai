const accommodation = [
    { name: "Samanta", place: "Namas miegojimui – pirmas" },
    { name: "Bronius", place: "Namas miegojimui – pirmas" },
    { name: "Edvinas", place: "Namas miegojimui – pirmas" },
    { name: "Ema", place: "Namas miegojimui – pirmas" },
    { name: "Vasa", place: "Namas miegojimui – pirmas" },
    { name: "Žygis", place: "Namas miegojimui – pirmas" },
    { name: "Paulius", place: "Namas miegojimui – pirmas" },
    { name: "Indrė", place: "Namas miegojimui – pirmas" },
    { name: "Gaja", place: "Namas miegojimui – pirmas" },
    { name: "Daiva", place: "Namas miegojimui – pirmas" },
    { name: "Patricija", place: "Namas miegojimui – pirmas" },
    { name: "Meida", place: "Namas miegojimui – pirmas" },

    { name: "Laura", place: "Namas miegojimui – antras" },
    { name: "Viktoras", place: "Namas miegojimui – antras" },
    { name: "Nerijus", place: "Namas miegojimui – antras" },
    { name: "Renata", place: "Namas miegojimui – antras" },
    { name: "Karolis", place: "Namas miegojimui – antras" },
    { name: "Zita", place: "Namas miegojimui – antras" },
    { name: "Diana", place: "Namas miegojimui – antras" },
    { name: "Slavinas", place: "Namas miegojimui – antras" },
    { name: "Gintė", place: "Namas miegojimui – antras" },

    { name: "Evelina", place: "Kupolas" },
    { name: "Evelinos bičas", place: "Kupolas" },
    { name: "Kamilė", place: "Kupolas" },
    { name: "Pijus", place: "Kupolas" },
    { name: "Dianos vyras", place: "Kupolas" },
    { name: "Tomas", place: "Kupolas" },
    { name: "Julija", place: "Kupolas" },
    { name: "Valerija", place: "Kupolas" },

    { name: "Kamilės vyras", place: "Namas miegojimui – trečias" },
    { name: "Kamilė sr.", place: "Namas miegojimui – trečias" },
    { name: "Aušrinė", place: "Namas miegojimui – trečias" },
    { name: "Giedrius", place: "Namas miegojimui – trečias" }
];

const info = {
    namas1: `
        <h2>🏠 Namas miegojimui – pirmas</h2>
        <p>Pagrindinis miegamasis namas viršutinėje sodybos dalyje.</p>
    `,

    sale: `
        <h2>🏛️ Pokylių salė</h2>
        <p>Čia vyks pagrindinė vestuvių šventė: vakarienė, vedėjo programa, muzika ir šokiai.</p>
        <p>Nuo maždaug 01:00–02:00 val. šventės dalis persikels į šią erdvę.</p>
    `,

    namas2: `
        <h2>🏠 Namas miegojimui – antras</h2>
        <p>Papildomas miegamasis namas prie takelio.</p>
    `,

    kupolas: `
        <h2>🏕️ Kupolas</h2>
        <p>Poilsio zona prie tvenkinio.</p>
        <p>Čia galės vykti ramesni pokalbiai, poilsis ir jaukus pasibuvimas.</p>
    `,

    namas3: `
        <h2>🏠 Namas miegojimui – trečias</h2>
        <p>Papildomas namelis apačioje dešinėje.</p>
        <p>Šiame namelyje numatytos 4 miegamos vietos.</p>
    `
};

function normalizeText(text){
    return text
        .toLowerCase()
        .trim()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "");
}

function findSleepPlace(){
    const input = normalizeText(document.getElementById("sleepInput").value);
    const result = document.getElementById("sleepResult");

    if(input === ""){
        result.innerHTML = "Įveskite vardą.";
        return;
    }

    const person = accommodation.find(guest =>
        normalizeText(guest.name) === input
    );

    if(person){
        result.innerHTML = `
            🏠 Jūsų nakvynės vieta:<br>
            <strong>${person.place}</strong>
        `;
    }else{
        result.innerHTML = "Vardas nerastas. Pasitikrinkite, ar įrašėte teisingai.";
    }
}

function showInfo(place){
    document.getElementById("infoBox").innerHTML = info[place];
}
