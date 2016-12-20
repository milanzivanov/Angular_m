(function() {
	"use strict";
	
	angular
		.module('app')
		.controller('AppController', AppController);

	AppController.$inject = ['tmhDynamicLocale'];
	function AppController(tmhDynamicLocale) {
		var ac = this;
		ac.changeLocale = changeLocale;

		function changeLocale(locale) {
			//koristimo thmDynamicLocale servis i njegovu metodu set da postavimo lokalitet
			tmhDynamicLocale.set(locale);
		}
	}
})();