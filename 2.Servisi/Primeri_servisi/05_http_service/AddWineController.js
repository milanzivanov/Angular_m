(function() {
	
	// winesService servis je injektovan u AddWineController
	var AddWineController = function($scope, winesService) {		

		// Funkcija koja se poziva ukoliko je  promise objekat uspešno razrešen – uraditi sve što je potrebno kada smo dobili podatke
		var onSuccessPost = function(data){
			console.log(data);
			$scope.newWine = {}; // kako se prilikom ponovnog odlaska korisnika na AddWine ne bi prikazali prethodni podaci od unosa
			
			// redirekcija na tabelu sa vinima
			$scope.showPanels.showWineTable = true;	
			$scope.showPanels.showAddWine = false;
		}
		
		// Funkcija koja se poziva ukoliko je  promise objekat razrešen sa greškom
		var onError = function(reason){
			console.log("Error accessing data, reason: " + reason.statusText);
		}
		
		$scope.addWine = function(){		
			// winesService.post vraća promise objekat. Nad promise objektom je moguće pomoću then registrovati success i error callback
			// napomerna: server će sam da postavi _id property kako bi jedinstveno identifiovao novo vino
			winesService.post($scope.newWine).then(onSuccessPost, onError);	
		}
	
	};

	var app = angular.module("wineModule"); 
	app.controller("AddWineController", AddWineController);

})();