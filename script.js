{
    const title = new Date().toLocaleDateString('de-DE', { month: 'long', day: 'numeric', year: 'numeric' });
    document.title = `Kalenderblatt vom ${title}`;
    console.log(title)
}
{
    const headline = new Date().toLocaleDateString('de-DE', { month: 'long', day: 'numeric', year: 'numeric' });
    document.getElementById("main-headline").textContent = `Kalenderblatt vom ${headline}`;
    console.log(headline)
}
{
    var datum = new Date().toLocaleDateString('de-DE')
    document.getElementById("Datum").innerHTML = datum;
    console.log(datum)
}
{ 
    const test = new Date()
    const month = test.toLocaleString('de-DE', { month:'long'})
    document.getElementById("monat").innerHTML = month
    console.log(month)
}
{
    const wday = new Date()
    const weekday = wday.toLocaleString('de-DE',{ weekday:'long' })
    document.getElementById("wochentag1").innerHTML =weekday;
    document.getElementById("wochentag2").innerHTML=weekday;
    console.log(weekday)
}
{
    const jahr = new Date().getFullYear()
    const FullYear = jahr
    document.getElementById("jahre").innerHTML = FullYear
    console.log(FullYear)
}
{
    const Datum = new Date
    const nummer = Math.ceil(Datum.getDate() / 7);
    document.getElementById("wieviel").innerHTML = nummer
    console.log(nummer)
}
{
    function getEasterSunday(year) {
    const a = year % 19;
    const b = Math.floor(year / 100);
    const c = year % 100;
    const d = Math.floor(b / 4);
    const e = b % 4;
    const f = Math.floor((b + 8) / 25);
    const g = Math.floor((b - f + 1) / 3);
    const h = (19 * a + b - d - g + 15) % 30;
    const i = Math.floor(c / 4);
    const k = c % 4;
    const l = (32 + 2 * e + 2 * i - h - k) % 7;
    const m = Math.floor((a + 11 * h + 22 * l) / 451);

    const month = Math.floor((h + l - 7 * m + 114) / 31);
    const day = ((h + l - 7 * m + 114) % 31) + 1;

    return new Date(year, month - 1, day);
    }


    function addDays(date, days) {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
    }

    function isHoliday(date = new Date()) {
    const year = date.getFullYear();

    const easter = getEasterSunday(year);

    const holidays = [
        new Date(year, 0, 1),   // Neujahr
        addDays(easter, -2),    // Karfreitag
        addDays(easter, 1),     // Ostermontag
        new Date(year, 4, 1),   // Tag der Arbeit
        addDays(easter, 39),    // Christi Himmelfahrt
        addDays(easter, 50),    // Pfingstmontag
        new Date(year, 9, 3),   // Tag der Deutschen Einheit
        new Date(year, 11, 25), // 1. Weihnachtstag
        new Date(year, 11, 26)  // 2. Weihnachtstag
    ];

    return holidays.some(h =>
        h.getDate() === date.getDate() &&
        h.getMonth() === date.getMonth() &&
        h.getFullYear() === date.getFullYear()
    );
}

if (isHoliday()) {
    document.getElementById("feiertagabfrage").innerHTML = "Heute ist ein Feiertag!";
} else {
    document.getElementById("feiertagabfrage").innerHTML = "Heute ist kein Feiertag.";
}
}