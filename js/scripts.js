
function names() {
    var year = document.getElementById("year").value;
    var centuryDig = parseInt(year.substring(0, 2));
    var yearDig = parseInt(year.substring(2, 4));
    var monthDig = parseInt(document.getElementById("month").value);
    var dateDig = parseInt(document.getElementById("date").value);
    var day = (((centuryDig / 4) - 2 * centuryDig - 1) + ((5 * yearDig / 4)) + ((26 * (monthDig + 1) / 10)) + dateDig) % 7;

    if (year == "") {
        alert("Not valid");
        return false;
    }
    if (monthDig == "") {
        alert("Not invalid");
        return false;
    }
    if (monthDig > 12 || monthDig <= 0) {
        alert("Not valid");
        return false;
    }
    if (dateDig == "") {
        alert("Not valid");
        return false;
    }
    if (dateDig > 31 || dateDig <= 0) {
        alert("Not valid");
        return false;
    }

    var myGender = document.getElementById("gender").value
    var akanName;

    if (myGender == "Male") {
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
        } else {
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
        } else {
            akanName = "Akosua";
        }
    }

    document.getElementById("display").innerHTML = "Your Akan Name is " + akanName;

}