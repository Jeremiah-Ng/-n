function pog(){
    var p1=document.getElementById("player1_name_input").value;
    localStorage.setItem("wow",p1)
    console.log("E");
    var p2=document.getElementById("player2_name_input").value;
    localStorage.setItem("wow1",p2)
    console.log("E");
    window.location="game_page.html"
}