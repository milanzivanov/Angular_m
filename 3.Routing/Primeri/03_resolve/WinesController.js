(function(){
	var WinesController = function($scope, $window, WinesDataService){
		
		$scope.doClick = function(){
			$window.alert($scope.userInput);
		}

		var onSuccessCallback = function(response){
			$scope.wines = response.data.results;
		}
		var onErrorCallback = function(reason){
			$window.alert("Data retrieval unsuccessfull, reason: " + reason.statusText);
		}

		WinesDataService.getAll().then(onSuccessCallback, onErrorCallback);
	}
	var app = angular.module("resolveExample");
	app.controller("WinesController", WinesController);
})();