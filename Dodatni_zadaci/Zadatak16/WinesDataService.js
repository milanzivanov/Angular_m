(function(){
	
	var WinesDataService = function($http){		

		var getAll = function(){ 
			var url = "http://localhost:3000/api/wines";
			return $http.get(url);
		}

		var get = function(id){
			var url = "http://localhost:3000/api/wines/" + id;
			return $http.get(url);
		}

		var addWine = function(newWine){
			var url = "http://localhost:3000/api/wines/";
			return $http.post(url, newWine);
		}

		var update = function(wine){
			var url = "http://localhost:3000/api/wines/" + wine._id;
			return $http.put(url, wine);
		}

		var deleteWine = function(id){
			var url = "http://localhost:3000/api/wines/" + id;
			return $http.delete(url);
		}

		return{ 
			getAll : getAll,
			addWine : addWine,
			get : get,
			update : update,
			deleteWine : deleteWine
		}
	}

	var app = angular.module("winesModule");
	app.factory("WinesDataService", WinesDataService);
})();