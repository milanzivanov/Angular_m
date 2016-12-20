(function(){
	// winesService servis zavisi od $http servisa ($http servis se  injektuje u winesService servis)
	// winesService servis zavisi od $log servisa ($log koristimo za ispis notifikacija u konzolu)
	var winesService = function($http, $log){
		var url = "http://localhost:3000/api/wines"; // ovaj servis će da dobavlja i snima podatke u kolekciju wines (wines.json u node-server-u)		

		// vraća sve objekte iz kolekcije
		var getAll = function(getParams){
			// url https://localhost:3000/api/wines na GET metodu vraća sve objekte iz kolekcije wines (videti slajd 12 sa predavanja iz AJAX-a)			
			$log.info("Sending http GET request to " + url);
			// registrovan je samo success clallback (funkcija onSuccess (definisana niže u kodu) se poziva kada uspešno stignu podaci sa servera)			
			return $http.get(url, {"params": getParams}).then(onSuccess); // $http.get vraća promise objekat nad kojim se može pozvati then metoda. Sama then metoda takođe ima promise objekat kao povratnu vrednost => povratna vrednost funkcije getAll je promise objekat
		}

		var post = function(data){			
			// API servera je opisan na predavanjima iz AJAX-a. Za ovu metodu pogledati slajd 17 "snimanje podataka": dodavanje novog objekta u kolekciju wines se vrši slanjem POST zahteva na https://localhost:3000/api/wines pri čemu se kao parametar POST zahteva šalje JSON objekat koji će biti dodat u kolekciju 	
			$log.info("Sending http POST request to " + url);
			$log.info("POST param: " + data)
			return $http.post(url, data).then(onSuccess); // $http.post vraća promise objekat nad kojim se može pozvati then metoda. Sama then metoda takođe ima promise objekat kao povratnu vrednost => povratna vrednost post funkcije je promise objekat
		} 

		// izvršiće se nakon uspešnog dobavljanja podataka sa servera
		var onSuccess = function(response){ // funkcija prima HTTP odgovor u čijem se data property-ju nalaze traženi podaci
			return response.data;
		}

		return {
			getAll : getAll,
			post : post
		};
	};

	var module = angular.module("wineModule");
	module.factory("winesService", winesService);
})();