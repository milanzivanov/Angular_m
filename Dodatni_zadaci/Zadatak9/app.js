(function(){
	var app = angular.module("winesModule", ['ui.router']);
	
	app.config(function($stateProvider, $urlRouterProvider){
		$urlRouterProvider.otherwise('/main');

		$stateProvider
		.state("main", {			
			url: "/main",
			template: "<p>Ovde će se nalaziti navbar</p>"			
		})
		.state("wines", {		
			url: "/wines",	
			template: "<p>Ovde će biti prikazana tabela sa vinima</p>"			
		})
		.state("addWine", {		
			url: "/add",	
			template: "<p>Ovde će biti prikazana forma za dodavanje novog vina</p>"
		});

	});
})();