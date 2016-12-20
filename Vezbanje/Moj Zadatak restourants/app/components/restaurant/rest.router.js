(function () {
    angular
        .module("restModule.restaurants")
        .config(config);

    config.$inject = ["$stateProvider"];
    function config ($stateProvider) {

        $stateProvider
            .state("main.restaurnats",{
                url: "/restaurants",
                views: {
                    "content@":{
                        templateUrl: "./app/components/restaurant/restaurantList.html",
                        controller: "RestListController",
                        controllerAs: "rlc",
                    }
                }
            })
            .state("main.addRest",{
                url: "/restaurants/add",
                views: {
                    "content@":{
                        templateUrl: "./app/components/restaurant/addRestaurant.html",
                        controller: "AddRestController",
                        controllerAs: "arc",
                        resolve: {
                            newRestaurant: function(){
                                return {};
                            }
                        }
                    }
                }
            })
            .state("main.updateRest",{
                url: "/restaurants/:restaurantId",
                views: {
                    "content@":{
                        templateUrl: "./app/components/restaurant/addRestaurant.html",
                        controller: "AddRestController",
                        controllerAs: "arc",
                        resolve: {
                            newRestaurant: function(RestService,$stateParams){
                                return RestService.get($stateParams.restaurantId);
                            }
                        }
                    }
                }
            });

    }
})();