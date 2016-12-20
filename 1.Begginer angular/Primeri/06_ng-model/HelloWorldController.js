(function() {
	
	var HelloWorldController = function($scope) {		
		$scope.message = "Hello, World!"; // zadajemo inicijalnu vrednost $scope.message
	};

	var app = angular.module("myFirstModule"); 
	app.controller("HelloWorldController", HelloWorldController);

})();