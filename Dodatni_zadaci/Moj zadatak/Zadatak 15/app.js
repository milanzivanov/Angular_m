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