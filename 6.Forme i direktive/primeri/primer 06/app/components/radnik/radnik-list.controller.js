(function() {
	'use strict';

	angular
		.module('radnik')
		.controller('RadnikController', RadnikController);

	RadnikController.$inject = ['radnikService', '$http', '$scope'];
	function RadnikController(radnikService, $http, $scope) {
		var rad = this;
		radnikService.get().$promise.then(function(data) {
			rad.radnici = data.results;
		});

		$scope.$watch('rad.pretraga', function(newVal, oldVal) {
			if(newVal !== oldVal) {
				radnikService.get({filter:{"surname":newVal}}).$promise
					.then(function(data) {
						rad.radnici = data.results;
					});
			}
		});
	}
})();