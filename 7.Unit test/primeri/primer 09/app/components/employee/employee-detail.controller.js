(function() {
	'use strict';

	angular
		.module('employee')
		.controller('EmployeeDetailController', EmployeeDetailController);

	EmployeeDetailController.$inject = ['Employee', '$location'];
	function EmployeeDetailController(Employee, $location) {
		var ec = this;
		ec.employee = new Employee();
		ec.saveEmployee = saveEmployee;
		ec.reset = reset;

		function saveEmployee() {
			Employee.saveEmployee(ec.employee).then(function() {
				$location.path("/");
			});
		}

		function reset() {
			ec.employee = new Employee();
			ec.employeeForm.$setUntouched();
		}
	}
})();