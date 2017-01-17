(function () {
    'use strict';

    angular
        .module('htecApp')
        .config(Config)

    /** @ngInject */
    Config.$inject = ['$stateProvider', '$urlRouterProvider']
    function Config($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/home');
        $stateProvider
            .state('main', {
                abstract: true,
                views: {
                    'navbar': {
                        templateUrl: 'app/templates/navbar.html'
                    }
                }
            })
            .state('main.home', {
                url: '/home',
                views: {
                    'content@': {
                        templateUrl: 'app/templates/home.html'
                    }
                }
            })
            .state('main.app', {
                url: '/app',
                views: {
                    'content@': {
                        templateUrl: 'app/templates/display.html',
                        controller: 'AppCtrl',
                        controllerAs: "ac"                                                
                    }
                }
            })
    }

} ());