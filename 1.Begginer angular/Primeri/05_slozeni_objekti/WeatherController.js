(function() {

	var WeatherController = function($scope) {
		$scope.weather={};//šta bi se desilo da izbrišemo ovu liniju koda? (pogledati konzolu)
    	$scope.weather.description = "The weather is cloudy";
    	$scope.weather.temperature = "15 degrees Celsius";
	};

	var app = angular.module("myFirstModule"); // Preuzimamo referencu na modul koji je ranije kreiran (u app.js)
	app.controller("WeatherController", WeatherController); // Registrujemo kontroler u preuzetom modulu

})();