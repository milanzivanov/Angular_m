(function() {
	angular
		.module("wineModule")
		.controller('AddWineController', AddWineController);

	function AddWineController ($scope,$state,WineDataService,wine) {
		$scope.wine = wine.data;	
		

		function onSuccessAdd () {
			$state.go("home.wines"); 
		}
		function onFailAdd (reason) {
				 $window.alert("Neuspesan odgovor servera " + reason.statusText); 
		}
		$scope.submit = function() {
			if($scope.wine._id){
				WineDataService.update($scope.wine).then(onSuccessAdd,	onFailAdd);
			}else {
				WineDataService.addWine($scope.wine).then(onSuccessAdd,	onFailAdd);
			}
		}

	}	
})();