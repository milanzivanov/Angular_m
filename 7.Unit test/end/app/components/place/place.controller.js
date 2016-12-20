(function() {
	"use strict";

	angular
		.module('company-registry.place')
		.controller('PlaceController', PlaceController);

	PlaceController.$inject = ['$scope', '$location', 'Employee', 'Company', 'deleteModal', 'noDeleteModal', '$q', 'place', 'title'];
	function PlaceController($scope, $location, Employee, Company, deleteModal, noDeleteModal, $q, place, title) {
		var pc = this;
			
		pc.place = place;
		pc.placeCopy = angular.copy(pc.place);
		pc.title = title;

		pc.canDelete = false;
		$q.all([Company.get({filter: {"headquarters": pc.place.name}}).$promise, Employee.get({filter: {"placeOfBirth": pc.place.name}}).$promise]).then(function(data) {
				if(data[0].count === 0 && data[1].count === 0) {
					pc.canDelete = true;
				} else {
					pc.canDelete = false;
				}
		});

		if(pc.place._id) { //Postavljamo watch samo ukoliko je edit, jer nema razloga da disablujemo revert kad je add, a watch, pogotovo sa trećim parametrom true je skup
			pc.disableRevert = true;
			$scope.$watch(function() {
				return pc.place;
			}, function(newVal, oldVal) {
				if(!angular.equals(newVal, oldVal)) {
					pc.disableRevert = angular.equals(pc.place, pc.placeCopy);
				}
			}, true);
		}

		pc.revertChanges = function() {
			pc.place = angular.copy(pc.placeCopy);
		};

		pc.save = function() {
			if(pc.place._id) {
				pc.place.$update(success);
			} else {
				pc.place.$save(success);
			}
		};

		pc.remove = function() {
			if(pc.canDelete) {
				deleteModal.open("place").then(function(flag) {
					if(flag) {
						pc.place.$delete(success);
					}
				});
			} else {
				noDeleteModal.open();
			}
		};

		function success() {
			$location.path('/place');
		}
	}
})();