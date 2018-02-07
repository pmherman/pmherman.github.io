//Link to required files and packages
var inquirer = require("inquirer");
var Word = require("./word.js");

//Global Variables
var lettersAlreadyGuessed = [];
var correctLettersGuessed = [];
var hangman;

var hangmanGame = {
    wordBank: ["Flash", "Arrow", "Kid Flash", "The Atom", "Killer Frost"],
    currentWord: wordBank[Math.floor(Math.random() * wordBank.length)],
    remainingGuesses: 10,

    beginGame: function()
}