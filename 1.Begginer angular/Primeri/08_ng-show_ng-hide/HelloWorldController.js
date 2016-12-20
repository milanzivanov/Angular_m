(function() {
	
	var HelloWorldController = function($scope) {	
		$scope.hidden = false;	
	
		$scope.toggleHidden = function(){
			if($scope.hidden == false)
				$scope.hidden = true;
			else
				$scope.hidden = false;
		}
	};

	var app = angular.module("myFirstModule"); 
	app.controller("HelloWorldController", HelloWorldController);

})();