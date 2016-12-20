(function() {
	
	var AddRestaurantController = function($scope) {	
		
		// dodaje novo vino u objekat restaurants
		$scope.add = function(){
			$scope.newRestaurant.id = $scope.newRestaurant.name.split(" ").join("_");

			// može ovako: (ng-include je dodeao još jedan child scope pa imamo $parent.$parent)			
			// $scope.$parent.$parent.restaurants.push($scope.newRestaurant);	

			// a može i ovako, ali samo zato što je restaurants složeni objekat pa će se prvo potražiti na $scope-u umesto da se samo kreira novi property u okviru ovog scope-a
			$scope.restaurants.push($scope.newRestaurant);	

			// takođe funkcioniše iz razloga što je showPanels složeni objekat
			$scope.showPanels.showRestaurantTable = true;	
			$scope.showPanels.showAddRestaurant = false;
		}

	};

	var app = angular.module("restaurantsModule"); 
	app.controller("AddRestaurantController", AddRestaurantController);

})();