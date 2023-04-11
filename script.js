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




function playRound(playerSelection, computerSelection) {
    
    if(computerSelection == "Rock" && playerSelection == "rock") {
        return "It's a tie."
    } else if(computerSelection == "Paper" && playerSelection == "rock") {
        return "You lost. Paper is stronger than Rock."
    } else if(computerSelection == "Scissors" && playerSelection == "rock"){
        return "You Won!"
    } else if(computerSelection == "Rock" && playerSelection == "paper") {
        return "You Won!"
    } else if(computerSelection == "Paper" && playerSelection == "paper") {
        return "It's a tie."
    } else if(computerSelection == "Scissors" && playerSelection == "paper"){
        return "You lost. Scissors is stronger than Paper."
    } else if(computerSelection == "Rock" && playerSelection == "scissors") {
        return "You lost. Rock is stronger than Scissors."
    } else if(computerSelection == "Paper" && playerSelection == "scissors") {
        return "You Won!"
    } else if(computerSelection == "Scissors" && playerSelection == "scissors"){
        return "It's a tie."
    }
}   
const computerSelection = getComputerChoice();
const playerSelection = prompt("Rock, Paper, Scissors").toLowerCase();

console.log(playRound(playerSelection, computerSelection))