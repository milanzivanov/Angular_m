(function () {
    angular
        .module("restModule.restaurants")
        .controller('AddRestController', AddRestController);

    AddRestController.$inject = ["RestService","$state","$window", "newRestaurant","$log"];
    function AddRestController (RestService,$state,$window, newRestaurant,$log) {
        var arc = this;

        arc.newRestaurant = newRestaurant.data;

        arc.submit = function () {
            if (arc.newRestaurant._id) {
                RestService.updateRest(arc.newRestaurant).then(onSuccess,onFail);
                $log.warn("Restaurant updated!");
            }else {
                RestService.addRest(arc.newRestaurant).then(onSuccess, onFail);
                $log.info("New restaurant added!");
            }

        };


        function onSuccess () {
            $state.go("main.home");
            $log.debug("Success");
        }
        function onFail (reason) {
            $window.alert("Neuspesno dodavanje: " + reason.statusText);
            $log.error("Problem detected!");
        }
    }
})();