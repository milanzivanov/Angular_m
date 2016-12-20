(function(){
	var app = angular.module("resolveExample", ['ui.router']);
	
	app.config(function($stateProvider, $urlRouterProvider){
		$urlRouterProvider.otherwise('/main');

		$stateProvider
		.state("main", {			
			url: "/main",
			template: "<p>Please select the wine</p>",
		})
		.state("wineDetails", {		
			url: "/main/:id",	
			templateUrl: "wineDetails.html",
			controller : function($scope, wine){
				$scope.wine = wine.data;
			},
			resolve: {
				wine: function(WinesDataService, $stateParams){
					return WinesDataService.get($stateParams.id);
				}
			}
		});

	});
})();