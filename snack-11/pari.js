var output = document.getElementById("output");
var input = parseInt(prompt("Inserisci un numero."));
while(typeof(input)!= 'number'){
    alert("Non hai inserito un numero.")
    input = parseInt(prompt("Inserisci un numero."));
}

if(input%2==0){
    output.innerHTML = input;
}  else{
    output.innerHTML = input+1;
}