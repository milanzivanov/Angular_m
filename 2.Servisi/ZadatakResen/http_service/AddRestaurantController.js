(function() {
	
	// injektujemo restaurantsHttpService
	var AddRestaurantController = function($scope, restaurantsHttpService) {	
		
		// podaci su uspešno dobavljeni sa servera: u restaurantsHttpService se poziva onSuccess koja vadi podatke iz response objekta i vraća ih kao povratnu vrednost. Nakon
		// toga se poziva ova funkcija i dobija te podatke
		var onSuccess = function(data){
			$scope.showPanels.newRestaurant = {}; // da se ne bi prikazali podaci već dodatog/izmenjenog restorana ako korisnik opet ode na Add
			// ako je restoran uspešno dodat - prebaci se na prikaz tabele
			$scope.showPanels.showRestaurantTable = true;	
			$scope.showPanels.showAddRestaurant = false;
		}

		var onError = function(){
			console.log("Error accessing data, reason: " + reason.statusText);
		}

		$scope.add = function(){
			if($scope.showPanels.newRestaurant._id){ // ukoliko je definisan _id radi se o update-u
				restaurantsHttpService.update($scope.showPanels.newRestaurant).then(onSuccess, onError);
			}else{ // radi se o dodavanju				
				restaurantsHttpService.add($scope.showPanels.newRestaurant).then(onSuccess, onError);
			}
		}

	};

	var app = angular.module("restaurantsModule"); 
	app.controller("AddRestaurantController", AddRestaurantController);

})();