function countdown() {

    const target = new Date("2026-08-08T13:00:00");

    const now = new Date();

    const difference = target - now;

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));

    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);

    const minutes = Math.floor((difference / (1000 * 60)) % 60);

    const seconds = Math.floor((difference / 1000) % 60);

    document.getElementById("countdown").innerHTML =

    `
    <div class="countdown-box">

        <h3>LIKĘ IKI ŠVENTĖS</h3>

        <div class="time">

            ${days} d.
            ${hours} val.
            ${minutes} min.
            ${seconds} sek.

        </div>

    </div>
    `;

}

countdown();

setInterval(countdown,1000);
