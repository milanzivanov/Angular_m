(function(){
	// injektujemo $resource servis u winesService 
	var winesService = function($resource){
		// url smo parametrizovali sa id (ukoliko id nije poslat biće izostavljen iz putanje)
		var url = "http://localhost:3000/api/wines/:id";
		// kreira Resource klasu sa 5 default metoda: get, save, query, remove i jednom custom metodom: update
			
		return $resource(url, null, {update: {method: 'PUT'} })
	};

	var module = angular.module("wineModule");
	module.factory("winesService", winesService);
}());