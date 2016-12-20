(function() {
	'use strict';

	angular
		.module('app')
		.factory('randomNumberService', randomNumberService);

	function randomNumberService() {
		var service = {
			getNumber: getNumber
		};
		return service;

		function getNumber(number) {
			return Math.floor((Math.random() * number) + 1);
		}
	}
})();