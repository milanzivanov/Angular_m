(function() {
	'use strict';

	angular
		.module('company-registry.place.place-modal')
		.factory('placeModal', placeModal);

	placeModal.$inject = ['Place', '$modal'];
	function placeModal(Place, $modal) {
		return {
			open: openPlaceModal
		};

		function openPlaceModal() {
			//Otvaramo modal sa navedenim parametrima
			var modalInstance = $modal.open({
				animation: true,
				resolve: {
					//pre nego što se otvori, kreiramo novo mesto i stavljamo ga na scope modala
					newPlace: function() {
						return new Place();
					}
				},
				templateUrl: 'app/components/place/place-modal/place-modal.html',
				controller: 'PlaceModalController',
				controllerAs: 'pac'
			});
			//Kada se zatvori (putem close metode) uzimamo rezultat (koji se prosleđuje kao argument od close)
			//izvršavamo transformaciju i šaljemo $update zahtev, vraćamo taj promise koji će postati jednak data
			//objektu, odnosno mestu koje smo sačuvali
			return modalInstance.result.then(function(newPlace) {
				//kad se vrati izvršavanje se nastavlja u kontroleru, npr. employee/employee.controller.js linija 26
				return newPlace.$save(function(data) {
					return data;
				});
			});
		}
	}
})();