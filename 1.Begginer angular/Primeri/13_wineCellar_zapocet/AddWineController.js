(function () {

    var AddWineController = function ($scope) {

        $scope.addWine = function(){
            $scope.newWine.id = $scope.newWine.name.split(" ").join("_");
            $scope.$parent.$parent.wines.push($scope.newWine);

            $scope.newWine = {};

            $scope.showPanels.showWineTable = true;
            $scope.showPanels.showAddWine = false;
        };

    };

    var app = angular.module("wineModule");
    app.controller('AddWineController', AddWineController);
})();