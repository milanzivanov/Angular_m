(function(){
	var myController = function($scope){
		
		$scope.array = ["angular", "custom", "filter", "example"];

	}
	var app = angular.module("filterTestModule");
	app.controller("myController", myController);
}())