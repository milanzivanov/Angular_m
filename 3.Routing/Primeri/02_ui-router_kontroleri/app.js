(function(){
	var app = angular.module("uiRouterExample", ['ui.router']);
	
	app.config(function($stateProvider, $urlRouterProvider){
		$urlRouterProvider.otherwise('/state1');

		$stateProvider
		.state("firstState", {			
			url: "/state1",
			template: "<h2>{{title}}</h2>",
			controller: function($scope){
				$scope.title = "First Page";
			}
		})
		.state("secondState", {		
			url: "/state2",	
			templateUrl: "SecondPage.html",
			controller : 'SecondPageController'		
		});

	});
})();