(function () {
    var app = angular.module('winesModule', ['ui.router']);
    app.config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/main");

        $stateProvider
            .state("main", {
                url: "/main",
                templateUrl: "main.html"
            })
            .state("main.wines" ,{
                url: "/wines",
                template: "<p>Ovde ce biti prikazana tabela sa vinima!</p>"
            })
            .state("main.addWine",{
                url: "/addWine",
                template: "<p>Ovde ce biti prikazana form za dodavanje vina!</p>"
            });
    });
})();

