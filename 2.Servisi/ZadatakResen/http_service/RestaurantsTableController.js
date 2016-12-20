(function(){
	var RestaurantsTableController = function($scope, restaurantsHttpService){ // injektujemo restaurantsHttpService da bi smo mogli da poyivamo njegove funkcije
	 	$scope.activePage = 1; // aktivna je 1. stranica tabele
	 	$scope.maxRestaurantsInTable = 5; // prikazivaće se po 5 restorana u tabeli
	 	$scope.sortCriteria = ""; // nema sortiranja
		$scope.sortDirection = "+"; // rastući sort
		$scope.searchQuery=""; // za sada nema filtriranja po searchQuery
		$scope.selectedItem = "name"; // Iniciajlno je postavljeno da u select-u bude odabrano "Name" (select je putem ng-model povezan sa $scope.selectedItem )

		
		// ako su restorani uspešno dobavljeni - poziva se onSuccess funkcija u restaurantsHttpService koja vraća podatke (izdvojene iz response objekta). 
		// Nakon toga će biti pozvana ova funkcija i biće joj prosleđeni ti podaci
		var onSuccess = function(data){
			$scope.restaurants = data.results;
			adjustPagination(data.count);	
		}

		// ova funkcija se poziva kada sa servera stigne notifikacija o grešci (definisana je kao errorCallback u then metodi)
		var onError = function(reason){
			console.log("Error: " + reason.statusText);
		}

		// dobavljanje kolekcije restorana sa servera
		var getRestaurants = function(){	
			// parametri koji se šalju serveru - filter, sortiranje, paginacija (videti slajdove 13-15 sa AJAX predavanja)
			var filterParams = {};
			filterParams[$scope.selectedItem] = $scope.searchQuery; //$scope.selectedItem - biće name, rating, price ili cuisine
			var getParams = {
				filter : filterParams,
				sort : $scope.sortCriteria,
				sortDirection : $scope.sortDirection,
				page : $scope.activePage,
				pageSize : $scope.maxRestaurantsInTable 
			};		
			restaurantsHttpService.getAll(getParams).then(onSuccess, onError); //getAll vraća promise -> pomoću then registrujemo success i error callback
		}
		getRestaurants(); // inicijalni poziv prilikom otvaranja stranice

		// ova funkcija se poziva svaki put kada uspešno stignu podaci sa servera (videti poziv u onSuccess)
		function adjustPagination(noRestaurants){ // noRestaurants - broj restorana koji odgovara trenutno postavljenom zahtevu (u odnosu na to da li je možda primenjen name filter)
			// izracunavamo koliko ima stranica paginacije (zbog podesavanja pagination komponente)
			// paginationPagesArr - niz stringova koji ce biti u <li> tagovima pagination komponente, npr. "<","1", "2", "3",">"
			$scope.noPaginationPages = Math.ceil( noRestaurants / $scope.maxRestaurantsInTable);
			$scope.paginationPagesArr = ["<<", "<", "1"]; // uvek ima barem 1 stranica (ta sto se prikazuje)
			for(var i=2; i<=$scope.noPaginationPages; i++){
				$scope.paginationPagesArr.push ("" + i);
			}
			$scope.paginationPagesArr.push (">");	 
			$scope.paginationPagesArr.push (">>");		
		}
	    
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
	 		getRestaurants(); // osvežavanje prikaza prema novoj postavci parametara
	 	}	

	 	
	 	$scope.search = function(){
	 		$scope.activePage = 1;
	 		getRestaurants(); // osvežavanje prikaza prema novoj postavci parametara
		}

		
		// poziva se kada se klikne na li tag u pagination komponenti (definisano pomoću ng-click). Prosleđuje se ono što piše na "kockici" na koju je kliknuto
		$scope.changePage = function(newActivePage){
	 		if(newActivePage == ">"){
	 			if($scope.activePage < $scope.noPaginationPages){
	 				$scope.activePage = $scope.activePage + 1;
	 			};
	 		}else if (newActivePage == "<") {
	 			if($scope.activePage > 1){
	 				$scope.activePage = $scope.activePage - 1;
	 			};
	 		}else if(newActivePage == "<<"){
	 			$scope.activePage = 1;
	 		}else if(newActivePage == ">>"){
	 			$scope.activePage = $scope.noPaginationPages;
	 		}else{
	 			$scope.activePage = parseInt(newActivePage);
	 		}
	 		getRestaurants(); // osvežavanje prikaza prema novoj postavci parametara
	 	}	

	 	// Poziva se u slučaju da je restoran uspešno obrisan. Server će vratiti u odgovoru objekat koji je obrisan pa iz njega možemo izvući id
	 	var onSuccessDelete = function(data){
	 		console.log("Deleting: " + data);
	 		var id = data.id;
	 		// Restoran je obrisan na serveru. Prolazimo kroz restorane sačuvane u $scope i uklanjamo dati restoran kako bi smo ažurirali model prema serveru
	 		for(var i=0; i<$scope.restaurants.length; i++){
	 			if($scope.restaurants[i].id == id){
	 				$scope.restaurants.splice(i, 1);	
	 				adjustPagination();
	 				return;
	 			}
	 		}
	 	}

	 	var onErrorDelete = function(reason){
	 		console.log("Error deleting data, reason: " + reason.statusText);
	 	}

	 	// funkcija za uklanjanje restorana
	 	$scope.remove = function(id){	 
	 		restaurantsHttpService.deleteRestaurant(id).then(onSuccessDelete, onErrorDelete);	 		
	 	}

	 	// restoran je uspešno preuzet sa servera
	 	var onSuccessGet = function(data){
	 		$scope.showPanels.newRestaurant = data; // podesimo vrednost showPanels.newRestaurant  u MainController-u -> ovaj objekat je povezan putem ng-model sa
	 		// inputima u AddRestaurant.html pa će detalji o objektu biti prikazani u inputima

	 		// redirekcija na AddRestaurant formu
	 		$scope.showPanels.showRestaurantTable = false;	
			$scope.showPanels.showAddRestaurant = true;
	 	}

	 	var onErrorGet = function(reason){
	 		console.log("Error fetching data, reason: " + reason.statusText);
	 	}

	 	$scope.update = function(id){	 
	 		// u ovoj primeni ne bi smo morali raditi get sa servera, mogli bi smo preuzeti dati restoran sa scope-a. Međutim, moguće je da model na serveru (detail view) sadrži više podataka 
	 		// nego što smo ovde čuvali u modelu/tabeli (npr. da radi prikaza u tabeli nismo povukli menuItems za restoran jer su se nalazili u 2. kolekciji)
	 		// zbog toga bi imalo smisla raditi get zahtev kako bi se povukli svi detalji o restoranu
	 		restaurantsHttpService.get(id).then(onSuccessGet, onErrorGet);	 		
	 	}

	};
	
	var app = angular.module("restaurantsModule"); 
	app.controller("RestaurantsTableController", RestaurantsTableController);
})();