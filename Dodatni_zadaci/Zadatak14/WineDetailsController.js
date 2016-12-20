(function(){
	var WineDetailsController = function($scope, $window, WinesDataService, $state){

		var onSuccess = function(){
			$state.go("main.wines");
		}

		var onError = function(){
			$window.alert("Adding wine unsuccessful");
		}

		$scope.submit = function(){
			WinesDataService.addWine($scope.wine).then(onSuccess, onError);
		}

	};
	var app = angular.module("winesModule");
	app.controller("WineDetailsController", WineDetailsController);
})();