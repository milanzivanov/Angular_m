(function(){
	var WinesController = function($scope, $window, WinesDataService){
		$scope.message = "Aplikacija za pregled vina";
		$scope.sortCriteria = "";
		$scope.sortDirection = "asc";
		$scope.selectedItem = "name";
		$scope.maxWines = 5;
		$scope.page = 1;

		$scope.doClick = function(){
			$window.alert($scope.userInput);
		}

		var onSuccessCallback = function(response){
			$scope.wines = response.data.results;
			adjustPagination(response.data.count);
		}
		var onErrorCallback = function(reason){
			$window.alert("Data retrieval unsuccessfull, reason: " + reason.statusText);
		}

		var getWines = function(){
			var filterParams = {};
			filterParams[$scope.selectedItem] = $scope.searchQuery;

			var getParams = {
				filter : filterParams,
				sort: $scope.sortCriteria,
				sortDirection: $scope.sortDirection,
				page: $scope.page,
				pageSize: $scope.maxWines
			};

			WinesDataService.getAll(getParams).then(onSuccessCallback, onErrorCallback);
		}
		getWines();

		var adjustPagination = function(wineCount){
			$scope.noPages = Math.ceil(wineCount/$scope.maxWines);
			if($scope.noPages == 0)
				$scope.noPages = 1; // barem 1 stranica čak i ako ima 0 rezultata
			$scope.paginationArray = ["<"];
			for(var i=1; i<=$scope.noPages; i++){
				$scope.paginationArray.push(i);
			}
			$scope.paginationArray.push(">");
		}

		var onSuccessDelete = function(response){
			var deletedWineId = response.data._id;

			for(var i=0; i<$scope.wines.length; i++){
	 			if($scope.wines[i]._id == deletedWineId){
	 				$scope.wines.splice(i, 1);
	 				return;
	 			}
	 		}
		}

		var onErrorDelete = function(reason){
			$window.alert("Error removing wine, reason: " + reason.statusText);
		}

		$scope.deleteWine = function(id){
			WinesDataService.deleteWine(id).then(onSuccessDelete, onErrorDelete);
		}

		$scope.sort = function(critera){
			if(critera === $scope.sortCriteria){
				if($scope.sortDirection === 'asc'){
					$scope.sortDirection = 'desc';
				}else{
					$scope.sortDirection = 'asc';
				}
			}else{
				$scope.sortCriteria = critera;
				$scope.sortDirection = 'asc';
			}
			getWines();
		}

		$scope.search = function(){
			getWines();
		}

		$scope.changePage = function(i){
			if(i === "<"){
				if($scope.page > 1){
					$scope.page -= 1;
					getWines();
				}
			}else if(i === ">"){
				if($scope.page < $scope.noPages){
					$scope.page += 1;
					getWines();
				}
			}else{
				$scope.page = i;
				getWines();
			}
		}
	}
	var app = angular.module("winesModule");
	app.controller("WinesController", WinesController);
})();