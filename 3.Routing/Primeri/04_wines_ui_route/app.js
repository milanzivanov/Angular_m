(function(){
	var app = angular.module("wineModule", ['ui.router']);
	app.config(function($stateProvider, $urlRouterProvider){
		$urlRouterProvider.otherwise('/main');

		$stateProvider
		.state("main", {
			url: "/main",
			templateUrl: "WineTable.html",
			controller: "WinesController"
		})
		.state("addWine", {
			url: "/wine/add",
			templateUrl: "AddWine.html",
			controller: "AddWineController",
			resolve: {
				newWine : function(winesService){
					return {}; // koristimo isti kontroler za add i za update. Kod update (ispod) vino ce biti dobavljeno sa servera
					// povratna vrednost ovog resolva je prazan objekat - u kontroleru ce ovaj objekat biti prazan i onda znamo da je add a ne update
				}
			}
		})
		.state("editWine", { //Pravilo “/wine/add” mora biti definisano pre pravila “/wine/:wineId” kako se “add” ne bi shvatio kao parametar wineId
			url: "/wine/:wineId",
			templateUrl: "AddWine.html",
			controller: "AddWineController",
			resolve : {
				newWine : function(winesService, $stateParams){
					// vracamo promise - nece doci do redirekcije dok se ne vrati vino sa servera
					return winesService.get($stateParams.wineId);
				}
			}
		});

	});
})();