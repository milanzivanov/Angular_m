(function() {
	'use strict';

	angular
		.module('employee')
		.factory('employeeService', employeeService);

	function employeeService() {
		var employees = [];

		var service = {
			getEmployees: getEmployees,
			addEmployee: addEmployee,
			removeEmployee: removeEmployee
		};

		init();

		return service;

		function getEmployees() {
			return employees;
		}

		function addEmployee(employee) {
			if(employee.jmbg) {
				employees.push(employee);
				return true;
			}
			return false;
		}

		function removeEmployee(jmbg) {
			var employeeIndex;
            angular.forEach(employees, function (employee, index) {
                if (employee.jmbg === jmbg) {
                    employeeIndex = index;
                }
            });
            if (employeeIndex >= 0) {
            	employees.splice(employeeIndex, 1);
            	return employeeIndex;
            } else {
            	return -1;
            }
		}

		function init() {
			addEmployee({jmbg: '1234567891234', name: 'Marko', surname: 'Marković'});
			addEmployee({jmbg: '1234567891235', name: 'Boban', surname: 'Srdić'});
			addEmployee({jmbg: '1234567891236', name: 'Petar', surname: 'Martinović'});
			addEmployee({jmbg: '1234567891237', name: 'Milan', surname: 'Ristić'});
			addEmployee({jmbg: '1234567891238', name: 'Pavle', surname: 'Pavlović'});
		}
	}
})();