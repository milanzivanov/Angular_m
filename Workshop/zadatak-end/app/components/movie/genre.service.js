(function() {
	"use strict";

	angular
		.module('new-imdb.movie')
		.factory('Genre', Genre);

	Genre.$inject = ['$http'];
	function Genre($http) {
		var collectionName = "genres";

		var service = {
			getAll: getAll
		};

		return service;

		function getAll() {
			return $http.get("http://localhost:3000/api/" + collectionName);
		}
	}
})();