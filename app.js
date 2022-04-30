function cuentaRegresiva(enteredDate) {

    const d = document;

    const $days = d.querySelector(".days"),
        $hours = d.querySelector(".hours"),
        $minutes = d.querySelector(".minutes"),
        $seconds = d.querySelector(".seconds");



    let tempor = setInterval(() => {
        const enteredDateSeconds = Date.parse(enteredDate);
        const currentDateSeconds = Date.parse(new Date);
        const  secondsApart = enteredDateSeconds - currentDateSeconds;
        const daysApart = parseInt( secondsApart / 86400000);
        const hoursApart = parseInt(( secondsApart % 86400000) / 3600000);
        const minutsApart = parseInt((( secondsApart % 86400000) % 3600000) / 60000);
        const secondsOfFinalDifference = ((( secondsApart % 86400000) % 3600000) % 60000) / 1000;
        $days.textContent = (`${("0" + daysApart).slice(-2)}`);
        $hours.textContent = (`${("0" + hoursApart).slice(-2)}`);
        $minutes.textContent = (`${("0" + minutsApart).slice(-2)}`);
        $seconds.textContent = (`${("0" + secondsOfFinalDifference).slice(-2)}`);


        if (daysApart <= 0 && hoursApart <= 0 && minutsApart <= 0 && secondsOfFinalDifference <= 0) {
            alert("se termino la cuenta regresiva");
            clearInterval(tempor);
        }
    }, 1000)

 
}


cuentaRegresiva(new Date(2022,6,15))








