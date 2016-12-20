(function() {
	"use strict";

	angular
		.module('company-registry.place')
		.controller('PlaceController', PlaceController);

	PlaceController.$inject = ['$location', 'Employee', 'Company', 'deleteModal', 'noDeleteModal', '$q', 'place', 'title'];
	function PlaceController($location, Employee, Company, deleteModal, noDeleteModal, $q, place, title) {
		var pc = this;
			
		pc.place = place;
		pc.placeCopy = angular.copy(pc.place);
		pc.title = title;

		pc.revertChanges = function() {
			pc.place = angular.copy(pc.placeCopy);
		};

		pc.save = function() {
			if(pc.place._id) {
				pc.place.$update(success);
			} else {
				pc.place.$save(success);
			}
		};

		pc.remove = function() {
			//Pravimo dva upita istovremeno koristeći $q.all servis koji prihvata niz promise-a i spaja ih u jedan
			$q.all([Company.get({filter: {"headquarters": pc.place.name}}).$promise, Employee.get({filter: {"placeOfBirth": pc.place.name}}).$promise]).then(function(data) {
				//data objekat je niz koji sadrži pod indeksom 0 rezultat prvog promise-a, a pod indeksom 1 rezultat drugog promise-a
				if(data[0].count === 0 && data[1].count === 0) {
					//ako može da se obriše otvara se modal koji pita da li je korisnik siguran da želi da obriše dato mesto
					deleteModal.open("place").then(function(flag) {
						if(flag) {
							//ako da briše ga
							pc.place.$delete(success);
						}
					});
				} else {
					//Ako ne može da obriše, prikazuje se poruka korisniku
					noDeleteModal.open();
				}
			});
		};

		function success() {
			$location.path('/place');
		}
	}
})();