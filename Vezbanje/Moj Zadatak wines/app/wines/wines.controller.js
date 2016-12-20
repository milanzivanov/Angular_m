(function () {
	angular
		.module("wineModule")
		.controller('WinesController', WinesController);

	WinesController.$inject = ['$scope', '$window', 'WineDataService'];
	function WinesController ($scope,$window,WineDataService) {

			$scope.sortDirection = "asc";
			$scope.sortCriteria = "";
			$scope.selectedItem = "name";
			$scope.maxWines = 5;
			$scope.page = 1;

			function onSuccessCallback (response) {
			  	$scope.wines = response.data.results;
			  	adjustPagination(response.data.count);
			}
			function onFailedCallback (reason) {
				 $window.alert("Neuspesan odgovor servera " + reason.statusText);
			}

			function getWines (getParams) {
			 	var filterParams = {};
			 	filterParams[$scope.selectedItem] = $scope.searchQuery;

				getParams = {
					filter: filterParams,
					sort: $scope.sortCriteria,
					sortDirection: $scope.sortDirection,
					page: $scope.page,
					pageSize: $scope.maxWines
				};

				WineDataService.getAll(getParams).then(onSuccessCallback, onFailedCallback);
			}
			getWines();



			function adjustPagination (wineCount) {
				$scope.noPages = Math.ceil(wineCount/ $scope.maxWines);
				if($scope.noPages === 0){
					$scope.noPages = 1;
				}
				$scope.paginationArray = ["<"];
				for (var i = 1; i <= $scope.noPages; i++) {
					$scope.paginationArray.push(i);
				}
				$scope.paginationArray.push(">");
			}
			$scope.changePage = function (value){
				if(value === "<"){
					if($scope.page > 1){
						$scope.page -= 1;
						getWines();
					}
				}else if (value === ">"){
					if($scope.page < $scope.noPages){
						$scope.page += 1;
						getWines();
					}
				}else {
					$scope.page = value;
					getWines();
				}
			};


			$scope.sort = function (criteria) {
				if (criteria === $scope.sortCriteria){
					if($scope.sortDirection === "asc" ){
						$scope.sortDirection = "desc";
					}else {
						$scope.sortDirection = "asc";
					}
				}else {
					$scope.sortCriteria = criteria;
					$scope.sortDirection = "asc";
				}
				getWines();
			};

			$scope.search = function () {
				getWines();
			};


			$scope.deleteWine = function (id) {
				WineDataService.deleteWine(id).then(onSuccDel);
			};
			function onSuccDel (response) {
				var deletedWineId = response.data._id;

				for (var i = 0; i < $scope.wines.length; i++) {
				 	if($scope.wines[i]._id == deletedWineId){
	 				$scope.wines.splice(i, 1);
	 				return;
	 				}
				}
			}
	}
})();