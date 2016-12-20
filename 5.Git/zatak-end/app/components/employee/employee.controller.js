(function() {
	"use strict";

	angular
		.module('company-registry.employee')
		.controller('EmployeeController', EmployeeController);

	EmployeeController.$inject = ['$location', 'placeModal', 'deleteModal', 'employee', 'places', 'title'];
	function EmployeeController($location, placeModal, deleteModal, employee, places, title) {
		var ec = this;

		ec.places = places.results;
		ec.employee = employee;
		ec.employeeCopy = angular.copy(ec.employee);
		ec.title = title;

		ec.datepicker = {
			minDate: new Date(1900,1,1),
			maxDate: new Date(),
			format: 'mediumDate',
			opened: false
		};

		ec.newPlace = function() {
			//otvaramo dijalog i čekamo da se zatvori uspešno (sa close)
			//izvršavanje se nastavlja u place/place-modal/place-modal.service.js linija 16
			placeModal.open().then(function(data) {
				//kad se zatvori ubaci ga u combobox
				ec.places.push(data);
				//selektuj ga - ovaj korak je tu samo zbog korisnika (pretpostavlja se da ako je korisnik dodao novo mesto želi da ga odabere)
				ec.employee.placeOfBirth = data.name;
			});
		};

		ec.revertChanges = function() {
			ec.employee = angular.copy(ec.employeeCopy);
		};

		ec.save = function() {
			if(ec.employee._id) {
				ec.employee.$update(success);
			} else {
				ec.employee.$save(success);
			}
		};

		ec.remove = function() {
			deleteModal.open("employee").then(function(flag) {
				if(flag) {
					ec.employee.$delete(success);
				}
			});
		};

		function success() {
			$location.path('/employee');
		}
	}
})();