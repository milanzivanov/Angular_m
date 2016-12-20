(function() {
	'use strict';

	angular
		.module('employee')
		.factory('Employee', employeeService);

	employeeService.$inject = ['$resource'];
	function employeeService($resource) {
		var employees = [];
		var employeeService = $resource("http://localhost:3000/api/employees/:id", { id: "@_id"}, { update: { method: 'PUT' } });
		
		angular.extend(employeeService, {
			saveEmployee: saveEmployee,
			getEmployees: getEmployees
		});

		return employeeService;

		function saveEmployee(employee) {
			if(employee._id) {
				return employee.$update().then(function(data) {
					employees.push(data);
				});
			} else {
				return employee.$save().then(function(data) {
					employees.push(data);
				});
			}
		}

		function getEmployees() {
			return employeeService.get().$promise.then(function(data) {
				employees = data.results;
				return employees;
			});
		}
	}
})();