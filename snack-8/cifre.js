var output = document.getElementById("output");

var input = prompt("Inserisci un numero di 4 cifre.");

while(input.length!=4){
    alert("Il numero inserito non ha 4 cifre!");
    input = prompt("Inserisci un numero di 4 cifre.");
}

var result= 0;
for(var i=0; i<input.length; i++){
    result+=parseInt(input[i]);
}

output.innerHTML = "La somma delle 4 cifre di " + input + " è " + result;