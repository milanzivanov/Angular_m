(function() {
	'use strict';

	angular
		.module('employee')
		.controller('EmployeeController', EmployeeController);

	EmployeeController.$inject = ['employeeService'];
	function EmployeeController(employeeService) {
		var ec = this;
		ec.employees = employeeService.getEmployees();
		ec.saveEmployee = saveEmployee;
		ec.reset = reset;
		ec.deleteEmployee = deleteEmployee;

		ec.lastSaveSuccess = true;
		ec.lastDeleteIndex = -1;

		function saveEmployee() {
			ec.lastSaveSuccess = employeeService.addEmployee(ec.employee);
			ec.employee = {};
		}

		function reset() {
			ec.employee = {};
		}

		function deleteEmployee(jmbg) {
			employeeService.removeEmployee(jmbg);
		}
	}
})();