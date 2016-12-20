(function() {
	'use strict';

	angular
		.module('employee')
		.controller('EmployeeListController', EmployeeListController);

	EmployeeListController.$inject = ['Employee', '$location'];
	function EmployeeListController(Employee, $location) {
		var ec = this;
		Employee.getEmployees().then(function(emp) {
			ec.employees = emp;
		});
		ec.goToAdd = goToAdd;

		function goToAdd() {
			$location.path('/add');
		}
	}
})();