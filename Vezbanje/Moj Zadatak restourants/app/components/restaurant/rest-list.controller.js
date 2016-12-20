(function () {
    angular
        .module("restModule.restaurants")
        .controller('RestListController', RestListController);

    RestListController.$inject = ["$window", "RestService","$state"];
    function RestListController ($window,RestService,$state) {
        var rlc = this;

        rlc.sortCriteria = "";
        rlc.sortDirection = "";
        rlc.selectedItem = "name";
        rlc.maxRest = 5;
        rlc.activePage = 1;
        rlc.searchQuery = "";



        function onSuccessCallback (response) {
             rlc.restaurants = response.data.results;
             adjustPagination(response.data.count);
        }
        function onFailedCallback (reason) {
            $window.alert("Neuspesno ucitavanje podataka sa servera: " + reason.statusText);
        }
        var getRest = function () {
            var filterParams = {};
            filterParams[rlc.selectedItem] = rlc.searchQuery;

            var getParams = {
                filter: filterParams,
                sort: rlc.sortCriteria,
                sortDirection: rlc.sortDirection,
                page : rlc.activePage,
                pageSize : rlc.maxRest
            };

            RestService.getAll(getParams).then(onSuccessCallback,onFailedCallback);

        };
        getRest();

        rlc.sort = function (criteria){
            if (criteria === rlc.sortCriteria) {
                if (rlc.sortDirection === "asc") {
                    rlc.sortDirection = "desc";
                }else {
                    rlc.sortDirection = "asc";
                }
            }else {
                rlc.sortCriteria = criteria;
                rlc.sortDirection = "asc";
            }
            getRest();
        };
        rlc.search = function () {
            getRest();
        };

        function adjustPagination (noRest){
            rlc.noPages = Math.ceil(noRest/ rlc.maxRest);
            if(rlc.noPages === 0){
                rlc.noPages = 1;
            }
            rlc.paginationPagesArr = ["<<", "<"];
            for (var i = 1; i <= rlc.noPages; i++) {
                rlc.paginationPagesArr.push(i);
            }
            rlc.paginationPagesArr.push(">");
            rlc.paginationPagesArr.push (">>");
        }

        rlc.changePage = function (value){
            if (value === "<<") {
                rlc.activePage = 1;
            }else if (value === ">>") {
                rlc.activePage = rlc.noPages;
            }else if (value === "<") {
                if (rlc.activePage >1) {
                    rlc.activePage -= 1;
                }
            }else if (value === ">") {
                if (rlc.activePage < rlc.noPages) {
                    rlc.activePage += 1;
                }
            }else {
                rlc.activePage = value;
            }
            getRest();
        };


        rlc.remove = function (id) {
             RestService.deleteRest(id).then(onSuccDel, onFailDel);
        };

        function onSuccDel (response){
            var deletedRestId = response.data._id;
            for (var i = 0; i < rlc.restaurants.length; i++) {
                if (rlc.restaurants[i]._id === deletedRestId) {
                    rlc.restaurants.splice(i,1);
                    return;
                }
            }
        }

        function onFailDel(reason) {
            $window.alert("Neuspesno brisanje: " + reason.statusText);
        }


        rlc.update = function (id) {
            $state.go("main.updateRest", {restaurantId: id});
        };

    }
})();