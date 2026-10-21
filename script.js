// 1. Finde das Element im HTML mithilfe seiner ID
let headline = document.getElementById("main-headline");
// 2. Ändere seinen Textinhalt
headline.textContent = "Wow ist das witzig";
{
const d = new Date().toLocaleDateString('de-DE')
document.getElementById("Datum").innerHTML = d;
console.log(d)
}