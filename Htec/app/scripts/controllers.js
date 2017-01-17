(function () {
    'use strict';

    angular
        .module('htecApp')
        .controller('AppCtrl', AppCtrl);

    AppCtrl.$inject = ['$http', 'Factory'];
    function AppCtrl($http, Factory) {
        var ac = this;
        ac.employees = {};
        
        ac.currentView = 'app/templates/grid.html';
        ac.changeView = function (template) {
            ac.currentView = template;
        }
        ac.search = function (item) {
            if (ac.searchText == undefined) {
                return true;
            } else {
                if(item.name.toLowerCase().indexOf(ac.searchText.toLowerCase()) !== -1 || item.description.toLowerCase().indexOf(ac.searchText.toLowerCase()) !== -1){
                    return true;
                }
            }
            return false;
        }   

        activate();

        ////////////////

        function activate() {
            Factory.getAll().then(function (response) {
                ac.employees = response.data.employees;
            });
        }
        // ac.search = function (item) {
        //     return (angular.lowercase(item.name).indexOf(angular.lowercase(ac.searchText) || '') !== -1 ||
        //         angular.lowercase(item.description).indexOf(angular.lowercase(ac.searchText) || '') !== -1);
        // };
    }
})();