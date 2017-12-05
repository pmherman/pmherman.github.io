		var alphabet = ['a', 'b', 'c', 'd', 'e', 'f','g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

		var wordBank = [ "processor", "memory", "monitor", "harddrive", "solidstate", "keyboard", "mouse", "touchpad", "liquidcrystaldisplay"];

		var blanks = [ ];
		var usedWords = [ ];
		var lettersUsed = [ ];
		var lives = 10;
		var guesses = [ ];
		var winsP1 = 0;
		var lossP1 = 0;
		var winsP2 = 0;
		var lossP2 = 0;
		var player1;
		var player2;

		var activePlayer;
		var index;
		var randomWord;
		
		var guessesRemaining = 10;
			
			document.getElementById("lives").innerHTML = "You have " + lives + " lives remaining.";

		

		if (wordBank.length > 0) {
			gameStart();
		} else if (winsP2 > winsP1) {
			alert("Player 2 Wins!");
		} else if (winsP2 < winsP1) {
			alert("Player 1 Wins!");
		}


			// for (var i = 0; i < randomWord.length; i++) {
			// 	blanks.push("_ ");
			// }

			document.getElementById("wins").innerHTML = "Wins: " + winsP1;
			document.getElementById("loss").innerHTML = "Losses: " + lossP1;
			document.getElementById("winsP2").innerHTML = "Wins: " + winsP2;
			document.getElementById("lossP2").innerHTML = "Losses: " + lossP2;
			document.getElementById("wordHolder").innerHTML = blanks.join(" ");
			document.getElementById("guessesRemain").innerHTML = "You have " + guessesRemaining + " guesses remaining.";



		player1 = true;
		player2 = false;

		function ckActivePlayer() {
			if (player1 == true) {
				player1game();
			}
			if (player2 == true) {
				player2game();
			}			
		}

		ckActivePlayer();

		function player1game() {
			console.log("Player 1");
			document.onkeyup = function(event){
				var userInput = event.key.toLowerCase();

				if (alphabet.indexOf(userInput) > -1 && lives > 0 && guessesRemaining > 0 ) {
					
					if (randomWord.indexOf(userInput) > -1 && lettersUsed.indexOf(userInput) == -1) {
						for (var i = 0; i < randomWord.length; i++) {
							if (randomWord[i] === userInput) {
								blanks[i] = userInput;
								lettersUsed.push(userInput);
							}
							console.log(blanks);
							document.getElementById("wordHolder").innerHTML = blanks.join(" ");
							document.getElementById("guessesRemain").innerHTML = "You have " + guessesRemaining + " guesses remaining.";
						}
					}  else if (guesses.indexOf(userInput) > -1 && lettersUsed.indexOf(userInput) > -1) {
							alert("You have already used this letter");
							console.log(guesses);
							guessesRemaining++;
							lives++;

					}  else if (lettersUsed.indexOf(userInput) > -1) {
							alert("You have already used this letter");
							guessesRemaining++;
					} else {
							guesses.push(userInput);
							lettersUsed.push(userInput);
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

					if (lives === 0 || guessesRemaining === 0) {
						alert("The Game is over. Please start again Player 1 Losses");
						player1 = false;
						player2 = true;
						console.log("Player 1: " + player1);
						console.log("Player 2: " + player2);
				}

					if (lives === 0) {
						alert("Game Over! You Lost! The Correct word was " + randomWord);
						lossP1++;
						document.getElementById("loss").innerHTML = "Losses: " + lossP1;
					}if (guessesRemaining === 0) {
						alert("You have run out of guesses! You Lost! The correct word was " + randomWord);
						lossP1++;			
						document.getElementById("loss").innerHTML = "Losses: " + lossP1;
					}if (blanks.indexOf("_ ") === -1) {
						function myFunction() {
		    			setTimeout(function(){ alert("Congrats, You Win!!"); }, 500);
		    		}
						myFunction();
						winsP1++;
						document.getElementById("wins").innerHTML = "Wins: " + winsP1;
					} 

				} else {
					alert("Please enter a valid letter!!");
				}


			}
		}
		function player2game() {
			console.log("Player2");
			document.onkeyup = function(event){
				var userInput = event.key.toLowerCase();

				if (alphabet.indexOf(userInput) > -1 && lives > 0 && guessesRemaining > 0 ) {
					
					if (randomWord.indexOf(userInput) > -1 && lettersUsed.indexOf(userInput) == -1) {
						for (var i = 0; i < randomWord.length; i++) {
							if (randomWord[i] === userInput) {
								blanks[i] = userInput;
								lettersUsed.push(userInput);
							}
							document.getElementById("wordHolder").innerHTML = blanks.join(" ");
							document.getElementById("guessesRemain").innerHTML = "You have " + guessesRemaining + " guesses remaining.";
						}
					}  else if (guesses.indexOf(userInput) > -1 && lettersUsed.indexOf(userInput) > -1) {
							alert("You have already used this letter");
							console.log(guesses);
							guessesRemaining++;
							lives++;

					}  else if (lettersUsed.indexOf(userInput) > -1) {
							alert("You have already used this letter");
							guessesRemaining++;
					} else {
							guesses.push(userInput);
							lettersUsed.push(userInput);
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

					if (lives == 0 || guessesRemaining == 0) {
						player2 = false;
						player1 = true;
						console.log("Player 1: " + player1);
						console.log("Player 2: " + player2);
						alert("The Game is over. Please start again, Player 2 Loses!");					
					}

					if (lives === 0) {
						alert("Game Over! You Lost! The Correct word was " + randomWord);
						lossP2++;
						document.getElementById("lossP2").innerHTML = "Losses: " + lossP2;
					}if (guessesRemaining === 0) {
						alert("You have run out of guesses! You Lost! The correct word was " + randomWord);
						lossP2++;				
						document.getElementById("loss").innerHTML = "Losses: " + lossP2;
					}if (blanks.indexOf("_ ") === -1) {
						function myFunction() {
		    			setTimeout(function(){ alert("Congrats, You Win!!"); }, 500);
		    		}
						myFunction();
						winsP2++;
						document.getElementById("winsP2").innerHTML = "Wins: " + winsP2;
					} 

				}

				else {
					alert("Please enter a valid letter!!");
				}

			}
		}

		console.log("Player 1: " + player1);
		console.log("Player 2: " + player2);


function gameStart() {
	guessesRemaining = 30;
	lives = 10;
	blanks = [];
	guesses = [];
	lettersUsed = [];
	index = Math.floor(Math.random() * wordBank.length);
	randomWord = wordBank.splice(index, 1).toString();
	console.log(index);
	wordBank.pop(index);


	for (var i = 0; i < randomWord.length; i++) {
		blanks.push("_ ");
	}

	document.getElementById("wordHolder").innerHTML = blanks.join(" ");
	document.getElementById("guessesRemain").innerHTML = "You have " + guessesRemaining + " guesses remaining.";
	document.getElementById("usedLetters").innerHTML = guesses.join(" ");
	console.log(randomWord);

	ckActivePlayer();

		console.log(wordBank);	
		console.log(blanks);
		console.log("gamestartfired");	

};




		