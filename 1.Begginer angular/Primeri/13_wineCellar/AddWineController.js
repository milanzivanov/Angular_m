(function() {

	var AddWineController = function($scope) {

		$scope.addWine = function(){
			$scope.newWine.id = $scope.newWine.name.split(" ").join("_");
			$scope.$parent.$parent.wines.push($scope.newWine);
			$scope.newWine = {}; // uklanjamo podatke iz newWine objekta da se ne bi prikazivali kada po drugi put dodjemo na AddWine stranicu

			// showPanels je složeni objekat - vrši se prvi čitanje pa tek onda pisanje.
			// Zbog toga se u parent kontroleru (MainController) prvo pronađe ovaj objekat i manipuliše se njegovom vrednošću.
			// Da to nije slučaj (da je showPanels običan property) ne bi se manipulisalo sa showPanels u MainController-u već
			// bi se u ovom scope-u (child od MainControlle-a) napravio novi property showPanels i showPanels u MainControlleru bi ostao neizmenjen
			$scope.showPanels.showWineTable = true;
			$scope.showPanels.showAddWine = false;
		}

	};

	var app = angular.module("wineModule");
	app.controller("AddWineController", AddWineController);

})();