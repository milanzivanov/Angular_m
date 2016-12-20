(function() {
	'use strict';

	angular
		.module('employee')
		.controller('EmployeeDetailController', EmployeeDetailController);

	EmployeeDetailController.$inject = ['Employee', 'Place', '$location', '$modal'];
	function EmployeeDetailController(Employee, Place, $location, $modal) {
		var ec = this;
		ec.employee = {};
		ec.places = Place.getPlaces();
		ec.saveEmployee = saveEmployee;
		ec.reset = reset;
		ec.init = init;
		//objekat za konfiguraciju odabirača datuma
		//spajamo sve atribute koje koristimo u HTMLu u objekat radi preglednosti
		ec.datepicker = {
			//najmanji dozvoljen datum
			minDate: new Date(1900,1,1),
			//najveći dozvoljen datum
			maxDate: new Date(),
			//format u kom želimo da prikažemo datum
			format: 'fullDate',
			//da li je datepicker otvoren ili ne
			opened: false
		};
		ec.addPlace = openPlaceModal;

		function saveEmployee() {
			Employee.saveEmployee(ec.employee);
			$location.path('/');
		}

		function reset() {
			ec.employee = {};
			init();
		}

		//želimo da izbegnemo da nam select ima 1 praznu opciju koja pri tom nestaje kad se izabere nešto drugo
		function init() {
			if(!ec.employee.placeOfBirth && ec.places.length > 0) {
				ec.employee.placeOfBirth = ec.places[0];
			}
		}

		//funkcija za otvaranje i preuzimanje rezultata modalnog dijaloga
		function openPlaceModal() {
			//sa $modal.open otvaramo dijalog. Funkciji prosleđujemo objekat za konfiguraciju modala
			var modalInstance = $modal.open({
				//animirani
				animation: true,
				//putanja ka HTMLu modala
				templateUrl: 'app/components/place/place-modal.html',
				//kontroler za modal
				controller: 'PlaceModalController',
				controllerAs: 'pmc'
			});

			//kad se uspešno zatvori modal putem close metode (pogledati place-modal.controller.js)
			modalInstance.result.then(function(newPlace) {
				//parametar newPlace nam je prosleđen putem $modalInstance.close(pmc.place)
				Place.savePlace(newPlace);
				//na kraju želimo da bude selektovano mesto koje smo dodali (dobro za korisnika)
				ec.employee.placeOfBirth = ec.places[ec.places.length - 1];
			});
		}
	}
})();