(function() {
	'use strict';

	angular
		.module('app')
		.controller('FormController', FormController);

	function FormController() {
		var form = this;
		form.master = {};
		form.update = update;
		form.reset = reset;

		function update(user) {
			form.master = angular.copy(user);
		}

		function reset() {
			form.user = angular.copy(form.master);
		}
	}
})();