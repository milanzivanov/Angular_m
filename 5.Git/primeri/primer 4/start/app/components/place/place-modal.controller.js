(function() {
	"use strict";
	
	angular
		.module('place')
		.controller('PlaceAddController', PlaceAddController);

	PlaceAddController.$inject = ['$modalInstance'];
	function PlaceAddController($modalInstance) {
		var pac = this;
		pac.ok = ok;
		pac.cancel = cancel;
		pac.place = {};

		function ok() {
			$modalInstance.close(pac.place);
		}

		function cancel() {
			$modalInstance.dismiss();
		}
	}
})();