(function() {

	var NavigationController = function($scope, $window, $location) {

		$scope.redirect = function(){
			$window.location.href = "LoremIpsum.html"; // redirekcija
		}

		$scope.alert = function(){
			$window.alert("Hello!");
		}
	};

	var app = angular.module("myFirstModule");
	app.controller("NavigationController", NavigationController);

})();