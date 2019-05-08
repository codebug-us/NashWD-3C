document.addEventListener('DOMContentLoaded', function() {

  // The code below allows the computer to pick a random choice between: rock, paper, or scissors.
  var options = ["rock", "paper", "scissors"];
  var computerChoice = options[Math.floor(Math.random() * options.length)];
  // Your prompt() goes below
  var userChoice =prompt("rock, paper or scissors");
  console.log("The user chooses: "+ userChoice);



  console.log("The computer chooses: " + computerChoice);
  // Your declareWinner function goes below
 function declareWinner (userChoice, computerChoice){
  	
  	userChoice = userChoice.toLowerCase();
  	userChoice = userChoice.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()1234567890]/g,"")
  	userChoice=userChoice.replace(/\s/g,'');
  	// computerChoice = computerChoice.toLowerCase();

  	if((computerChoice=="rock" && userChoice=="scissors")||
  		(computerChoice=="scissors"&&userChoice=="paper")||
  		(computerChoice=="paper"&&userChoice=="rock")){
  		return "The computer won!";
  	}else if((userChoice=="rock" && computerChoice=="scissors")||
  		(userChoice=="scissors"&&computerChoice=="paper")||
  		(userChoice=="paper"&&computerChoice=="rock")){
		return "The user won!";
	}else if(userChoice==computerChoice){
		return "There is a tie";
  	}else{
  		return "The user entered an invalid value";
  	}
  	}

  //invoke declareWinner
  console.log(declareWinner(userChoice, computerChoice));






});
