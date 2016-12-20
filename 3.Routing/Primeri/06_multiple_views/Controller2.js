(function(){
	var Controller2 = function($scope){
		$scope.message = "This is the 2nd view";
	}
	var app = angular.module("multipleViewsModule");
	app.controller("Controller2", Controller2);
}())