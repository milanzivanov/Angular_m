(function() {
	
	var MainController = function($scope) {	
		$scope.showPanels = {
			showWineTable: true,	
			showAddWine: false
		}		
	};

	var app = angular.module("wineModule"); 
	app.controller("MainController", MainController);

})();