var output = document.getElementById("result");

// var num1 = prompt("Inserisci numero 1.");
// var num2 = prompt("Inserisci numero 2.");
// var num3 = prompt("Inserisci numero 3.");
// var num4 = prompt("Inserisci numero 4.");
// var num5 = prompt("Inserisci numero 5.");
// var num6 = prompt("Inserisci numero 6.");
// var num7 = prompt("Inserisci numero 7.");
// var num8 = prompt("Inserisci numero 8.");
// var num9 = prompt("Inserisci numero 9.");
// var num10 = prompt("Inserisci numero 10.");

// num1= parseInt(num1);
// num2= parseInt(num2);
// num3= parseInt(num3);
// num4= parseInt(num4);
// num5= parseInt(num5);
// num6= parseInt(num6);
// num7= parseInt(num7);
// num8= parseInt(num8);
// num9= parseInt(num9);
// num10= parseInt(num10);

// var numbers=[num1, num2, num3, num4, num5, num6, num7, num8, num9, num10];
// var result = 0;
// for(i=0;i<10; i++){
//     result = result + numbers[i];
// }

// output.innerHTML = "Il risultato è " + result;

var result = 0;

for(var i=0; i<10;i++){
    var num=parseInt(prompt("Inserisci un numero"));
    result += num;
}

output.innerHTML = "Il risultato è " + result;