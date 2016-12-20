(function(){
	
	// injektujemo RestaurantsResourceService u kontroler da bi smo ga koristili
	var RestaurantsTableController = function($scope, RestaurantsResourceService){

		// inicijalizacija
	 	$scope.activePage = 1; // aktivna je 1. stranica tabele
	 	$scope.maxRestaurantsInTable = 5; // prikazivaće se po 5 restorana u tabeli
	 	$scope.sortCriteria = ""; // nema sortiranja
		$scope.sortDirection = "asc"; // rastući sort
		$scope.searchQuery=""; // za sada nema filtriranja po searchQuery
		$scope.selectedItem = "name"; // Iniciajlno je postavljeno da u select-u bude odabrano vino (select je putem ng-model povezan sa $scope.selectedItem )


		var onSuccess = function(data){
			$scope.restaurants = data.results;
			adjustPagination(data.count);
		}

		var onError = function(reason){
			console.log("Error fetching restaurants, reason: " + reason.statusText);
		}

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
			// koristimo $promise property (promise objekat) kako bi se adjustPagination() izvršilo tek kada podaci stignu sa servera 		
			RestaurantsResourceService.get(getParams).$promise.then(onSuccess, onError);
		}
		getRestaurants();

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

	 	var onSuccessDelete = function(data){
	 		// objekat je uspešno uklonjen na serveru - treba ga ukloniti i iz modela u $scope-u
	 		// prema specifikaciji REST API-ja server nam nakon brisanja vrati objekat koji je obrisan tako da možemo odatle da vidimo njegov _id
	 		var id = data._id;
	 		for(var i=0; i<$scope.restaurants.length; i++){
	 			if($scope.restaurants[i]._id == id){
	 				$scope.restaurants.splice(i, 1);	
	 				adjustPagination();
	 				return;
	 			}
	 		}
	 	}

	 	var onErrorDelete = function(reason){
	 		console.log("Error deleting, reason: " + reason.statusText);
	 	}

	 	$scope.remove = function(id){	 		
	 		RestaurantsResourceService.delete({id: id}, onSuccessDelete);	
	 	}

	 	$scope.update = function(id){
	 		$scope.showPanels.newRestaurant = RestaurantsResourceService.get({id: id}); // preuzimamo restoran sa servera i savljamo ga u newRestaurant objekat koji je povezan
	 		// sa inputima na AddRestaurants formi putem ng-model: dobavljeni podaci biće prikazani na inputima nakon redirekcije

	 		// redirekcija:
	 		$scope.showPanels.showRestaurantTable = false;	
			$scope.showPanels.showAddRestaurant = true;
	 	}
	 	

	};
	
	var app = angular.module("restaurantsModule"); 
	app.controller("RestaurantsTableController", RestaurantsTableController);
})();