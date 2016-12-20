(function() {
	"use strict";

	angular
		.module('company-registry.place')
		.controller('PlaceController', PlaceController);

	PlaceController.$inject = ['$location', 'place', 'title'];
	function PlaceController($location, place, title) {
		var pc = this;
			
		pc.place = place;
		pc.placeCopy = angular.copy(pc.place);
		pc.title = title;

		//Koristimo angular.copy kako bi napravili nov objekat sa svim istim podacima umesto da promenimo samo referencu
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
			pc.place.$delete(success);
		};

		function success() {
			$location.path('/place');
		}
	}
})();