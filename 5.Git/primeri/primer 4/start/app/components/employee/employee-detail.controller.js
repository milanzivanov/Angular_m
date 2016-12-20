(function() {
	'use strict';

	angular
		.module('employee')
		.controller('EmployeeDetailController', EmployeeDetailController);

	EmployeeDetailController.$inject = ['Employee', 'Place', '$location'];
	function EmployeeDetailController(Employee, Place, $location) {
		var ec = this;
		ec.employee = {};
		ec.places = Place.getPlaces();
		ec.saveEmployee = saveEmployee;
		ec.reset = reset;

		function saveEmployee() {
			Employee.saveEmployee(ec.employee);
			$location.path('/');
		}

		function reset() {
			ec.employee = {};
		}
	}
})();