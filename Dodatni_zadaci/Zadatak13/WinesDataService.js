(function(){
	
	var WinesDataService = function($http){		

		var getAll = function(){ 
			var url = "http://localhost:3000/api/wines";
			return $http.get(url);
		}

		return{ 
			getAll : getAll
		}
	}

	var app = angular.module("winesModule");
	app.factory("WinesDataService", WinesDataService);
})();