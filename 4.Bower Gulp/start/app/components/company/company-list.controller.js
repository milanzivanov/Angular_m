(function () {
    angular
        .module('app')
        .controller('CompanyListController', CompanyListController);

    CompanyListController.$inject = ['$location','Company'];
    function CompanyListController($location, Company) {
        var clc = this;
    clc.filter = {};

    //Objekat koji sadrži podatke vezane za straničenje
    clc.pagination = {
        page: 1,
        pageSize: 5,
        changePage: function(page) {
            clc.pagination.page = page;
            getAll();
        }
    };

    getAll();

    clc.tableChanged = function(sortParam) {
        if(clc.sort === sortParam) {
            clc.sortDirection = clc.sortDirection == 'asc' ? 'desc' : 'asc';
        } else {
            clc.sort = sortParam;
            clc.sortDirection = 'asc';
        }
        getAll();
    };

    clc.search = function() {
        getAll();
    };

    clc.edit = function(id) {
        $location.path("/company/"+id);
    };

    function getAll() {
        Company.getAll({sort: clc.sort, sortDirection: clc.sortDirection, filter: clc.filter, page: clc.pagination.page, pageSize: clc.pagination.pageSize}).then(function(response) {
            clc.companies = response.data.results;
            clc.pagination.iterator = new Array(Math.ceil(response.data.count / clc.pagination.pageSize));
        });
    }
}
})();
