var output = document.getElementById("output");
var somma=0;

for(i=1; i<=5; i++){
    var input= parseInt(prompt("Inserisci un numero."));
    while(typeof(input)!= 'number'){
        alert("Non hai inserito un numero.")
        input = parseInt(prompt("Inserisci un numero."));
    }
    somma+= input;
}

output.innerHTML = "La somma dei numeri inseriti è " + somma;

var somma2=0;
var i=1;
while(i<=5){
    var input= parseInt(prompt("Inserisci un numero."));
    while(typeof(input)!= 'number'){
        alert("Non hai inserito un numero.")
        input = parseInt(prompt("Inserisci un numero."));
    }
    somma2+= input;
    i++;
}

output.innerHTML += "<br> La seconda somma dei numeri inseriti è " +somma2; 