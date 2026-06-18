const guests = [

    // 1 stalas
    {name:"Evelina", table:1},
    {name:"Evelinos bičas", table:1},
    {name:"Kamilė", table:1},
    {name:"Pijus", table:1},
    {name:"Dianos vyras", table:1},
    {name:"Diana", table:1},
    {name:"Gaja", table:1},
    {name:"Tomas", table:1},
    {name:"Kamilė (bendrai)", table:1},
    {name:"Julija", table:1},
    {name:"Valerija", table:1},

    // 2 stalas
    {name:"Laura", table:2},
    {name:"Viktoras", table:2},
    {name:"Nerijus", table:2},
    {name:"Daiva", table:2},
    {name:"Renata", table:2},
    {name:"Karolis", table:2},
    {name:"Zita", table:2},
    {name:"Diana 2", table:2},
    {name:"Slavinas", table:2},
    {name:"Bronius", table:2},
    {name:"Gintė", table:2},

    // 3 stalas
    {name:"Samanta", table:3},
    {name:"Bronius Rupšas", table:3},
    {name:"Edvinas", table:3},
    {name:"Ema", table:3},
    {name:"Vasa", table:3},
    {name:"Žygis", table:3},
    {name:"Paulius", table:3},
    {name:"Indrė", table:3},
    {name:"Gaja 2", table:3},
    {name:"Daiva 2", table:3},
    {name:"Patricija", table:3},
    {name:"Meida", table:3},

    // 4 stalas
    {name:"Kamilės vyras", table:4},
    {name:"Kamilė sr.", table:4},
    {name:"Aušrinė", table:4},
    {name:"Giedrius", table:4},
    {name:"Rokas", table:4},
    {name:"Beatričė", table:4},
    {name:"Donvitas", table:4},
    {name:"Dovydo draugė", table:4},
    {name:"Paulius 2", table:4},
    {name:"Vika", table:4},
    {name:"Patricija 2", table:4},

    // 5 stalas
    {name:"Mantas", table:5},
    {name:"Laurynas", table:5},
    {name:"Viktorija", table:5},
    {name:"Jurgita", table:5},
    {name:"Nerijus 2", table:5},
    {name:"Marius", table:5},
    {name:"Justinas", table:5},
    {name:"Nerijus 3", table:5},
    {name:"Nedas", table:5}

];

function findSeat(){

    const input = document
        .getElementById("searchInput")
        .value
        .toLowerCase();

    const person = guests.find(g =>
        g.name.toLowerCase() === input
    );

    const result = document.getElementById("result");

    if(person){

        let emoji = "";

        switch(person.table){

            case 1:
                emoji="🟡";
                break;

            case 2:
                emoji="🟣";
                break;

            case 3:
                emoji="🔵";
                break;

            case 4:
                emoji="🟢";
                break;

            case 5:
                emoji="🩷";
                break;

        }

        result.innerHTML =
        `
        <h2>
        ${person.name}
        </h2>

        <h3>
        Jūsų vieta: ${person.table} stalas ${emoji}
        </h3>
        `;

    }

    else{

        result.innerHTML =
        `
        <h3>
        Vardas nerastas.
        </h3>
        `;
    }

}
