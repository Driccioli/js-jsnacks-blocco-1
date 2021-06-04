var output = document.getElementById("output");

for(var i = 1; i<=1000; i++){
    var due = Math.pow(2,i);
    output.innerHTML += due + "<br>";
}