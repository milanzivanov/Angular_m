(function(){
	var myController = function($scope){
		
		$scope.array = [1, 2, 3, 4, 21, 777, 1901, 0, "Seven"];

	}
	var app = angular.module("filterTestModule");
	app.controller("myController", myController);
}())