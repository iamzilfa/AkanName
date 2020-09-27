function names() {
    year = document.getElementById("year").value;
    var centuryDig = parseInt(year.substring(0, 2));
    var yearDig = parseInt(year.substring(2, 4));
    var monthDig = parseInt(document.getElementById("month").value);
    var dateDig = parseInt(document.getElementById("date").value);
    var day = (((centuryDig / 4) - 2 * centuryDig - 1) + ((5 * yearDig / 4)) + ((26 * (monthDig + 1) / 10)) + dateDig) % 7;
    console.log((Math.floor(day)));

    var genders = document.getElementById("gender").value
    if (genders == "male") {
        var akanName;
        if (day == 1) {
            akanName = "Kwadwo";
        } else if (day == 2) {
            akanName = "Kwabena";
        } else if (day == 3) {
            akanName = "Kwaku";
        } else if (day == 4) {
            akanName = "Yaw";
        } else if (day == 5) {
            akanName = "Kofi";
        } else if (day == 6) {
            akanName = "Kwame";
        } else if (day == 7) {
            akanName = "Kwasi"
        }
    }

    else {
        if (day == 1) {
            akanName = "Adwoa";
        } else if (day == 2) {
            akanName = "Abenaa";
        } else if (day == 3) {
            akanName = "Akua";
        } else if (day == 4) {
            akanName = "Yaa";
        } else if (day == 5) {
            akanName = "Afua";
        } else if (day == 6) {
            akanName = "Ama";
        } else if (day == 7) {
            akanName = "Akosua";
        }
    }

    document.getElementById("display").innerHTML = "Your Akan Name is " + akanName;

}
