(function() {
	"use strict";

	angular
		.module('company-registry.employee')
		.controller('EmployeeController', EmployeeController);

	EmployeeController.$inject = ['$scope', '$location', 'Employee', 'placeModal', 'deleteModal', 'employee', 'places', 'title', '$q'];
	function EmployeeController($scope, $location, Employee, placeModal, deleteModal, employee, places, title, $q) {
		var ec = this;

		ec.places = places.results;
		ec.employee = employee;
		ec.employeeCopy = angular.copy(ec.employee);
		ec.title = title;

		ec.datepicker = {
			minDate: new Date(1900,1,1),
			maxDate: new Date(),
			format: 'mediumDate',
			opened: false
		};

		ec.uniqueField = function(value) {
			if(value === ec.employeeCopy.jmbg) return $q.when(true);
			return Employee.get({"filter": {"jmbg":value}}).$promise;
		};

		if(ec.employee._id) { //Postavljamo watch samo ukoliko je edit, jer nema razloga da disablujemo revert kad je add, a watch, pogotovo sa trećim parametrom true je skup
			ec.disableRevert = true;
			$scope.$watch(function() {
				return ec.employee;
			}, function(newVal, oldVal) {
				if(!angular.equals(newVal, oldVal)) {
					ec.disableRevert = angular.equals(ec.employee, ec.employeeCopy);
				}
			}, true);
		}

		ec.newPlace = function() {
			placeModal.open().then(function(data) {
				ec.places.push(data);
				ec.employee.placeOfBirth = data.name;
			});
		};

		ec.revertChanges = function() {
			ec.employee = angular.copy(ec.employeeCopy);
		};

		ec.save = function() {
			ec.employee.$saveOrUpdate(success);
		};

		ec.remove = function() {
			deleteModal.open("employee").then(function(flag) {
				if(flag) {
					ec.employee.$delete(success);
				}
			});
		};

		function success() {
			$location.path('/employee');
		}
	}
})();