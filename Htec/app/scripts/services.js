(function () {
    'use strict';

    angular
        .module('htecApp')
        .factory('Factory', Factory);

    Factory.$inject = ['$http'];
    function Factory($http) {
        var url = 'db.json';
        var service = {
            getAll: getAll
        };

        return service;

        function getAll() {
            return $http.get(url);
        }
    }
})();