(function() {
	
	var HelloWorldController = function($scope) {		
	
	    // Za scope se može zakačiti i funkcija
		$scope.myFunctionClick = function(){
			alert( $scope.usernameClick + " clicked!");
		}

		$scope.myFunctionSubmit = function(usernameSubmit){
			alert( usernameSubmit + " clicked!");	
		}

	};

	var app = angular.module("myFirstModule"); 
	app.controller("HelloWorldController", HelloWorldController);

})();