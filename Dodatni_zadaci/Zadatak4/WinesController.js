(function(){
	var WinesController = function($scope, $window){
		$scope.message = "Aplikacija za pregled vina";
		$scope.doClick = function(){
			$window.alert($scope.userInput);
		}
	}
	var app = angular.module("winesModule");
	app.controller("WinesController", WinesController);
})();