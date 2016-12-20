(function () {
    angular
        .module("restModule.core")
        .controller('CoreController', CoreController);

    CoreController.$inject  = ["$window","$timeout"];
    function CoreController ($window,$timeout) {
        var cc = this;

        cc.redirect = function () {
            //$window.alert("Clicking here will redirect you to google.com after 3 seconds!");
            $timeout(function () {
                $window.location.href = "https://www.google.com/";
                //$window.open($window.location.href);

            }, 3000);
        };


    }
})();