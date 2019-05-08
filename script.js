document.addEventListener('DOMContentLoaded', function() {
  
  // Your declareWinner function goes below
  function declareWinner(userChoice, computerChoice){
  	var res;
  	userChoice = userChoice.toLowerCase();
  	userChoice = userChoice.trim();
  	computerChoice = computerChoice.toLowerCase();

  	if(userChoice[0] == "r"){
  		userChoice = userChoice.substring(0, 4);
  	}else if(userChoice[0] == "s"){
  		userChoice = userChoice.substring(0, 8);
  	}else if(userChoice[0] == "p"){
  		userChoice = userChoice.substring(0, 5);
  	}
  	console.log(userChoice);


  	if(userChoice == "rock"){
  		if(computerChoice == "paper"){
  			res = "The computer won";
  		}else if(computerChoice == "scissors"){
  			res = "The user won";
  		}else{
  			res = "tie, go again";
  		}
  		 
  	}else if(userChoice == "paper"){
  		if(computerChoice == "rock"){
  			res = "The user won";
  		}else if(computerChoice == "scissors"){
  			res = "The computer won";
  		}else{
  			res = "tie, go again";
  		}

  	}else if(userChoice == "scissors"){
  		if(computerChoice == "rock"){
  			res = "The computer won";
  		}else if(computerChoice == "paper"){
  			res = "The user won";
  		}else{
  			res = "tie, go again";
  		}

  	}else{
  		res = "pick something valid...";
  	}
  	
  	return res;
  }

  // The code below allows the computer to pick a random choice between: rock, paper, or scissors.
  while(userChoice != "exit"){
  	var options = ["rock", "paper", "scissors"];
  	var computerChoice = options[Math.floor(Math.random() * options.length)];
  	var userChoice = prompt("choose between rock, paper and scissors");
  	console.log("The user chooses: " + userChoice);
  	console.log("The computer chooses: " + computerChoice);

  	console.log(declareWinner(userChoice, computerChoice));
  }

});
