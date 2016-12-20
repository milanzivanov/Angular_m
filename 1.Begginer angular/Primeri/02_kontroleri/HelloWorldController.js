(function() {
	
	var HelloWorldController = function($scope) {
		$scope.message = "Hello, World!"; // dodajemo message objekat u scope
	};

	var app = angular.module("myFirstModule"); // Preuzimamo referencu na modul koji je ranije kreiran (u app.js)
	app.controller("HelloWorldController", HelloWorldController); // Registrujemo kontroler u preuzetom modulu

})();