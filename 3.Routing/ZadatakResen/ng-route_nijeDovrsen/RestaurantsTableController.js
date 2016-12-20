(function(){
	
	// injektujemo RestaurantsResourceService u kontroler da bi smo ga koristili
	var RestaurantsTableController = function($scope, RestaurantsResourceService){

		// inicijalizacija
	 	$scope.activePage = 1; // aktivna je 1. stranica tabele
	 	$scope.maxRestaurantsInTable = 5; // prikazivaće se po 5 restorana u tabeli
	 	$scope.sortCriteria = ""; // nema sortiranja
		$scope.sortDirection = "+"; // rastući sort
		$scope.searchQuery=""; // za sada nema filtriranja po searchQuery
		$scope.selectedItem = "Name"; // Iniciajlno je postavljeno da u select-u bude odabrano vino (select je putem ng-model povezan sa $scope.selectedItem )


		var onSuccess = function(data){
			$scope.restaurants = data;
			adjustPagination();
		}

		var onError = function(reason){
			console.log("Error fetching restaurants, reason: " + reason.statusText);
		}

		// RestaurantsResourceService.query odmah vraća prazan niz restorana (u budućnosti će biti popunjen resource objektima dovučenim sa servera)
		// koristimo $promise property (promise objekat) kako bi se adjustPagination() izvršilo tek kada podaci stignu sa servera 
		// Mogli smo staviti i $scope.restaurants = RestaurantsResourceService.query;  $scope.restaurants bi se u budućnosti popunio podacima sa servera 
		// (ali nam je ovde trebao callback zbog podešavanja paginacije) 
		RestaurantsResourceService.query().$promise.then(onSuccess, onError);


		// podešavanje pagination komponente na osnovu broja restorana i broja restorana koji se prikazuju na jednoj stranici tabele
	    function adjustPagination(){
	    	$scope.noPaginationPages = Math.ceil( $scope.restaurants.length / $scope.maxRestaurantsInTable);
			$scope.paginationPagesArr = ["<<", "<", "1"]; // uvek ima barem 1 stranica (ta sto se prikazuje)
	 		for(var i=2; i<=$scope.noPaginationPages; i++){
	 			$scope.paginationPagesArr.push ("" + i);
	 		}
	 		$scope.paginationPagesArr.push (">");
	 		$scope.paginationPagesArr.push (">>");	 	

	 		if($scope.activePage > $scope.noPaginationPages){
	 			$scope.activePage = $scope.noPaginationPages;
	 		}
	    }

	    
		$scope.setSortCriteria = function(newCriteria){	 		
	 		if(newCriteria == $scope.sortCriteria){ // korisnik je drugi put kliknuo na isti krterijum pretrage - samo promeni sort direction
	 			if($scope.sortDirection == "+"){
	 				$scope.sortDirection = "-";
	 			}else{
	 				$scope.sortDirection = "+";
	 			}
	 		}else{ // korisnik menja kriterijum pretrage, sort direction se postavlja na ascending
	 			$scope.sortCriteria = newCriteria;	
	 			$scope.sortDirection = "+";
	 		}	
	 	}	

	 	
	 	$scope.search = function(tableRowData){
	 		var criteria = "";
	 		// kriterijum se postavlja prema tome što je korisnik selektovao u select komponenti (putem ng-model povezanoj sa $scope.selectedItem) 
	 		if($scope.selectedItem == 'Name'){
	 			criteria = tableRowData.name.toLowerCase();
	 		}else if($scope.selectedItem == 'Rating'){
	 			criteria = "" + tableRowData.rating;
	 		}else if($scope.selectedItem == 'Price'){
	 			criteria = "" + tableRowData.price;
	 		}else if($scope.selectedItem == 'Cuisine'){
	 			criteria = tableRowData.cuisine.toLowerCase();
	 		}
	 					
			var query = $scope.searchQuery.toLowerCase();
			return criteria.indexOf(query) != -1;
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