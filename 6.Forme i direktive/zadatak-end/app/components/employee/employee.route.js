(function() {
	"use strict";

	angular
		.module('company-registry.employee')
		.config(config);

	config.$inject = ['$stateProvider'];
	function config($stateProvider) {
		$stateProvider
			.state('main.employeeList', {
				url: '/employee',
				views: {
					'content@': {
						resolve: {
							employees: getEmployees,
							places: getPlaces
						},
						templateUrl: 'app/components/employee/employee-list.html',
						controller: 'EmployeeListController',
						controllerAs: 'elc'
					}
				}
			})
			.state('main.employeeAdd', {
				url: '/employee/add',
				views: {
					'content@': {
						resolve: {
							employee: createEmployee,
							places: getPlaces,
							title: addTitle
						},
						templateUrl: 'app/components/employee/employee.html',
						controller: 'EmployeeController',
						controllerAs: 'ec'
					}
				}
			})
			.state('main.employeeEdit', {
				url: '/employee/:id',
				views: {
					'content@': {
						resolve: {
							employee: retrieveEmployee,
							places: getPlaces,
							title: editTitle
						},
						templateUrl: 'app/components/employee/employee.html',
						controller: 'EmployeeController',
						controllerAs: 'ec'
					}
				}
			});

		getEmployees.$inject = ['Employee'];
		function getEmployees(Employee) {
			return Employee.get({"pageSize":5}).$promise;
		}

		getPlaces.$inject = ['Place'];
		function getPlaces(Place) {
			return Place.get().$promise;
		}

		createEmployee.$inject = ['Employee'];
		function createEmployee(Employee) {
			return new Employee();
		}

		addTitle.$inject = ['$translate', 'crTranslations'];
		function addTitle($translate, crTranslations) {
			return crTranslations[$translate.use()].EMPLOYEE.ADD;
		}

		retrieveEmployee.$inject = ['$stateParams', 'Employee'];
		function retrieveEmployee($stateParams, Employee) {
			return Employee.get({id: $stateParams.id}).$promise;
		}

		editTitle.$inject = ['$stateParams', '$translate', 'crTranslations'];
		function editTitle($stateParams, $translate, crTranslations) {
			return crTranslations[$translate.use()].EMPLOYEE.EDIT + $stateParams.id;
		}
	}
})();