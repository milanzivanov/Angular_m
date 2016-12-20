(function() {
	
	var MainController = function($scope) {	
		$scope.showPanels = {
			showRestaurantTable: true,
			showAddRestaurant: false,
			newRestaurant: {} // ovaj objekat je putem ng-model vezan za inpute na AddRestaurant.html. Ukoliko se prilikom update-a (funkcija update u RastaurantsTableController)
			// postave vrednosti ovog objekta, te vrednosti će biti prikazane u inputima u formi. Ukoliko je prazan i inputi će biti prazni (zbog čega nakon završenog 
		 	// dodavanja/ažuriranja postavljamo newRestaurant={} kako se ne bi dogodilo da imamo neke stare podatke kada korisnik ponovo ode na AddRestaurant
		}
	};

	var app = angular.module("restaurantsModule"); 
	app.controller("MainController", MainController);

})();