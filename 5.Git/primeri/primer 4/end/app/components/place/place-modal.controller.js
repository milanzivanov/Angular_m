(function() {
	"use strict";
	
	angular
		.module('place')
		.controller('PlaceModalController', PlaceModalController);

	PlaceModalController.$inject = ['$modalInstance'];
	function PlaceModalController($modalInstance) {
		var pmc = this;
		pmc.ok = ok;
		pmc.cancel = cancel;
		pmc.place = {};

		//$modalInstance.close(pmc.place) će resolve-vovati promise sa vrednošću pmc.place
		function ok() {
			$modalInstance.close(pmc.place);
		}

		//$modalInstance.dismiss() će reject-ovati promise i neće se izvršiti kod u employee-detail.controller na liniji 61
		function cancel() {
			$modalInstance.dismiss();
		}
	}
})();