(function (argument) {
	angular
		.module("wineModule")
		.factory('WineDataService', WineDataService);

	WineDataService.$inject = ['$http'];
	function WineDataService ($http) {
		var values = {
			getAll: getAll,
			addWine: addWine,
			get: get,
			update: update,
			deleteWine: deleteWine
		}

		function getAll (params){
			var url = "http://localhost:3000/api/wines";
			return $http.get(url, {params:params});
		}
		function addWine (newWine) {
			var url = "http://localhost:3000/api/wines";
			return $http.post(url, newWine);  
		}
		function get (id){
			var url = "http://localhost:3000/api/wines/" + id;
			return $http.get(url);
		}
		function update (wine) {
			var url = "http://localhost:3000/api/wines/" + wine._id;
			return $http.put(url, wine);  
		}
		function deleteWine (id) {
			var url = "http://localhost:3000/api/wines/" + id;
			return $http.delete(url);
		}

		return values;		  
	}	
})();