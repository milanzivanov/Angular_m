(function () {
    var app = angular.module('winesModule', ["ui.router"]);

    app.config(function($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/main");

        $stateProvider
            .state("main", {
                url: "/main",
                templateUrl: "main.html"
            })
            .state("main.wines", {
                url: "/wines",
                template: "Ovde se nalaze vina"
            })
            .state("main.addWine", {
                url: "/addWine",
                template: "Ovde se nalazi dodavanje vina"
            });

    });
})();