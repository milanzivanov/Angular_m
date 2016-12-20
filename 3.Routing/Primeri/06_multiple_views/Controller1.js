(function(){
	var Controller1 = function($scope){
		$scope.message = "This is the 1st view";
	}
	var app = angular.module("multipleViewsModule");
	app.controller("Controller1", Controller1);
}())