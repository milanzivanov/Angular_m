(function () {
    var WineDetailsController = function ($scope, $window, WinesDataService, $state) {
        $scope.submit = function() {
            WinesDataService.addWine($scope.wine).then(onSuccess, onError);
        };
        var onSuccess = function () {
            $state.go("main.wines");
        };
        var onError = function () {
            $window.alert("Neuspesan unos!");
        };

    };
    var app = angular.module('winesModule');
    app.controller('WineDetailsController', WineDetailsController);
})();