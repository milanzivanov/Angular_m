(function(){

    var WinesController = function($scope,$window, WinesDataService){

        $scope.message = "Aplikacija za pregled vina";
        $scope.doClick = function(){
            $window.alert($scope.userInput);
        };

        var onSuccessCallback = function(response){
            $scope.wines = response.data.results;
        };

        var onErrorCallback = function(reason){
            window.alert("Data retrieval unsuccessfull, reason: " + reason.statusText);
        };
        //zadatak 17
        function getWines () {
            //zadatak 18
            var filterParams = {};
            filterParams["name"] = $scope.searchQuery;

            var getParams = {
                //zdk 18
                filter: filterParams,

                sort: $scope.sortCriteria,
                sortDirection: $scope.sortDirection
                };
            WinesDataService.getAll(getParams).then(onSuccessCallback, onErrorCallback);
        }
        getWines();

        // zadatak 16
        var onSuccessDelete = function (response) {
            deletedWineId = response.data._id;

            for (var i = 0; i < $scope.wines.length; i++) {
                if ($scope.wines[i]._id == deletedWineId){
                    $scope.wines.splice(i,1);
                    return;
                }
            }
        };

        var onFailedDelete = function (reason) {
            $window.alert("Error removing wine, reason: " + reason.statusText);
        };
        $scope.deleteWine = function (id) {
            WinesDataService.deleteWine(id).then(onSuccessDelete, onFailedDelete);
        };

        //zadatak 17
        $scope.sortDirection = "asc";
        $scope.sortCriteria = "";
        $scope.sort = function (sortBy) {
            if (sortBy == $scope.sortCriteria){
                if ($scope.sortDirection == "asc") {
                    $scope.sortDirection = "desc";
                }else{
                    $scope.sortDirection = 'asc';
                }
            }else {
                $scope.sortCriteria = sortBy;
                $scope.sortDirection = "asc";
            }
            getWines();
        };
        //zadatak 18


        $scope.search = function(searchBy) {
            getWines();

        };
    };
    var app = angular.module('winesModule');
    app.controller('WinesController', WinesController);
})();