(function() {
	
	// dataService servis je injektovan u AddWineController
	var AddWineController = function($scope, dataService) {
		
		$scope.addWine = function(){
			$scope.newWine.id = $scope.newWine.name.split(" ").join("_"); // id pravimo od newWine.name zamenom space-ova sa karakterom '_'
			// $scope.$parent.$parent.wines.push($scope.newWine);			
			dataService.addWine($scope.newWine); // pristup addWine funkciji dataService servisa

			$scope.newWine = {}; // uklanjaju se vrednosti newWine objekta da ne bi bile upisane u inpute kada ponovo kliknemo na Add wine link
			
			$scope.showPanels.showWineTable = true;	
			$scope.showPanels.showAddWine = false;
		}
	
	};

	var app = angular.module("wineModule"); 
	app.controller("AddWineController", AddWineController);

})();