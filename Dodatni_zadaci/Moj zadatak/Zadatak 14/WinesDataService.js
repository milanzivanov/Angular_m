(function(){

    var WinesDataService = function($http){



        var getAll = function(){
            var url = "http://localhost:3000/api/wines";
            return $http.get(url);
        };
        var addWine = function (newWine) {
            var url = "http://localhost:3000/api/wines";
            return $http.post(url, newWine);
        };

        return {
            getAll: getAll,
            addWine: addWine
        };
    };

    var module = angular.module('winesModule');
    module.factory('WinesDataService', WinesDataService);
})();


