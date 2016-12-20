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

		return{ 
			getAll : getAll,
			get: get
		}
	}

	var app = angular.module("resolveExample");
	app.factory("WinesDataService", WinesDataService);
})();