function ieskoti(){

let vardas =
document.getElementById("vardas").value.toLowerCase();

let vieta = "Vieta dar nepriskirta";

if(vardas=="tomas")
vieta="Kupolas";

if(vardas=="samanta")
vieta="Didysis namas";

if(vardas=="bronius")
vieta="Didysis namas";

if(vardas=="giedrius")
vieta="Mažasis namas";

if(vardas=="rokas")
vieta="Namas prie tvenkinio";

document.getElementById("result").innerHTML=
"🏠 Jūsų nakvynės vieta:<br><br><b>"+vieta+"</b>";

}
