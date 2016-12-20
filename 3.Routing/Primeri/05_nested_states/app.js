(function(){
	var app = angular.module("nestedStatesModule", ['ui.router']);
	app.config(function($stateProvider, $urlRouterProvider){
		$urlRouterProvider.otherwise('/main');

		$stateProvider
		.state("main", {
			url: "/main",
			templateUrl: "main.html"
		})
		
		.state("main.state1", {
			url: "/state1",
			template: "<div>This is state 1</div>"
		})

		.state("main.state2", {
			url: "/state2",
			template: "<div>This is state 2</div>"
		});

	});
})();