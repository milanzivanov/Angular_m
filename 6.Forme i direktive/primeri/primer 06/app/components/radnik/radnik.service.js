(function() {
	'use strict';

	angular
		.module('radnik')
		.factory('radnikService', radnikService);

	radnikService.$inject = ['$resource'];
	function radnikService($resource) {
		return $resource("http://localhost:3000/api/employees/:id", { id: "@id"}, { update: { method: 'PUT' } });
	}
})();