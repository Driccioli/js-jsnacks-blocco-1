var word1 = prompt("Scrivi una parola.");
var word2 = prompt("Scrivi un' altra parola.");

if(word2.length > word1.length){
    document.getElementById("longer").innerHTML = word2 +" "+ word1;
}   else{
    document.getElementById("longer").innerHTML = word1 +" "+ word2;
}