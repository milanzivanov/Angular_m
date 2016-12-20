(function() {
	'use strict';

	angular
		.module('place')
		.factory('Place', placeService);

	function placeService() {
		var places = [];
		
		var place = {
			savePlace: savePlace,
			getPlaces: getPlaces
		};

		init();

		return place;

		function savePlace(place) {
			places.push(place);
		}

		function getPlaces() {
			return places;
		}

		function init() {
			places.push({name: "Novi Sad", zip: "21000"});
			places.push({name: "Beograd", zip: "11000"});
			places.push({name: "Subotica", zip: "24000"});
		}
	}
})();