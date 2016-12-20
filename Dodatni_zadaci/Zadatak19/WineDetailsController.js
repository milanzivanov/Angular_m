(function(){
	var WineDetailsController = function($scope, $window, WinesDataService, $state, wine){
		$scope.wine = wine.data;

		var onSuccess = function(){
			$state.go("main.wines");
		}

		var onError = function(){
			$window.alert("Adding wine unsuccessful");
		}

		$scope.submit = function(){
			if($scope.wine._id){
				WinesDataService.update($scope.wine).then(onSuccess, onError);
			}else{
				WinesDataService.addWine($scope.wine).then(onSuccess, onError);
			}
		}

	};
	var app = angular.module("winesModule");
	app.controller("WineDetailsController", WineDetailsController);
})();