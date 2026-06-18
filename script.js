function countdown() {

const target = new Date("2026-08-08T13:00:00");

const now = new Date();

const diff = target - now;

const days = Math.floor(diff / (1000 * 60 * 60 * 24));

const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);

const minutes = Math.floor((diff / (1000 * 60)) % 60);

const seconds = Math.floor((diff / 1000) % 60);

document.getElementById("countdown").innerHTML =
`
<h3>LIKĘ IKI ŠVENTĖS</h3>

<p>

${days} dienų<br>
${hours} val.<br>
${minutes} min.<br>
${seconds} sek.

</p>
`;

}

setInterval(countdown,1000);
