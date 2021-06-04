var num1 = prompt("Inserisci primo numero.");
var num2 = prompt("Inserisci secondo numero.");

num1 = parseInt(num1);
num2 = parseInt(num2);

if(num1 > num2){
    document.getElementById("higher").innerHTML = num1;
} else{
    document.getElementById("higher").innerHTML = num2;
}