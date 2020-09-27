function names() {
    year = document.getElementById("year").value;
    var centuryDig = parseInt(year.substring(0, 2));
    var yearDig = parseInt(year.substring(2, 4));
    var monthDig = parseInt(document.getElementById("month").value);
    var dateDig = parseInt(document.getElementById("date").value);
    var day = (((centuryDig / 4) - 2 * centuryDig - 1) + ((5 * yearDig / 4)) + ((26 * (monthDig + 1) / 10)) + dateDig) % 7;
    console.log((Math.floor(day)));
