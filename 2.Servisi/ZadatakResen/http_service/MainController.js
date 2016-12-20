(function() {
	
	var MainController = function($scope) {	
		$scope.showPanels = {
			showRestaurantTable: true,
			showAddRestaurant: false,
			newRestaurant: {}
		}
	};

	var app = angular.module("restaurantsModule"); 
	app.controller("MainController", MainController);

})();