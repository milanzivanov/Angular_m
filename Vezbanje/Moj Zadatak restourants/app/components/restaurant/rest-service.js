(function () {
    angular
        .module("restModule.restaurants")
        .factory('RestService', RestService);

    RestService.$inject = ["$http"];
    function RestService ($http) {
        var url = "http://localhost:3000/api/restaurants";
        var value = {
            getAll: getAll,
            addRest: addRest,
            get: get,
            updateRest: updateRest,
            deleteRest: deleteRest
        };


        function getAll (params) {
            return $http.get(url, {params: params});
        }
        function addRest (newRest) {
            return $http.post(url, newRest);
        }
        function get (restId) {
            return $http.get(url + "/" + restId);
        }
        function updateRest (restaurant) {
            return $http.put(url + "/" + restaurant._id, restaurant);
        }
        function deleteRest (restId){
            return $http.delete(url + "/" + restId);
        }


        return value;
    }
})();