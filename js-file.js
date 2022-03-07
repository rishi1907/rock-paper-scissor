const hand = ["rock","paper","scissor"];
const winnerNode = document.querySelector(".result");
let winner = winnerNode.textContent;
let score1 = 0;
let score2 = 0;
let matches = 0;
let gameReset = false;

const scoreNode = document.querySelector(".score");
let Displayscores = ""


function computerPlay() {
  let x = Math.random()*3 + 1;
  while(x === 0) {
    x = Math.random()*3 + 1;
  }
  let randomNum = Math.floor(x);
  if(randomNum === 1) {
    return "rock";
  }
  else if(randomNum === 2) {
    return "paper";
  }
  else {
    return "scissor";
  }
}
 

function playRound(playerSelection, computerSelection) {
   let player1 = playerSelection.toLowerCase()
   let player2 = computerSelection

   if(player1=="rock"){

     switch(player2) {
       case "rock":
            winner="";
            winner = winner+"its a tie!";
            winnerNode.textContent =winner; 
            console.log("its a tie!");
            return "C";
            break;
       case "paper":
             winner="";
             winner = winner+"you lose, paper beats rock";
             winnerNode.textContent =winner;

             console.log("you lose, paper beats rock");
             return "B";
             break;
       case "scissor":
             winner="";
             winner = winner+"you win, rock beats scissor";
             winnerNode.textContent =winner;
             console.log("you win, rock beats scissor");
             return "A";
             break;           
      }
   }  
    else if(player1== "paper") {
      switch(player2) {
       case "rock":
            winner="";
            winner = winner+"you lose, paper beats rock";
            winnerNode.textContent =winner;
            console.log("you lose, paper beats rock");
            return "B";
            break;
       case "paper":
             winner="";
             winner = winner+"its a tie!";
             winnerNode.textContent =winner;
             console.log("its a tie!");
             return "C";
             break;
       case "scissor":
             winner="";
             winner = winner+"you win, paper beats scissor";
             winnerNode.textContent =winner;
             console.log("you win, paper beats scissor");
             return "A";
             break;           
      }
    }   
    else {
      switch(player2) {
       case "rock":
            winner="";
            winner = winner+"you lose, rock beats scissor";
            winnerNode.textContent =winner;
            console.log("you lose, rock beats scissor");
            return "B";
            break;
       case "paper":
             winner="";
             winner = winner+"you win, scissoe beats rock";
             winnerNode.textContent =winner;
             console.log("you win, scissoe beats rock");
             return "A";
             break;
       case "scissor":
             winner="";
             winner = winner+"its a tie!";
             winnerNode.textContent =winner;
             console.log("its a tie");
             return "C";
             break;           
      }
    }   
     
   }


 function game(user, machine) {
   let result;   
   result = playRound(user, machine)

   if(result === "A") {
     score1 = score1 + 1;
     
   }
   else if(result === "B") {
     score2 = score2 + 1;  
   }
   Displayscores = `${score1}-${score2}`; 
   scoreNode.textContent = Displayscores;
   if((score1 === 5) && (score2 !== 5) ) {
     winner="";
     winner = winner+"you won the game";
     winnerNode.textContent =winner; 
     console.log("you won the game");
     gameReset = true;
   }
   else if((score2 === 5) && (score1 !== 5)) {
    winner="";
    winner = winner+"you lose the game";
    winnerNode.textContent =winner; 
     console.log("you lose the game");
     gameReset = true;
   }
   else if((score1=== score2) && (score1===5)){
    winner="";
    winner = winner+"the game tied";
    winnerNode.textContent =winner; 
     console.log("the game tied");
     gameReset = true;
   }
 } 

 const buttons = document.querySelectorAll("button");
 buttons.forEach((button)=>{
       button.addEventListener("click",(e)=>{
          if(gameReset) {
            
            score1 = 0;
            score2 = 0;
            gameReset = false
          }
          let btn = e.target;
          let player = btn.textContent;
          let computer = computerPlay();
          game(player,computer);
       });
 });