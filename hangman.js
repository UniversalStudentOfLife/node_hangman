var Word = require('./word.js');
var prompt = require('prompt');

console.log("Welcome to Hangman!");
console.log("Guess a Pokemon!");
console.log("==============");

prompt.start();



list = {
  wordList: ['pikachua', 'bulbasaur', 'charmander', 'squirtle', 'cliffary', 'cubone', 'magikarp'],
  guessesRemaining: 10,
  currentWord: null,
  
  Begin: function (wrd) {
    this.resetGuesses();
    this.currentWord = new Word(this.wordList[Math.floor(Math.random()* this.wordList.length)]);
    this.currentWord.collectLetters();
    this.promptUser();
  },

  resetGuesses: function(){
    this.guessesRemaining = 10;
  },

  promptUser: function(){
    var current = this;
    prompt.get(["guess"], function(err, result){
      var amountGuessed = current.currentWord.checkLetter(result.guess);
        console.log("Your guess: " + result.guess);

      if(amountGuessed ==0) {
        current.guessesRemaining--;
        console.log("INCORRECT");
        
      } else {
        console.log("CORRECT");
          if(current.currentWord.findWord()){
            console.log("You got it! The correct answer is: ", current.currentWord.word);
            console.log("==============");
            return;
          }
      }

      console.log("Guesses remaining: " + current.guessesRemaining);
      console.log("==============");
      if((current.guessesRemaining > 0) && (current.currentWord.found == false)){
        current.promptUser();
      }
      else if(current.guessesRemaining ==0){
        console.log("Game over. The correct word was: ", current.currentWord.word);
      } else {
        console.log(current.currentWord.wordRender());
      }
    });

  }


};

list.Begin();