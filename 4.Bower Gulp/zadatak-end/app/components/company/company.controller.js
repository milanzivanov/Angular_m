(function() {
	"use strict";

	angular
		.module('company-registry.company')
		.controller('CompanyController', CompanyController);

	CompanyController.$inject = ['$location', 'company', 'places', 'title'];
	function CompanyController($location, company, places, title) {
		var cc = this;

		cc.places = places.results;
		cc.company = company;
		cc.companyCopy = angular.copy(cc.company);
		cc.title = title;
		//Koristimo angular.copy kako bi napravili nov objekat sa svim istim podacima umesto da promenimo samo referencu
		cc.revertChanges = function() {
			cc.company = angular.copy(cc.companyCopy);
		};

		cc.save = function() {
			if(cc.company._id) {
				cc.company.$update(success);
			} else {
				cc.company.$save(success);
			}
		};

		cc.remove = function() {
			cc.company.$delete(success);
		};

		function success() {
			$location.path('/company');
		}
	}
})();