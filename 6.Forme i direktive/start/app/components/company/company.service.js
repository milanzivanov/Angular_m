(function() {
	"use strict";

	angular
		.module('company-registry.company')
		.factory('Company', Company);

	Company.$inject = ['$resource'];
	function Company($resource) {
		var collectionName = "companies";
		return $resource("http://localhost:3000/api/:collectionName/:id",
			{id: "@_id", collectionName: collectionName},
			{ update: { method: 'PUT' } });
	}
})();