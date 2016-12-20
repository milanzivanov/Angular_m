(function() {
	"use strict";

	angular
		.module('company-registry.place.place-modal')
		.controller('PlaceModalController', PlaceModalController);

	PlaceModalController.$inject = ['$modalInstance', 'newPlace'];
	function PlaceModalController($modalInstance, newPlace) {
		var pac = this;
		pac.place = newPlace;
		pac.ok = ok;
		pac.cancel = cancel;

		function ok() {
			//Kad kliknemo ok, zatvaramo modal uspešno i prosleđujemo mesto koje smo napravili (izvršavanje se nastavlja na place-modal.service.js linija 31)
			$modalInstance.close(pac.place);
		}

		function cancel() {
			$modalInstance.dismiss();
		}
	}
})();