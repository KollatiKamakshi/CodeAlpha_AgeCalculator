// JavaScript

let countdownInterval; 

function calculateAge() {
    var dob = document.getElementById("dob").value;
    if (!dob) {
        document.getElementById("result").innerHTML = "Please enter your date of birth.";
        document.getElementById("countdown").innerHTML = "";
        clearInterval(countdownInterval); 
        return;
    }

    var currentDate = new Date();
    var birthDate = new Date(dob);
    var ageInMilliseconds = currentDate - birthDate;
    var ageDate = new Date(ageInMilliseconds);

    var years = ageDate.getUTCFullYear() - 1970;
    var months = ageDate.getUTCMonth();
    var days = ageDate.getUTCDate() - 1;

    document.getElementById("result").innerHTML = `Your age is ${years} years, ${months} months, and ${days} days.`;


    var nextBirthday = new Date(birthDate);
    nextBirthday.setFullYear(currentDate.getFullYear());

    if (
        currentDate.getDate() === nextBirthday.getDate() &&
        currentDate.getMonth() === nextBirthday.getMonth()
    ) {
        document.getElementById("countdown").innerHTML = "🎉 Happy Birthday! 🎂";
        document.getElementById("countdown").classList.add("celebrate");
        clearInterval(countdownInterval); 
        return;
    }

    if (currentDate > nextBirthday) {
        nextBirthday.setFullYear(currentDate.getFullYear() + 1);
    }

    clearInterval(countdownInterval);

    countdownInterval = setInterval(() => {
        var now = new Date();
        var timeUntilNextBirthday = nextBirthday - now;

        if (timeUntilNextBirthday <= 0) {
            clearInterval(countdownInterval); 
            document.getElementById("countdown").innerHTML = "🎉 Happy Birthday! 🎂";
            document.getElementById("countdown").classList.add("celebrate");
            return;
        }

        var days = Math.floor(timeUntilNextBirthday / (1000 * 60 * 60 * 24));
        var hours = Math.floor((timeUntilNextBirthday % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((timeUntilNextBirthday % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((timeUntilNextBirthday % (1000 * 60)) / 1000);

        document.getElementById("countdown").innerHTML = `Time until your next birthday: ${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds.`;
        document.getElementById("countdown").classList.remove("celebrate"); 
    }, 1000);
}
