(function () {

    var WineDetailsController = function ($scope, WinesDataService, $state, $window, wine) {

        $scope.wine = wine.data;
        //zadatak 15 iznad dodat scope
        var onSuccess = function () {
            $state.go("main.wines");
        };
        var onError = function () {
            $window.alert("Adding wine unsuccessful");
        };
        $scope.submit = function () {
            //zadatak 15
            if ($scope.wine._id){
                WinesDataService.update($scope.wine).then(onSuccess, onError);
            }else {
                WinesDataService.addWine($scope.wine).then(onSuccess, onError);
            }

        };
    };

    var app = angular.module('winesModule');
    app.controller('WineDetailsController', WineDetailsController);
})();
