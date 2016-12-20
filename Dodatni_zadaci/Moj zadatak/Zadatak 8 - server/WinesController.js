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
    };

    var app = angular.module('winesModule');
    app.controller('WinesController', WinesController);
})();