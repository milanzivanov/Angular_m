(function() {
	'use strict';

	angular
		.module('employee')
		.controller('EmployeeListController', EmployeeListController);

	EmployeeListController.$inject = ['Employee', '$location'];
	function EmployeeListController(Employee, $location) {
		var ec = this;
		ec.employees = Employee.getEmployees();
		ec.goToAdd = goToAdd;

		function goToAdd() {
			$location.path('/add');
		}
	}
})();