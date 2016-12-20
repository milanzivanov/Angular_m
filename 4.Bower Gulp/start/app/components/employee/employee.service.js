(function () {
	angular
		.module('app')
		.factory('Employee', Employee);

	Employee.$inject = ["$http"];
	function Employee ($http) {
	var collectionName = "employees";

	var service = {
		getAll: getAll,
		create: create,
		get: get,
		update: update,
		remove: remove
	};

	return service;

	function getAll(params) {
		return $http.get("http://localhost:3000/api/" + collectionName, {"params": params});
	}

	function create(entity) {
		return $http.post("http://localhost:3000/api/" + collectionName, entity);
	}

	function get(id) {
		return $http.get("http://localhost:3000/api/" + collectionName + "/" + id);
	}

	function update(entity) {
		return $http.put("http://localhost:3000/api/" + collectionName + "/" + entity._id, entity);
	}

	function remove(id) {
		return $http.delete("http://localhost:3000/api/" + collectionName + "/" + id);
	}
}
})();
