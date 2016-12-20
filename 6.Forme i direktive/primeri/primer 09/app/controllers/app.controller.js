(function() {
	'use strict';

	angular
		.module('app')
		.controller('MainAppController', MainAppController);

	function MainAppController() {
		var ma = this;
		ma.number = 50;
	}
})();