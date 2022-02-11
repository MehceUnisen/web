main();


function main(){
    
    var diceOne = Math.floor(Math.random() * 6);
    var diceTwo = Math.floor(Math.random() * 6);

    decideWinner(diceOne, diceTwo);

    showImage(diceOne, diceTwo);
}

function showImage(diceOne, diceTwo){
    if(diceOne === 1){
        document.querySelector(".dice .img1").src = "C:/dev/web/dicee/images/dice1.png";
    }
    else if(diceOne === 2){
        document.querySelector(".dice .img1").src = "C:/dev/web/dicee/images/dice2.png";
    }
    else if(diceOne === 3){
        document.querySelector(".dice .img1").src = "C:/dev/web/dicee/images/dice3.png";
    }
    else if(diceOne === 4){
        document.querySelector(".dice .img1").src = "C:/dev/web/dicee/images/dice4.png";
    }
    else if(diceOne === 5){
        document.querySelector(".dice .img1").src = "C:/dev/web/dicee/images/dice5.png";
    }
    else{
        document.querySelector(".dice .img1").src = "C:/dev/web/dicee/images/dice6.png";
    }

    if(diceTwo === 1){
        document.querySelector(".dice .img2").src = "C:/dev/web/dicee/images/dice1.png";
    }
    else if(diceTwo === 2){
        document.querySelector(".dice .img2").src = "C:/dev/web/dicee/images/dice2.png";
    }
    else if(diceTwo === 3){
        document.querySelector(".dice .img2").src = "C:/dev/web/dicee/images/dice3.png";
    }
    else if(diceTwo === 4){
        document.querySelector(".dice .img2").src = "C:/dev/web/dicee/images/dice4.png";
    }
    else if(diceTwo === 5){
        document.querySelector(".dice .img2").src = "C:/dev/web/dicee/images/dice5.png";
    }
    else{
        document.querySelector(".dice .img2").src = "C:/dev/web/dicee/images/dice6.png";
    }

}

function decideWinner(diceOne, diceTwo){

    if(diceOne > diceTwo){
        document.querySelector(".container h1").textContent = "Player One Wins!";
    }
    
    else if(diceOne < diceTwo){
        document.querySelector(".container h1").textContent = "Player Two Wins!";
    }
    
    else{
        document.querySelector(".container h1").textContent = "Draw, Refresh Again!";
    }
    
}