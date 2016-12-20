(function() {
	"use strict";

	angular
		.module('company-registry.company')
		.controller('CompanyListController', CompanyListController);

	CompanyListController.$inject = ['$scope', '$location', 'companies', 'Company'];
	function CompanyListController($scope, $location, companies, Company) {
		var clc = this;
		clc.companies = companies.results;

		clc.filter = {};

		clc.pagination = {
			page: 1,
			pageSize: 5,
			iterator: new Array(Math.ceil(companies.count / 5)),
			changePage: function(page) {
				clc.pagination.page = page;
				getAll();
			}
		};

		clc.tableChanged = function(sortParam) {
			if(clc.sort === sortParam) {
				clc.sortDirection = clc.sortDirection == 'asc' ? 'desc' : 'asc';
			} else {
				clc.sort = sortParam;
				clc.sortDirection = 'asc';
			}
			getAll();
		};

		$scope.$watch(function() {
			return clc.filter;
		}, function(newVal, oldVal) {
			if(!angular.equals(newVal, oldVal)) {
				getAll();
			}
		}, true);

		clc.edit = function(id) {
			$location.path("/company/"+id);
		};

		function getAll() {
			Company.get({sort: clc.sort, sortDirection: clc.sortDirection, filter: clc.filter, page: clc.pagination.page, pageSize: clc.pagination.pageSize}).$promise.then(function(data) {
				clc.companies = data.results;
				clc.pagination.iterator = new Array(Math.ceil(data.count / clc.pagination.pageSize));
			});
		}
	}
})();