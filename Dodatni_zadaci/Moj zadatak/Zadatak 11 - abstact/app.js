(function () {
    var app = angular.module('winesModule', ['ui.router']);

    app.config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/main/wines");

        $stateProvider
            .state("main",{
                url: "/main",
                templateUrl: "main.html",
                abstract: true
            })
            .state("main.wines",{
                url: "/wines",
                template: "Ovo je tabela sa vinima!"
            })
            .state("main.addWine",{
                url: "/addWine",
                template: "Ovo je forma za dodatak vina!"
            });
    });
})();