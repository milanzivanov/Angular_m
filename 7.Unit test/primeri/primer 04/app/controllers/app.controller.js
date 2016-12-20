(function() {
	'use strict';

	angular
		.module('app')
		.controller('AppController', AppController);

	AppController.$inject = ['$timeout', '$window'];
	function AppController($timeout, $window) {
		var ac = this;
		ac.sum = sum;
		ac.multiply = multiply;
		
		function sum() {
			$timeout(function() {
				ac.value = ac.x+ac.y;
				$window.alert('Rezultat je ' + ac.value);
			}, 500);
		}

		function multiply() {
			$timeout(function() {
				ac.value = ac.x*ac.y;
				$window.alert('Rezultat je ' + ac.value);
			}, 500);
		}
	}
})();