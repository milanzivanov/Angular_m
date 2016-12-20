(function() {
	
	// injektujemo newRestaurant objekat koji smo dobavili u resolve-u. Ako je objekat prazan znamo da se radi
	// dodavanje, a u suprotnom znamo da je u pitanju ažuriranje
	var AddRestaurantController = function($scope, newRestaurant, $state) {	
		$scope.newRestaurant = newRestaurant; // stavljamo newRestaurant na scope da bi smo ga povezali 
		// sa inputima preko ng-model

		var onSuccess = function(){
			// redirekcija
			$state.go("main");
		}
		
		// dodaje novo vino u objekat restaurants
		$scope.add = function(){
			if(newRestaurant._id){ // ukoliko je dodeljen property _id radi se o update-u
				// newRestaurant je resource objekat - možemo iskoristiti njegovu metodu $update
				newRestaurant.$update({id: newRestaurant._id}, onSuccess); // šaljemo parametar id u putanju URL-a. Takođe registrujemo onSuccess funkciju zbog redirekcije
			} else{ // inače se radi o dodavanju novog restorana
				// pazite da se property zove _id !
				newRestaurant._id = newRestaurant.name.split(" ").join("_");
				// newRestaurant je resource objekat - možemo iskoristiti njegovu metodu $save
				// pri čemu za razliku od save metode definisane na resource SERVISU ne moramo slati podatke
				// o restoranu kao argument funkcije, tj. u pozivu za resource servis se šalje newRestaurantData objekat:
				//		RestaurantsResourceService.save({}, newRestaurantData, onSuccess);
				// dok se kada se radi o resource objektu podaci o restoranu izvlače iz samog objekta:
				newRestaurant.$save({}, onSuccess); // snimanje novog restorana i registrovanje successCallbacka zbog naknadne redirekcije
			}			
		}

	};

	var app = angular.module("restaurantsModule"); 
	app.controller("AddRestaurantController", AddRestaurantController);

})();