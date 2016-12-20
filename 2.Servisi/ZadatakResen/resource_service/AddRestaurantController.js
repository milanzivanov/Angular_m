(function() {
	
	// injektujemo RestaurantsResourceService u kontroler da bi smo ga koristili
	var AddRestaurantController = function($scope, RestaurantsResourceService) {	

		var onSuccess = function(){
			$scope.showPanels.newRestaurant = {}; // da se ne bi prikazali stari podaci ako korisnik klikne ponovo na AddWine
			// redirekcija
			$scope.showPanels.showRestaurantTable = true;	
			$scope.showPanels.showAddRestaurant = false;
		}
		
		// dodaje novo vino u objekat restaurants
		$scope.add = function(){
			if($scope.showPanels.newRestaurant._id){ // ukoliko je dodeljen property _id radi se o update-u
				// u $scope.showPanels.newRestaurant je resource objekat - možemo iskoristiti njegovu metodu $update
				$scope.showPanels.newRestaurant.$update({id: $scope.showPanels.newRestaurant._id}, onSuccess); // šaljemo parametar id u putanju URL-a. Takođe registrujemo onSuccess funkciju zbog redirekcije
			} else{ // inače se radi o dodavanju novog restorana				
				RestaurantsResourceService.save({}, $scope.showPanels.newRestaurant, onSuccess); // snimanje novog restorana i registrovanje successCallbacka zbog naknadne redirekcije
			}			
		}

	};

	var app = angular.module("restaurantsModule"); 
	app.controller("AddRestaurantController", AddRestaurantController);

})();