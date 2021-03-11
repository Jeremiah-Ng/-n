
    var player1=localStorage.getItem("wow");
    var player2=localStorage.getItem("wow1");
    var player1s=0
    var player2s=0
    document.getElementById("p1n").innerHTML=player1+" : ";
document.getElementById("p1s").innerHTML=player1s;
document.getElementById("p2n").innerHTML=player2+" : ";
document.getElementById("p2s").innerHTML=player2s;
document.getElementById("player_question").innerHTML="Question Turn : "+player1;
document.getElementById("player_answer").innerHTML="Answer Turn : "+player2;
function uwot(){

    worditem=document.getElementById("word").value;
    word=worditem.toLowerCase();
    var c1=word.charAt(1);
    console.log("Congratulations this worked");
var c2=word.charAt(Math.floor(word.length/2));
console.log("Congratulations this worked");
var c3=word.charAt(word.length-1);
console.log("Congratulations this worked");
var r1=word.replace(c1,"_");
r1=r1.replace(c2,"_");
r1=r1.replace(c3,"_")
console.log(r1);
document.getElementById("word").value="";
w="<h1>"+"Q:"+r1+"</h1>"+"<br>"+"<br>"
a="Answer"+"<input type:'text' placeholder='Enter Answer Here' id='noice'>"+"<br>"+"<br>"
b="<button onClick='check()'>"+"Submit"+"</button>"
document.getElementById("output").innerHTML=w+a+b;
}
var queturn="player1"
var ansturn="player2"
function check(){
    var answer_text=document.getElementById("noice").value.toLowerCase();
    console.log(word)
    console.log(answer_text)
if(answer_text==word){
    console.log("rite answer")
if(ansturn=="player2"){
    player2s=player2s+1;
    document.getElementById("p2s").innerHTML=player2s;
console.log("p2 ans")
}
else{
    player1s=player1s+1;
    document.getElementById("p1s").innerHTML=player1s;
}
}
if(ansturn=="player2"){
    ansturn="player1"
queturn="player2"
    document.getElementById("player_question").innerHTML="Question Turn : "+player2;
document.getElementById("player_answer").innerHTML="Answer Turn : "+player1;

}
else{
    queturn="player2"
    ansturn="player1"
document.getElementById("player_question").innerHTML="Question Turn : "+player1;
document.getElementById("player_answer").innerHTML="Answer Turn : "+player2;
}
document.getElementById("output").innerHTML="";
}