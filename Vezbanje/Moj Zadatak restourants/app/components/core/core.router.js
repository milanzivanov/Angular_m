(function () {
    angular
        .module("restModule.core")
        .config(config);

    config.$inject =["$stateProvider", "$urlRouterProvider"];
    function config ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');

        $stateProvider
            .state("main",{
                abstract: true,
                views: {
                    "navbar": {
                        templateUrl: "./app/components/core/navbar.html"
                    }
                }
            })
            .state("main.home",{
                url: "/home",
                views: {
                    "content@": {
                        templateUrl: "./app/components/core/home.html",
                        controller: "CoreController",
                        controllerAs: "cc"
                    }
                }
            });
    }
})();