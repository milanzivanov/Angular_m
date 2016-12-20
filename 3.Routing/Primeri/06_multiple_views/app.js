(function(){
	var app = angular.module("multipleViewsModule", ['ui.router']);
	app.config(function($stateProvider, $urlRouterProvider){
		$urlRouterProvider.otherwise('/main');

		$stateProvider
		.state("main", {
			url: "/main",
			views: {
				"firstView": {
					template: "<p>{{message}}</p>",
					controller: "Controller1"
				},
				"secondView": {
					template: "<p>{{message}}</p>",
					controller: "Controller2"
				}
			}
		})
		
	});
})();