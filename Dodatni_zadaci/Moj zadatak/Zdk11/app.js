(function () {
    var app=angular.module('winesModule', ["ui.router"]);

    app.config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/main/wines");

        $stateProvider
            .state("main",{
                url:'/main',
                templateUrl: "main.html",
                abstract: true
            })
            .state("main.wines",{
                url: '/wines',
                template: "<p>Tabela sa vinima</p>"
            })
            .state("main.addWine",{
                url: '/add',
                template: "<p>Forma za dodavanje vina</p>"
            });
    });
})();