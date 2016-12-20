(function(){
	
	// ako želimo da filtriramo niz objekata:
	// povratna vrednost funkcije filtera treba da je niz objakta izdvojenih iz prosleđenog niza koji odgovaraju 
	// kriterijumu pretrage
	var restaurantFilter = function(){
		return function(array, filterBy, searchQuery){ // filter prima niz (u koji Angularar prosledi sve iteme iz tabele)
			if(!array){ // dok ne dođu podaci sa servera filteru se prosleđuje undefined za ovaj kriterijum.
				// filter bi bez ovog if-a radio korektno ali bi se ispisalo nekoliko grešaka na konzolu
				// ovako vraćamo prazan niz sve dok u array ne dobijemo neke podatke za filtriranje
				return [];
			}

			var resArray = []; // niz rezultujućih item-a koji odgovaraju kriterijumima pretrage 
			for(var i=0; i<array.length; i++){ // prolazimo kroz prosleđeni niz i za svaki item iz iniza proveravamo da li odgovara pretrazi
				var criteria = "";
				if(filterBy == 'Name'){
					criteria = array[i].name.toLowerCase();
				}else if(filterBy == 'Rating'){
					criteria = "" + array[i].rating;
				}else if(filterBy == 'Price'){
					criteria = "" + array[i].price;
				}else if(filterBy == 'Cuisine'){
					criteria = array[i].cuisine.toLowerCase();
				}

				var query = searchQuery.toLowerCase();
				if(criteria.indexOf(query) != -1){
					resArray.push(array[i]); // i-ti item odgovara pretrazi pa se dodaje na rezultujući niz
				}
			}
			return resArray;
		}


	}
	
	var app = angular.module("restaurantsModule");
	app.filter('restaurantFilter', restaurantFilter); // registracija filtera u modulu.
	// ovaj js fajl je uključen u index.html
	// filter je iskorišćen u RestaurantsTable.html u okviru ng-repeat direktive
	
})();