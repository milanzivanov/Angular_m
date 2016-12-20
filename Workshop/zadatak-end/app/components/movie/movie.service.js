(function() {
	"use strict";

	angular
		.module('new-imdb.movie')
		.factory('Movie', Movie);

	Movie.$inject = ['$resource'];
	function Movie($resource) {
		var collectionName = "movies";
		return $resource("http://localhost:3000/api/:collectionName/:id",
			{ id: "@_id", collectionName: collectionName},
			{ update: { method: 'PUT' } });
	}
})();