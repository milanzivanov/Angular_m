(function() {
	"use strict";

	angular
		.module('company-registry.place')
		.controller('PlaceListController', PlaceListController);

	PlaceListController.$inject = ['$scope', '$location', 'places', 'Place'];
	function PlaceListController($scope, $location, places, Place) {
		var plc = this;
		plc.places = places.results;

		plc.filter = {};

		plc.pagination = {
			page: 1,
			pageSize: 5,
			iterator: new Array(Math.ceil(places.count / 5)),
			changePage: function(page) {
				plc.pagination.page = page;
				getAll();
			}
		};

		$scope.$watch(function() {
			return plc.filter;
		}, function(newVal, oldVal) {
			if(!angular.equals(newVal, oldVal)) {
				getAll();
			}
		}, true);

		plc.tableChanged = function(sortParam) {
			if(plc.sort === sortParam) {
				plc.sortDirection = plc.sortDirection == 'asc' ? 'desc' : 'asc';
			} else {
				plc.sort = sortParam;
				plc.sortDirection = 'asc';
			}
			getAll();
		};

		plc.edit = function(id) {
			$location.path("/place/"+id);
		};

		function getAll() {
			Place.get({sort: plc.sort, sortDirection: plc.sortDirection, filter: plc.filter, page: plc.pagination.page, pageSize: plc.pagination.pageSize}).$promise.then(function(data) {
				plc.places = data.results;
				plc.pagination.iterator = new Array(Math.ceil(data.count / plc.pagination.pageSize));
			});
		}
	}
})();