var letter = require('./letter.js');

function Word(word) {
	this.userLetters = [];
	this.word = word;
	this.found = false;
	

	//add guesses to string
	this.correctguesses = "test";

	this.collectLetters = function() {
		for (var i=0; i < this.word.length; i++) {
			this.userLetters.push( new letter(this.word[i]));
		}
	};

	this.checkLetter = function(guess) {
		var toReturn = 0;

		for (var i = 0; i < this.userLetters.length; i++) {
			if (this.userLetters[i].character == guess) {
				this.userLetters[i].show = true;
				
				toReturn++;
			}
		}
		return toReturn;

	};

	//function to return string of correct letters






	this.findWord = function() {
		this.found = this.userLetters.every(function(letter) {
			//clear correctGuesses

			return letter.show;
		});
		return this.found;
	};

	this.wordRender = function() {
		var string = '';
		for (var i=0; i < this.userLetters.length; i++){
			string += this.userLetters[i].letterRender();
		}
		return string;
	};

}

module.exports = Word;