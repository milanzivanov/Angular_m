(function(){
	var app = angular.module("uiRouterExample", ['ui.router']);
	
	app.config(function($stateProvider, $urlRouterProvider){
		$urlRouterProvider.otherwise('/state1');

		$stateProvider
		.state("firstState", {			
			url: "/state1",
			template: "<h2>First page</h2>"
		})
		.state("secondState", {		
			url: "/state2",	
			templateUrl: "SecondPage.html"		
		});

	});
})();