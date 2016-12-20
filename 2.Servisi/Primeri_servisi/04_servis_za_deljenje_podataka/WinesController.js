(function() {
	
	// dataService servis je injektovan u WinesController
	var WinesController = function($scope, dataService) {
		$scope.searchQuery=""; 
		$scope.sortCriteria = "";
	 	$scope.sortDirection = "+";
		$scope.maxWinesInTable = 5;
		$scope.activePage = 1; 
		
		$scope.wines = dataService.getWines(); // pristup getWines metodi servisa koja vraća niz vina

		adjustPagination();
		function adjustPagination(){
			$scope.noPaginationPages = Math.ceil( $scope.wines.length / $scope.maxWinesInTable);
			$scope.paginationPagesArr = ["<", "1"]; 
	 		for(var i=2; i<=$scope.noPaginationPages; i++){
	 			$scope.paginationPagesArr.push ("" + i);
	 		}
	 		$scope.paginationPagesArr.push (">");	 		
		}

	 	$scope.searchWine = function(tableRowData){
	 		var wineName = tableRowData.name.toLowerCase();
	 		var query = $scope.searchQuery.toLowerCase();
	 		return wineName.indexOf(query) != -1; 
	 	}

	 	$scope.setSortCriteria = function(newCriteria){	 		
	 		if(newCriteria == $scope.sortCriteria){ 
	 			if($scope.sortDirection == "+"){
	 				$scope.sortDirection = "-";
	 			}else{
	 				$scope.sortDirection = "+";
	 			}
	 		}else{
	 			$scope.sortCriteria = newCriteria;	
	 			$scope.sortDirection = "+";
	 		}	
	 	}	 

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
	 	}	
	};

	var app = angular.module("wineModule"); 
	app.controller("WinesController", WinesController);

})();