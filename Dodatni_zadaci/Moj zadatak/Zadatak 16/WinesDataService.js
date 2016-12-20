(function(){

    var WinesDataService = function($http){

        var get = function (id) {
            var url = "http://localhost:3000/api/wines/" + id;
            return $http.get(url);
        };

        var update = function (wine){
            var url = "http://localhost:3000/api/wines/" + wine._id;
            return $http.put(url, wine);
        // 15i iznad ove crte
        };
        var getAll = function(){
            var url = "http://localhost:3000/api/wines";
            return $http.get(url);
        };
        var addAll = function(newWine) {
            var url = "http://localhost:3000/api/wines";
            return $http.post(url, newWine);
        };
        var deleteWine = function (id) {
            var url = "http://localhost:3000/api/wines/" + id;
            return $http.delete(url);
        };

        return {
            getAll: getAll,
            addWine: addAll,
            getWine: get,
            update: update,
            deleteWine: deleteWine
        };
    };

    var module = angular.module('winesModule');
    module.factory('WinesDataService', WinesDataService);
})();