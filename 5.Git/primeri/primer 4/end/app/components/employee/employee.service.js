(function() {
	'use strict';

	angular
		.module('employee')
		.factory('Employee', employeeService);

	function employeeService() {
		var employees = [];
		
		var employee =  {
			saveEmployee: saveEmployee,
			getEmployees: getEmployees
		};

		init();

		return employee;

		function saveEmployee(employee) {
			employees.push(employee);
		}

		function getEmployees() {
			return employees;
		}

		function init() {
			employees.push({jmbg:"123", name:"Petar", surname:"Perić", dateOfBirth:"1980-12-05T00:00:00.000Z", placeOfBirth:{name:"Novi Sad", zip:"21000"}});
			employees.push({jmbg:"345", name:"Boban", surname:"Lazović", dateOfBirth:"1975-04-11T00:00:00.000Z", placeOfBirth:{name:"Beograd", zip:"11000"}});
			employees.push({jmbg:"678", name:"Tamara", surname:"Terzić", dateOfBirth:"1991-12-21T00:00:00.000Z", placeOfBirth:{name:"Novi Sad", zip:"21000"}});
		}
	}
})();