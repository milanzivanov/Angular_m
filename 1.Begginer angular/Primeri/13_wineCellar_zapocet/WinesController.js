(function () {
    var WinesController = function ($scope) {
          /* body... */



        $scope.sortCriteria = "";
        $scope.sortDirection = "+";
        $scope.setSortCriteria = function (clicked) {
            if (clicked == $scope.sortCriteria) {
                if ($scope.sortDirection == "+") {
                    $scope.sortDirection = "-";
                }else {
                    $scope.sortDirection = "+";
                }

            }else {
                $scope.sortCriteria = clicked;
                $scope.sortDirection = "+";
            }
        };

        $scope.searchQuery="";
        $scope.searchWine = function (tableRowData) {
            var wineName = tableRowData.name.toLowerCase();
            var query = $scope.searchQuery.toLowerCase();
            return wineName.indexOf(query) != -1;
        };

        $scope.maxWinesInTable =5;
        $scope.activePage = 1;
        adjustPagination();

        function adjustPagination () {
            $scope.noPaginationPages = Math.ceil($scope.wines.length / $scope.maxWinesInTable);
            $scope.paginationPagesArr = ["<", "1"];
            for (var i = 2; i <= $scope.noPaginationPages; i++) {
                $scope.paginationPagesArr.push("" + i);
            }
            $scope.paginationPagesArr.push(">");
        }

        $scope.changePage = function (newActivePage) {
            if (newActivePage == ">") {
                if ($scope.activePage < $scope.noPaginationPages) {
                    $scope.activePage = $scope.activePage + 1;
                }
            }else if (newActivePage == "<") {
                if ($scope.activePage > 1){
                    $scope.activePage = $scope.activePage - 1;
                }
            }else {
                $scope.activePage = parseInt(newActivePage);
            }
        };


    };


    var app = angular.module('wineModule');
    app.controller('WinesController', WinesController);
})();