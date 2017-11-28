		var alphabet = ['a', 'b', 'c', 'd', 'e', 'f','g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

		var wordBank = [ "defiant", "voyager", "enterprise", "discovery", "stargazer", "dauntless", "lacosta", "rio grande"];

		var blanks = [ ];

		var lettersUsed = [ ];
		var lives = 10;
		var guesses = [ ];
		var wins = 0;
		var loss = 0;

		var randomWord = wordBank[Math.floor(Math.random() * wordBank.length)]
		
		var guessesRemaining = 10;
			
			document.getElementById("lives").innerHTML = "You have " + lives + " lives remaining.";

			for (var i = 0; i < randomWord.length; i++) {
				blanks.push("_ ");
			}

			document.getElementById("wins").innerHTML = "Wins: " + wins;
			document.getElementById("loss").innerHTML = "Losses: " + loss;
			document.getElementById("wordHolder").innerHTML = blanks.join(" ");
			document.getElementById("guessesRemain").innerHTML = "You have " + guessesRemaining + " guesses remaining.";

		gameStart();

		document.onkeyup = function(event){
			var userInput = event.key.toLowerCase();

			if (alphabet.indexOf(userInput) > -1 && lives > 0 && guessesRemaining > 0 ) {
			
			   if (randomWord.indexOf(userInput) > -1) {
				for (var i = 0; i < randomWord.length; i++) {
					if (randomWord[i] === userInput) {
						blanks[i] = userInput;
						lettersUsed.push(userInput);
						console.log(lettersUsed);
					}
					document.getElementById("wordHolder").innerHTML = blanks.join(" ");
					document.getElementById("guessesRemain").innerHTML = "You have " + guessesRemaining + " guesses remaining.";
				}
			}	else if (guesses.indexOf(userInput) > -1 || randomWord.indexOf(userInput) > -1) {
					alert("You have already used this letter");
					guessesRemaining++;
					lives++;

			}	else {
					guesses.push(userInput);
					document.getElementById("usedLetters").innerHTML = guesses.join(" ");
					document.getElementById("guessesRemain").innerHTML = "You have " + guessesRemaining + " guesses remaining.";

			}		
				
			if (randomWord.indexOf(userInput) === -1) {
				guessesRemaining--;
				lives--;
				document.getElementById("guessesRemain").innerHTML = "You have " + guessesRemaining + " guesses remaining.";
				document.getElementById("lives").innerHTML = "You have " + lives + " lives remaining.";
			}

			if (randomWord.indexOf(userInput) > -1) {
				guessesRemaining--;
				document.getElementById("guessesRemain").innerHTML = "You have " + guessesRemaining + " guesses remaining.";
			}

			if (lives === 0) {
				alert("Game Over! You Lost!");
				loss++;
				document.getElementById("loss").innerHTML = "Losses: " + loss;
			}if (guessesRemaining === 0) {
				alert("You have run out of guesses! You Lost!");
				loss++;				
				document.getElementById("loss").innerHTML = "Losses: " + loss;
			}if (blanks.indexOf("_ ") === -1) {
				function myFunction() {
    			setTimeout(function(){ alert("Congrats, You Win!!"); }, 500);
    		}
				myFunction();
				wins++;
				document.getElementById("wins").innerHTML = "Wins: " + wins;
			}

		}
		else if (lives == 0 || guessesRemaining == 0) {
			alert("The Game is over. Please start again");
		}
		else {
			alert("Please enter a valid letter!!");
		}

		  }

	var music =document.getElementById("song");
	music.play();

function gameStart() {
	guessesRemaining = 10;
	lives = 10;
	blanks = [];
	guesses = [];
	lettersUsed = [];
	var wordBank = [ "defiant", "voyager", "enterprise", "discovery", "stargazer", "dauntless", "lacosta", "riogrande"];
	index = Math.floor(Math.random() * wordBank.length);
	randomWord = wordBank.splice(index, 1).toString();

	for (var i = 0; i < randomWord.length; i++) {
		blanks.push("_ ");
	}

	document.getElementById("wordHolder").innerHTML = blanks.join(" ");
	document.getElementById("guessesRemain").innerHTML = "You have " + guessesRemaining + " guesses remaining.";
	document.getElementById("usedLetters").innerHTML = guesses.join(" ");
	document.getElementById("hint").src="assets/images/startrek.png";
	console.log(randomWord);
};

function photoHint() {
	if (randomWord == "defiant") {
		document.getElementById("hint").src="assets/images/ds9.png";
	}
	if (randomWord == wordBank[3]) {
		document.getElementById("hint").scr="assets/images/ds9.png";
	}

	else {
		document.getElementById("hint").src="assets/images/startrek.png";
	}
};



		