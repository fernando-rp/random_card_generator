var tc=1;
var n=7;
window.onload = function() {
    tc= Math.floor(Math.random()*4)+1;
    n= Math.floor(Math.random()*13)+1;
    if (tc==1){
        document.getElementById("Mydiv1").className = "heart-t";
        document.getElementById("Mydiv2").className = "heart-b";
        document.querySelector("#Mydiv1").innerHTML= "♥";
        document.querySelector("#Mydiv2").innerHTML= "♥";
    } else if (tc==2){
        document.getElementById("Mydiv1").className = "club-t";
        document.getElementById("Mydiv2").className = "club-b";
        document.querySelector("#Mydiv1").innerHTML= "♣";
        document.querySelector("#Mydiv2").innerHTML= "♣";
    } else if (tc==3){
        document.getElementById("Mydiv1").className = "diamond-t";
        document.getElementById("Mydiv2").className = "diamond-b";
        document.querySelector("#Mydiv1").innerHTML= "♦";
        document.querySelector("#Mydiv2").innerHTML= "♦";
    } else {
        document.getElementById("Mydiv1").className = "spade-t";
        document.getElementById("Mydiv2").className = "spade-b";
        document.querySelector("#Mydiv1").innerHTML= "♠";
        document.querySelector("#Mydiv2").innerHTML= "♠";
    }

    if( n==11) n="J";
    else if (n==12) n="Q";
    else if (n==13) n="K";
    else if (n==1) n="A";

    document.getElementById("number").innerHTML = n;

 
}