var output = document.getElementById("output");

var dispari = new Array(6);
var k= 0;

for(var i=0; i<6; i++){
    var num = parseInt(prompt("inserisci un numero"));
    if((num % 2)!=0){
        dispari[k] = num;
        k++;
    }
}

output.innerHTML = dispari;