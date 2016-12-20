(function(){
	var WinesController = function($scope, $window, WinesDataService){
		$scope.message = "Aplikacija za pregled vina";
		$scope.sortCriteria = "";
		$scope.sortDirection = "asc";
		
		$scope.doClick = function(){
			$window.alert($scope.userInput);
		}

		var onSuccessCallback = function(response){
			$scope.wines = response.data.results;
		}
		var onErrorCallback = function(reason){
			$window.alert("Data retrieval unsuccessfull, reason: " + reason.statusText);
		}

		var getWines = function(){
			var filterParams = {};
			filterParams['name'] = $scope.searchQuery;

			var getParams = {
				filter : filterParams,
				sort: $scope.sortCriteria,
				sortDirection: $scope.sortDirection
			};

			WinesDataService.getAll(getParams).then(onSuccessCallback, onErrorCallback);
		}
		getWines();

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
	}
	var app = angular.module("winesModule");
	app.controller("WinesController", WinesController);
})();