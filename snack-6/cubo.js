var output = document.getElementById("output");

var num= parseInt(prompt("Inserisci un numero."));

for(var i = 1; i<=num; i++){
    var cube = Math.pow(i,3);
    output.innerHTML += cube + "<br>";
}