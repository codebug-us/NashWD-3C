document.addEventListener('DOMContentLoaded', function() {

  // The code below allows the computer to pick a random choice between: rock, paper, or scissors.
  var options = ["rock", "paper", "scissors"];
  var computerChoice = options[Math.floor(Math.random() * options.length)];
  // Your prompt() goes below
var userChoice = prompt ("rock, paper, or scissors fool");
console.log("The user chooses: " + userChoice);





  console.log("The computer chooses: " + computerChoice);
  // Your declareWinner function goes below
function declareWinner(userChoice,computerChoice){

	if (userChoice == "rock" && computerChoice == "rock"){
		return "TIE";
	} else  if (userChoice == "rock" && computerChoice == "scissors"){
		return "YOUR DITYYY";
	} else if (userChoice == "rock" && computerChoice == "paper"){
		return "YOU SUCK";
	} else if (userChoice == "scissors" && computerChoice == "rock"){
		return "YOU SUCK";
	} else if (userChoice == "scissors" && computerChoice == "scissors"){
		return "TIE";
	} else if (userChoice == "scissors" && computerChoice == "paper"){
		return "congrats, bro";
	} else if (userChoice == "paper" && computerChoice == "paper"){
		return "TIE";
	} else if (userChoice == "paper" && computerChoice == "scissors"){
		return "hah, nice try";
	} else if (userChoice == "paper" && computerChoice == "rock"){
		return "SWEEEET";
	}else{
		return "put in the just word stupid";
	}
}
console.log(declareWinner(userChoice,computerChoice));

});
