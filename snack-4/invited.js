var output = document.getElementById("output");

var name= prompt("Qual è il tuo nome?");
var gatsby= ["Ottavio", "Alfredo", "Davide"];
var invited = false;
for(var i=0; i<gatsby.length;i++){
    if(name===gatsby[i]){
        invited=true;
        break;
    }
}

if(invited){
    output.innerHTML ="Sei ammesso alla festa del grande Gatsby!"
}   else{
    output.innerHTML = "Non sei nella lista degli invitati del grande Gatsby, GTFO"
}