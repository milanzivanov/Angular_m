(function() {
	"use strict";

	angular
		.module('app')
		.config(configuration);

	configuration.$inject = ['tmhDynamicLocaleProvider'];
	function configuration(tmhDynamicLocaleProvider) {
		//postavljanje putanje gde da modul za dinamički lokalitet traži datoteke koje opisuju lokalitete
		tmhDynamicLocaleProvider.localeLocationPattern("bower_components/angular-i18n/angular-locale_{{locale}}.js");
	}
})();