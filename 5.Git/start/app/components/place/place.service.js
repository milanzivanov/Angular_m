(function() {
	"use strict";

	angular
		.module('company-registry.place')
		.factory('Place', Place);

	Place.$inject = ['$resource'];
	function Place($resource) {
		var collectionName = "places";
		return $resource("http://localhost:3000/api/:collectionName/:id",
			{ id: "@_id", collectionName: collectionName},
			{ update: { method: 'PUT' } });
	}
})();