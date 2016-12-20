(function() {
	
	// $interval servis je injektovan u kontroler
	var TimerController = function($scope, $interval) {
		$scope.secondsLeft = 5; // LoremIpsum tekst će se prikazati nakon 5 sekundi
		$scope.showText = false; // inicijalno tekst je sakriven pomoću ng-show=showText

		// funkcija koja se poziva perodično svake sekunde
		var decrementCountdown = function() {
			$scope.secondsLeft -= 1;
				if ($scope.secondsLeft < 1) {
					$scope.showText = true;
				}
		};

		var countdownInterval = null; // u ovom objektu će biti sačuvan promise koji vrati $interval servis. Ovaj objekat se može iskoristiti za prekid periodičnog poziva funkcije
		var startCountdown = function() {
			// decrementCountdown - funkcija koja se periodično poziva svakih 1000 ms (1s). $scope.secondsLeft - koliko puta će se ova funkcija pozvati
			countdownInterval = $interval(decrementCountdown, 1000, $scope.secondsLeft);
		};
		startCountdown(); // čim se stranica otvori započinje odbrojavanje

		$scope.cancelCountdown = function(){
			$interval.cancel(countdownInterval); // prekida periodični poziv funkcije
			$scope.secondsLeft = 0;
			$scope.showText = true;
		}
	};

	var app = angular.module("myFirstModule");
	app.controller("TimerController", TimerController);

})();