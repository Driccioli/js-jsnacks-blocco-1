var output = document.getElementById("output");

var names=["Davide", "Ottavio", "Alfredo", "Christian", "Edoardo", "Marco", "Eleonora", "Gloria"];
var surnames=["Riccioli", "Fogliata", "Voza", "Guida", "Iervasi", "Grazian", "Rossi", "Ramoni"]
output.innerHTML = "<b>Lista invitati del Grande Gatsby:</b> <br>";
for(i=1; i<=3; i++){
    var nameIndex = Math.floor(Math.random()*names.length);
    var surnameIndex = Math.floor(Math.random()*surnames.length);
    output.innerHTML +=names[nameIndex] +" " + surnames[surnameIndex] +"<br>";
}