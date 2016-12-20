(function(){
	var WinesController = function($scope){
		$scope.message = "Aplikacija za pregled vina";
	}
	var app = angular.module("winesModule");
	app.controller("WinesController", WinesController);
})();