let playerScore = 0;
let computerScore = 0;

const buttons = document.querySelectorAll("input");

function disableButtons() {
    buttons.forEach(elem => {
        elem.disabled = true
    })
    }

function getComputerChoice(){
    let num = Math.floor(Math.random() * 3);
    if(num === 0) {
        return "Rock";
    } else if(num === 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}


function playRound(playerSelection) {
    let computerSelection = getComputerChoice();
    let result = ""

    if ((playerSelection == "Rock" && computerSelection == "Scissors") ||
        (playerSelection == "Paper" && computerSelection == "Rock") ||
        (playerSelection == "Scissors" && computerSelection == "Paper")) {

            playerScore ++;

            result = ("<br><br>You win because " + playerSelection + " beats " + computerSelection
                    + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore)

            if (playerScore == 5){
                result = "<br><br>You won the game. Reload the page to play again."
                disableButtons();
            }
        }

            else if (playerSelection == computerSelection) {
                result = ("<br><br>It's a tie. You both chose " + playerSelection
                        + "<br><br>Player score: " + playerScore + "<br>Computer score " + computerScore)
            }

            else {
                computerScore ++;
                result = ("<br><br>You lose because " + computerSelection + " beats " + playerSelection
                        + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore)

                if (computerScore == 5) {
                    result = ("<br><br>You Lost. Reload the page to play again.")
                    disableButtons()
                }
            }
            
            document.getElementById("result").innerHTML = result;
            return
        }

        buttons.forEach(button =>{
            button.addEventListener('click', function(){
                playRound(button.value)
            })
        })