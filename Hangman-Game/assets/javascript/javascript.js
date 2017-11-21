		var alphabet = ['a', 'b', 'c', 'd', 'e', 'f','g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

		var wordBank = [ "defiant", "voyager", "enterprise", "discovery"];

		var blanks = [ ];

		var lettersUsed = [ ];
		var lives = 10;
		var guesses = [ ];
		var wins = 0;
		var loss = 0;

		var randomWord = wordBank[Math.floor(Math.random() * wordBank.length)]
		console.log(randomWord);
		console.log(randomWord.length);

		var guessesRemaining = 10;
		

		document.getElementById("lives").innerHTML = "You have " + lives + " lives remaining.";

			for (var i = 0; i < randomWord.length; i++) {
				blanks.push("_ ");
			}

			document.getElementById("wins").innerHTML = "Wins: " + wins;
			document.getElementById("loss").innerHTML = "Losses: " + loss;
			document.getElementById("wordHolder").innerHTML = blanks.join(" ");
			document.getElementById("guessesRemain").innerHTML = "You have " + guessesRemaining + " guesses remaining.";

		document.onkeyup = function(event){
			var userInput = event.key.toLowerCase();

			if (alphabet.indexOf(userInput) > -1 ) {
			
			   if (randomWord.indexOf(userInput) > -1 && lives > 0 && guessesRemaining > 0) {
				for (var i = 0; i < randomWord.length; i++) {
					document.getElementById("guessesRemain").innerHTML = "You have " + guessesRemaining + " guesses remaining.";
					if (randomWord[i] === userInput) {
						blanks[i] = userInput;
	
					}
					document.getElementById("wordHolder").innerHTML = blanks.join(" ");
					document.getElementById("guessesRemain").innerHTML = "You have " + guessesRemaining + " guesses remaining.";
				}
			}	else if (guesses.indexOf(userInput) > -1 || randomWord.indexOf(userInput) > -1 ) {
					alert("You have already used this letter");

			} else {
					guesses.push(userInput);
					document.getElementById("usedLetters").innerHTML = guesses.join(" ");
					document.getElementById("guessesRemain").innerHTML = "You have " + guessesRemaining + " guesses remaining.";
					lives--;

			}
		    guessesRemaining--;
			document.getElementById("lives").innerHTML = "You have " + lives + " lives remaining.";
			console.log(guessesRemaining);
				
			if (lives == 0) {
				alert("Game Over! You Lost!");
				document.getElementById("loss").innerHTML = "Losses: " + loss;
				loss--;
			} else if (guessesRemaining == 0) {
				alert("You have run out of guesses! You Lost!");
				document.getElementById("loss").innerHTML = "Losses: " + loss;
				loss--;
			} else if (blanks.indexOf("_ ") == -1) {
				function myFunction() {
    			setTimeout(function(){ alert("Congrats, You Win!!"); }, 500);
    		}
				myFunction();
				wins++;
				document.getElementById("wins").innerHTML = "Wins: " + wins;
			}

		}

		else {
			alert("Please enter a valid letter!!");
		}

		  }
			


		