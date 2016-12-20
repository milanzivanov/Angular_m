(function() {
	'use strict';

	angular
		.module('app')
		.controller('GuessTheNumberController', GuessTheNumberController);

	GuessTheNumberController.$inject = ['randomNumberService'];
	function GuessTheNumberController(randomNumberService) {
		var guess = this;
		guess.verifyGuess = verifyGuess;
		guess.initializeGame = initializeGame;

		guess.initializeGame();

		function verifyGuess() {
			guess.deviation = guess.original - guess.guess;
			guess.noOfTries = guess.noOfTries + 1;
		}
		function initializeGame() {
			guess.noOfTries = 0;
			guess.original = randomNumberService.getNumber(1000);
			guess.guess = null;
			guess.deviation = null;
		}
	}
})();