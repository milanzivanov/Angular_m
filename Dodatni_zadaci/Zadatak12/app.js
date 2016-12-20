(function(){
	var app = angular.module("winesModule", ['ui.router']);
	
	app.config(function($stateProvider, $urlRouterProvider){
		$urlRouterProvider.otherwise('/main/wines');

		$stateProvider
		.state("main", {			
			url: "/main",
			templateUrl: "main.html",
			abstract: true			
		})
		.state("main.wines", {		
			url: "/wines",	
			templateUrl: "wines.html",
			controller: "WinesController"
		})
		.state("main.addWine", {		
			url: "/add",	
			template: "<p>Ovde će biti prikazana forma za dodavanje novog vina</p>"
		});

	});
})();