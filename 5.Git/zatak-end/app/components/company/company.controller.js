(function() {
	"use strict";

	angular
		.module('company-registry.company')
		.controller('CompanyController', CompanyController);

	CompanyController.$inject = ['$location', 'placeModal', 'deleteModal', 'company', 'places', 'title'];
	function CompanyController($location, placeModal, deleteModal, company, places, title) {
		var cc = this;

		cc.places = places.results;
		cc.company = company;
		cc.companyCopy = angular.copy(cc.company);
		cc.title = title;
		
		cc.newPlace = function() {
			placeModal.open().then(function(data) {
				cc.places.push(data);
				cc.company.headquarters = data.name;
			});
		};

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
			deleteModal.open("company").then(function(flag) {
				if(flag) {
					cc.company.$delete(success);
				}
			});
		};

		function success() {
			$location.path('/company');
		}
	}
})();