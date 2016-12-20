(function(){

    var WinesController = function($scope,$window, WinesDataService){
        $scope.message = "Aplikacija za pregled vina";
        $scope.doClick = function(){
            $window.alert($scope.userInput);
        };
        $scope.wines = WinesDataService.getAll();

    };

    var app = angular.module('winesModule');
    app.controller('WinesController', WinesController);
})();