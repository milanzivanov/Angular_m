(function () {
	angular
		.module('app', ['ui.router'])
		.config(function($stateProvider, $urlRouterProvider) {
			$urlRouterProvider.otherwise('/home');

	$stateProvider
		.state('companyList', {
			url: '/company',
			templateUrl: 'app/components/company/company-list.html'
		})
		.state('company', {
			url: '/company/:id',
			templateUrl: 'app/components/company/company.html'
		})
		.state('employeeList', {
			url: '/employee',
			templateUrl: 'app/components/employee/employee-list.html'
		})
		.state('employee', {
			url: '/employee/:id',
			templateUrl: 'app/components/employee/employee.html'
		})
		.state('home', {
			url: '/home',
			templateUrl: 'app/layout/home.html'
		})
		.state('about', {
			url: '/about',
			templateUrl: 'app/layout/about.html'
		});
});
})();
