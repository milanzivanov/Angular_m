(function () {
	angular
		.module("wineModule")
		.config(config);

	function config ($stateProvider, $urlRouterProvider){
		$urlRouterProvider.otherwise("/home/wines");

		$stateProvider
			.state("home",{
				url: "/home",
				templateUrl: "/app/core/header.html",
				abstract: true
			})
			.state("home.wines",{
				url: "/wines",
				templateUrl: "/app/wines/winesTable.html",
				controller: "WinesController"
			})
			.state("home.addWine",{
				url: "/add",
				templateUrl:"/app/wines/addWine.html",
				controller: "AddWineController",
				resolve: {
					wine: function() {
						return {};
					}
				}
			})
			.state("home.updateWine",{
				url: "/wines/:id",
				templateUrl: "/app/wines/addWine.html",
				controller: 'AddWineController',
				resolve: {
					wine: function (WineDataService,$stateParams) {
						return WineDataService.get($stateParams.id); 
					}
				}
			});
	}	  
})();