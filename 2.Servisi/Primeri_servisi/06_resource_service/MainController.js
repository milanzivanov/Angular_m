(function() {
	
	var MainController = function($scope) {	
		$scope.showPanels = {
			showWineTable: true,	
			showAddWine: false,
			newWine : {} // ukoliko se ide na update wine (videti funkciju updateWine u WinesController-u) ovde će biti postavljen resource objekat koji predstavlja vino dobavljeno sa servera
		}		
	};

	var app = angular.module("wineModule"); 
	app.controller("MainController", MainController);

})();