(function () {
    angular
        .module('app')
        .controller('EmployeeListController', EmployeeListController);

    EmployeeListController.$inject = ["$location", "Employee"];
    function EmployeeListController ($location, Employee) {
        var elc = this;
    elc.filter = {};

    //Objekat koji sadrži podatke vezane za straničenje
    elc.pagination = {
        page: 1,
        pageSize: 5,
        changePage: function(page) {
            elc.pagination.page = page;
            getAll();
        }
    };

    getAll();

    elc.tableChanged = function(sortParam) {
        if(elc.sort === sortParam) {
            elc.sortDirection = elc.sortDirection == 'asc' ? 'desc' : 'asc';
        } else {
            elc.sort = sortParam;
            elc.sortDirection = 'asc';
        }
        getAll();
    };

    elc.search = function() {
        getAll();
    };

    elc.edit = function(id) {
        $location.path("/employee/"+id);
    };

    function getAll() {
        Employee.getAll({sort: elc.sort, sortDirection: elc.sortDirection, filter: elc.filter, page: elc.pagination.page, pageSize: elc.pagination.pageSize}).then(function(response) {
            elc.employees = response.data.results;
            elc.pagination.iterator = new Array(Math.ceil(response.data.count / elc.pagination.pageSize));
        });
    }
}
})();
