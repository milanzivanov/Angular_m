(function() {
	"use strict";
	
	angular
		.module('app')
		.controller('AppController', AppController);

	AppController.$inject = ['$translate', 'tmhDynamicLocale'];
	function AppController($translate, tmhDynamicLocale) {
		var ac = this;
		ac.changeLocale = changeLocale;
		ac.currentLocal = $translate.use();

		function changeLocale(locale) {
			//za promenu lokalizacije, odnosno prevoda teksta koristimo $translate servis
			$translate.use(locale);
			tmhDynamicLocale.set(locale);
			//kad se $translate.use() pozove bez parametra dobavi se trenutni lokalitet umesto da se postavi
			ac.currentLocal = $translate.use();
		}
	}
})();