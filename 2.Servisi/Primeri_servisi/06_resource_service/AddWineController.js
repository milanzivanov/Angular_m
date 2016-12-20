(function() {
	
	// dataService servis je injektovan u AddWineController
	var AddWineController = function($scope, winesService) {

		var onSuccessSave = function(){			
			$scope.showPanels.newWine = {};			
			$scope.showPanels.showWineTable = true;	
			$scope.showPanels.showAddWine = false;
		}

		var onError = function(reason){
			console.log("Error accessing data, reason: " + reason.statusText);
		}
		
		$scope.addWine = function(){
			if($scope.showPanels.newWine._id){ // updating a wine
				// newWine je resource objekat: možemo koristiti njegovu funkciju $update koju smo registrovali u WinesService-u nad vraćenim resource objektom
				// ne moramo u $update slati vino koje se updatuje (kao što radimo kod winesService.save) jer akcije nad resource objektom izvlače podatke iz samog resource objekta 
				$scope.showPanels.newWine.$update({id: $scope.showPanels.newWine._id}, onSuccessSave);
				console.log("Updating wine");
			}else{ // adding a new wine				
				winesService.save({}, $scope.showPanels.newWine, onSuccessSave);							
				console.log("Adding wine");
			}
		}


	
	};

	var app = angular.module("wineModule"); 
	app.controller("AddWineController", AddWineController);

}());