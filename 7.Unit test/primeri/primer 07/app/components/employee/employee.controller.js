(function() {
	'use strict';

	angular
		.module('employee')
		.controller('EmployeeController', EmployeeController);

	EmployeeController.$inject = ['Employee'];
	function EmployeeController(Employee) {
		var ec = this;
		ec.employee = new Employee();
		ec.employees = Employee.getEmployees();
		ec.saveEmployee = saveEmployee;
		ec.reset = reset;
		ec.deleteEmployee = deleteEmployee;

		ec.lastSaveSuccess = true;
		ec.lastDeleteIndex = -1;

		function saveEmployee() {
			Employee.saveEmployee(ec.employee);
			ec.reset();
		}

		function reset() {
			ec.employee = new Employee();
			ec.employeeForm.$setUntouched();
		}

		function deleteEmployee(employee) {
			Employee.removeEmployee(employee);
		}
	}
})();