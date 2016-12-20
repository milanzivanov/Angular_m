(function() {
	
	var HelloWorldController = function($scope) {		
		$scope.message = "Hello, World!";
	};

	var app = angular.module("myFirstModule"); 
	app.controller("HelloWorldController", HelloWorldController);

})();