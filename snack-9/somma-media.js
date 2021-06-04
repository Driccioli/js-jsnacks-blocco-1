var output = document.getElementById("output");

var somma=0;
var media=0;

for (i=1; i<10; i++){
    somma+=i;
}

media = somma/10;

output.innerHTML+="Somma dei primi 10 numeri: " + somma + "<br>";
output.innerHTML+="Media dei primi 10 numeri: " + media + "<br>";