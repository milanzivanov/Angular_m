(function() {
	'use strict';

	angular
		.module('employee')
		.config(function($routeProvider, $locationProvider) {
			$routeProvider.when('/', {
				templateUrl: 'app/components/employee/employee-list.html'
			}).when('/add', {
				templateUrl: 'app/components/employee/employee-detail.html'
			}).otherwise({
				redirectTo: '/'
			});
		});
})();