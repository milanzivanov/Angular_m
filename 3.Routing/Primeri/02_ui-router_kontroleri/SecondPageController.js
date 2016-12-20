(function(){
	var SecondPageController = function($scope, $state){
		
		$scope.goToFirstPage = function(){
			$state.go("firstState");
		}

	}

	var app = angular.module("uiRouterExample");
	app.controller("SecondPageController", SecondPageController);
})();