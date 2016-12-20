(function() {
    'use strict';

    angular
        .module('app')
        .directive('busyIndicator', busyIndicator);

    busyIndicator.$inject = ['$compile'];
    function busyIndicator($compile) {
        return {
            scope: true,
            transclude: true,
            template: '<div><div ng-transclude=""></div><span ng-show="indicator.busy"><img src="assets/img/loader.gif"></span>',
            controller: function () {
                //funkcije koje ćemo koristiti u unique-jmbg direktivi
                var indicator = this;
                indicator.show = function () { indicator.busy = true; };
                indicator.hide = function () { indicator.busy = false; };
            },
            controllerAs: 'indicator',
            bindToController: true
        };
    }
})();