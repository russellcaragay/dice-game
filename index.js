
// Dice Randomizer Section
function start(){
    var player1Value = Math.floor(Math.random()*6)+1;
    var player2Value = Math.floor(Math.random()*6)+1;

    switch(player1Value){
        case 1:
            document.querySelector(".player1-dice").src = "images/dice1.png";
            break;
        case 2:
            document.querySelector(".player1-dice").src = "images/dice2.png";
            break;
        case 3:
            document.querySelector(".player1-dice").src = "images/dice3.png";
            break;
        case 4:
            document.querySelector(".player1-dice").src = "images/dice4.png";
            break;
        case 5:
            document.querySelector(".player1-dice").src = "images/dice5.png";
            break;
        case 6:
            document.querySelector(".player1-dice").src = "images/dice6.png";
            break;
    }

    switch(player2Value){
        case 1:
            document.querySelector(".player2-dice").src = "images/dice1.png";
            break;
        case 2:
            document.querySelector(".player2-dice").src = "images/dice2.png";
            break;
        case 3:
            document.querySelector(".player2-dice").src = "images/dice3.png";
            break;
        case 4:
            document.querySelector(".player2-dice").src = "images/dice4.png";
            break;
        case 5:
            document.querySelector(".player2-dice").src = "images/dice5.png";
            break;
        case 6:
            document.querySelector(".player2-dice").src = "images/dice6.png";
            break;
    }

    if(player1Value > player2Value){
        document.querySelector(".head-winner").textContent = "PLAYER 1 WINS";
        document.querySelector("#player1").textContent = "🚩PLAYER 1🚩";
        document.querySelector("#player2").textContent = "PLAYER 2";
    }
    else if(player1Value < player2Value){
        document.querySelector(".head-winner").textContent = "PLAYER 2 WINS!";
        document.querySelector("#player2").textContent = "🚩PLAYER 2🚩";
        document.querySelector("#player1").textContent = "PLAYER 1";
    }
    else if(player1Value == player2Value){
        document.querySelector(".head-winner").textContent = "TIE!";
        document.querySelector("#player1").textContent = "PLAYER 1";
        document.querySelector("#player2").textContent = "PLAYER 2";
    }

    document.getElementById("player1Score").textContent = "Dice Score: " + player1Value;
    document.getElementById("player2Score").textContent = "Dice Score: " + player2Value;

}


//Changing Themese
function theme(){
    
    var textQuery = document.querySelector(".theme-mode");
    if(textQuery.innerHTML === "🌑 Dark Mode? Click Me!"){
        textQuery.innerHTML = "☀️ Light Mode? Click Me!";
    } else{
        textQuery.innerHTML = "🌑 Dark Mode? Click Me!";
    };
    
    document.querySelector("body").classList.toggle("dark-mode");
    document.querySelector(".head-winner").classList.toggle("winner-dark");
    document.querySelector(".theme-mode").classList.toggle("theme-light");
    

}