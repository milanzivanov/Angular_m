(function() {
	
	var WeatherController = function($scope) {		
		$scope.message = "The weather is cloudy"; 
	};

	var app = angular.module("myFirstModule"); 
	app.controller("WeatherController", WeatherController);

})();