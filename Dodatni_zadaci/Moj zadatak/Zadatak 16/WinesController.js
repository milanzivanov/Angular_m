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
        WinesDataService.getAll().then(onSuccessCallback, onErrorCallback);

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

    };

    var app = angular.module('winesModule');
    app.controller('WinesController', WinesController);
})();