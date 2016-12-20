(function() {
	"use strict";

	angular
		.module('company-registry.employee')
		.controller('EmployeeController', EmployeeController);

	EmployeeController.$inject = ['$location', 'employee', 'places', 'title'];
	function EmployeeController($location, employee, places, title) {
		var ec = this;

		ec.places = places.results;
		ec.employee = employee;
		ec.employeeCopy = angular.copy(ec.employee);
		ec.title = title;

		//Koristimo angular.copy kako bi napravili nov objekat sa svim istim podacima umesto da promenimo samo referencu
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
			ec.employee.$delete(success);
		};

		function success() {
			$location.path('/employee');
		}
	}
})();