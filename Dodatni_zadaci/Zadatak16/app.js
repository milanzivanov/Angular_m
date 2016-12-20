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
			templateUrl: "wineDetails.html",
			controller: "WineDetailsController",
			resolve: {
				wine: function(){
					return {};
				}
			}
		})
		.state("main.updateWine", {		
			url: "/wines/:id",	
			templateUrl: "wineDetails.html",
			controller: "WineDetailsController",
			resolve: {
				wine: function(WinesDataService, $stateParams){
					return WinesDataService.get($stateParams.id);	
				}
			}
		});

	});
})();