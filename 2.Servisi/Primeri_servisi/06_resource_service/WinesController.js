(function() {
	
	// dataService servis je injektovan u WinesController
	var WinesController = function($scope, winesService) {
		// inicijalna podesavanja nezavisna od podataka
		$scope.searchQuery=""; // iskljucena pretraga po imenu (vraca sva vina, bez obzira na ime)
		$scope.sortCriteria = ""; // iskljuceno sortiranje
	 	$scope.sortDirection = "asc"; // smer sortiranja je inicijalno ascending 		
		$scope.maxWinesInTable = 5; // maksimalan broj redova u tabeli (jedna stranica tabele)
		$scope.activePage = 1; // trenutno aktivna stranica, koristi se u tabeli za određivanje koja se vina prikazuju	 

		var getWines = function(){
			// parametri koji se šalju serveru - filter, sortiranje, paginacija (videti slajdove 13-15 sa AJAX predavanja)
			var filterParams = {
				name : $scope.searchQuery
			};
			var getParams = {
				filter : filterParams,
				sort : $scope.sortCriteria,
				sortDirection : $scope.sortDirection,
				page : $scope.activePage,
				pageSize : $scope.maxWinesInTable 
			};

			// koristimo $promise property (promise objekat) kako bi se adjustPagination() izvršilo tek kada podaci stignu sa servera 			
			winesService.get(getParams).$promise.then(function(data){
				// u data.results se nalaze vina koja se u ovom trenutku trebaju prikazati u tabeli (zavisi od parametara koje smo slali serveru u GET zahtevu - na kojoj smo stranici paginacije, da li smo primenili nameFilter,...)
				$scope.wines = data.results;	
				// u data.count se nalazi koliko ukupno vina odgovara trenutnom upitu - zavisi od toga da li je primenjen name filter i kakav je
				adjustPagination(data.count);	
			});	
		}	
		getWines();

		// ova funkcija se poziva svaki put kada uspešno stignu podaci sa servera (videti poziv u onSuccess)
		function adjustPagination(noWines){ // noWines - broj vina koji odgovara trenutno postavljenom zahtevu (u odnosu na to da li je možda primenjen name filter)
			// izracunavamo koliko ima stranica paginacije (zbog podesavanja pagination komponente)
			// paginationPagesArr - niz stringova koji ce biti u <li> tagovima pagination komponente, npr. "<","1", "2", "3",">"
			$scope.noPaginationPages = Math.ceil( noWines / $scope.maxWinesInTable);
			$scope.paginationPagesArr = ["<", "1"]; // uvek ima barem 1 stranica (ta sto se prikazuje)
			for(var i=2; i<=$scope.noPaginationPages; i++){
				$scope.paginationPagesArr.push ("" + i);
			}
			$scope.paginationPagesArr.push (">");	 		
		}

		$scope.searchByName = function(){
			$scope.activePage = 1;
			getWines(); // pomoću ng-model direktive je podešena vrednost $scope.searchQuery. Serveru se šalje zahtev sa parametrima koji uključuju vrednost $scope.searchQuery		
		}
		
	 	// podesavanje kriterijuma sortiranja
	 	// funkcija se poziva prilikom klika na glyphicons za sortiranje pri cemu se prosledjuje kriterijum pretrage ("name"/"year"/"grapes"/...)
	 	$scope.setSortCriteria = function(newCriteria){	 		
	 		if(newCriteria == $scope.sortCriteria){ // korisnik je drugi put kliknuo na isti krterijum pretrage - samo promeni sort direction
	 			if($scope.sortDirection == "asc"){
	 				$scope.sortDirection = "desc";
	 			}else{
	 				$scope.sortDirection = "asc";
	 			}
	 		}else{ // korisnik menja kriterijum pretrage, sort direction se postavlja na ascending
	 			$scope.sortCriteria = newCriteria;	
	 			$scope.sortDirection = "asc";
	 		}	
	 		getWines(); // osvežiti prikaz - dobaviti podatke koji odgovaraju trenutnoj postavci parametara sa servera
	 	}	 

	 	// poziva se prilikom klika na stranicu paginacije. Azurira trenutno aktivnu stranicu $scope.activePage koja se koristi u tabeli za određivanje koja se vina prikazuju
	 	$scope.changePage = function(newActivePage){
	 		if(newActivePage == ">"){
	 			if($scope.activePage < $scope.noPaginationPages){
	 				$scope.activePage = $scope.activePage + 1;
	 			};
	 		}else if (newActivePage == "<") {
	 			if($scope.activePage > 1){
	 				$scope.activePage = $scope.activePage - 1;
	 			};
	 		}else{
	 			$scope.activePage = parseInt(newActivePage);
	 		}
	 		getWines(); // osvežiti prikaz - dobaviti podatke koji odgovaraju trenutnoj postavci parametara sa servera
	 	}	

	 	$scope.updateWine = function(wineId){
	 		$scope.showPanels.newWine = winesService.get({id: wineId});  //Vraća vino sa servera sa specificiranim id (to što šaljemo u get je id parametar za podešavanje URL-a). Povratna vrednost je resource objekat
	 		$scope.showPanels.showWineTable = false;	
			$scope.showPanels.showAddWine = true;
	 	}

	 	
	};

	// Registrovanje kontrolera u modulu
	var app = angular.module("wineModule"); 
	app.controller("WinesController", WinesController);

}());