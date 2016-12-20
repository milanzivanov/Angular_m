(function(){
	var RestaurantsTableController = function($scope){
		// inicijalizacija
	 	$scope.activePage = 1; // aktivna je 1. stranica tabele
	 	$scope.maxRestaurantsInTable = 5; // prikazivaće se po 5 restorana u tabeli
	 	$scope.sortCriteria = ""; // nema sortiranja
		$scope.sortDirection = "+"; // rastući sort
		$scope.searchQuery=""; // za sada nema filtriranja po searchQuery
		$scope.selectedItem = "Name"; // Iniciajlno je postavljeno da u select-u bude odabrano vino (select je putem ng-model povezan sa $scope.selectedItem )

		// podešavanje pagination komponente na osnovu broja restorana i broja restorana koji se prikazuju na jednoj stranici tabele
	 	adjustPagination();
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

	 	$scope.remove = function(id){	 		
	 		for(var i=0; i<$scope.restaurants.length; i++){
	 			if($scope.restaurants[i].id == id){
	 				$scope.restaurants.splice(i, 1);	
	 				adjustPagination();
	 				return;
	 			}
	 		}
	 	}

	 	

	};
	
	var app = angular.module("restaurantsModule"); 
	app.controller("RestaurantsTableController", RestaurantsTableController);
})();