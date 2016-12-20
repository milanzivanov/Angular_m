(function(){

	// naš servis zavisi od $resource servisa pa ga injektujemo
	var RestaurantsResourceService = function($resource){
		// url smo parametrizovali sa id (ukoliko id nije poslat biće izostavljen iz putanje)
		var url = "https://api.mongolab.com/api/1/databases/winesdb/collections/restaurants/:id";
		
		// POSTAVITI SOPSTVERNI API KLJUČ
		return $resource(url, {apiKey : "XQqRG0YYPenHugbHtl842hbvWtcPE9sq"}, {update: {method: 'PUT'} }); // kreira Resource klasu sa 5 default metoda: get, save, query, remove i jednom custom metodom: update
	}

	// registracija servisa pomoću factory funkcije
	var module = angular.module("restaurantsModule");
	module.factory("RestaurantsResourceService", RestaurantsResourceService);
})();