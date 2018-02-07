var Letters = function(letter) {
    this.letter = letter, //value 
    //will show the letter if correctly guessed
    this.correctGuess = false;
    //CHecks to see if the letter is true/false
    this.displayLetter = function() {
        if (this.correctGuess == false) {
            return (" _ ");
        } else {
            return (this.letter);
        }
    }

    this.letterGuess = function(charGuess) {
        if (this.letter == charGuess) {
            this.correctGuess = true;
        }
    }
};
//Exports file needed for word.js
module.exports = Letters;