		var alphabet = ['a', 'b', 'c', 'd', 'e', 'f','g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

		var wordBank = [ "defiant", "voyager", "enterprise", "discovery"];

		var lettersUsed = [ ];
		var lives = 10;
		var guesses = [ ];

		var randomWord = wordBank[Math.floor(Math.random() * wordBank.length)]
		console.log(randomWord);
		console.log(randomWord.length);
		

		document.getElementById("lives").innerHTML = "You have " + lives + " remaining.";

		for (var i = 0; i < randomWord.length; i++) {
			var li = document.createElement("li");
			li.innerHTML = "_ ";
			li.style.display = "inline";
			document.getElementById("wordHolder").appendChild(li);

		}

		document.onkeyup = function(event){
			var userInput = event.key.toLowerCase();

			if (randomWord.indexOf(userInput) > -1) {
				var rep = document.getElementById("wordHolder");
				rep.replaceChild(childNode[randomWord.indexOf(userInput)], userInput);
			}

			if (randomWord.indexOf(userInput) > -1) {
				guesses.push(userInput);
				for (i=0; i < guesses.length; i++) {
				var li = document.createElement("li");
				li.innerHTML = guesses[i];
				li.style.display = "inline";
				document.getElementById("usedLetters").appendChild(li);
				}
		  }
		}


		