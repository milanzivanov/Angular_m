(function() {

	// injektovan je newWine objekat (ili popunjen, dobavljen sa servera ako je update ili prazan objekat ako je add, videti resolve)
	var AddWineController = function($scope, $state, newWine, $stateParams, winesService) {
		// Nakon redirekcije parametrima iz URL-a možemo pristupiti putem $stateParams servisa "/wine/:wineId"
		console.log("AddWineController, wineId: " + $stateParams.wineId);
		$scope.newWine = newWine;

		var onSuccessSave = function(){
			$state.go("main");
			// Drugi način je redirekcija putem $location servisa: ($location je potrebno i injektovati u kontroler)
			// Ovaj servis omogućava da ekstrahujemo i manipulišemo fragmentima adrese u browser-u
			// $location.path("/main");
		}

		var onError = function(reason){
			console.log("Error accessing data, reason: " + reason.statusText);
		}

		$scope.addWine = function(){
			var wineId = $scope.newWine._id;
			if(wineId){ // updating a wine
				winesService.put($scope.newWine).then(onSuccessSave, onError);
			}else{ // adding a new wine
				// winesService.post vraća promise objekat. Nad promise objektom je moguće pomoću then registrovati success i error callback
				// napomerna: server će sam da postavi _id property kako bi jedinstveno identifiovao novo vino
				winesService.post($scope.newWine).then(onSuccessSave, onError);
			}
		}



	};

	var app = angular.module("wineModule");
	app.controller("AddWineController", AddWineController);

}());