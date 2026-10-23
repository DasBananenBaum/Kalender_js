{
    let headline = document.getElementById("main-headline");
    headline.textContent = "Wow ist das witzig";
}
{
    var d = new Date().toLocaleDateString('de-DE')
    document.getElementById("Datum").innerHTML = d;
    console.log(d)
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
