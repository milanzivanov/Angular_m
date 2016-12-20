(function() {
	"use strict";

	angular
		.module('company-registry.employee')
		.factory('Employee', Employee);

	Employee.$inject = ['$resource'];
	function Employee($resource) {
		var collectionName = "employees";
		return $resource("http://localhost:3000/api/:collectionName/:id",
			{id: "@_id", collectionName: collectionName},
			{ update: { method: 'PUT' } });
	}
})();