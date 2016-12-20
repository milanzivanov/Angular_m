/*
b. Napraviti funkciju $scope.search u WinesController-u – sve što funkcija treba da radi jeste poziv getWines kako
bi se refresh-ovala tabela.
c. Funkciju getWines WinesController-a promeniti tako da se među parametrima koji se šalju sa get zahtevom nalazi
i filter prema imenu:
var filterParams = {};
filterParams['name'] = $scope.searchQuery; // šta god je korisnik uneo u input šalje se kao kriterijum pretrage po imenu
var getParams = {
filter : filterParams,
sort: $scope.sortCriteria,
sortDirection: $scope.sortDirection
};*/
(function () {
    var app = angular.module('winesModule', ["ui.router"]) ;

    app.config(function($stateProvider,$urlRouterProvider) {
        $urlRouterProvider.otherwise("/main/wines");

        $stateProvider
            .state("main",{
                url:"/main",
                templateUrl:"main.html",
                abstract: true
            })
            .state("main.wines",{
                url:"/wines",
                templateUrl: "wines.html",
                controller:"WinesController"
            })
            .state("main.addWine",{
                url:"/add",
                templateUrl: "wineDetails.html",
                controller: "WineDetailsController",
                //zadatak 15 ispod linije
                resolve: {
                    wine: function () {
                        return {};
                    }
                }
            })
            .state("main.updateWine",{
                url: "/wines/:id",
                templateUrl: "wineDetails",
                controller: "WineDetailsController",
                resolve:{
                    wine: function (WinesDataService, $stateParams) {
                        return WinesDataService.getWine($stateParams.id);
                    }
                }
            });
    });
})();