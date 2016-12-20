(function() {
	"use strict";

	angular
		.module('app')
		.config(configuration);

	configuration.$inject = ['$translateProvider', 'tmhDynamicLocaleProvider'];
	function configuration($translateProvider, tmhDynamicLocaleProvider) {
		tmhDynamicLocaleProvider.localeLocationPattern("bower_components/angular-i18n/angular-locale_{{locale}}.js");
		//postavljamo podrazumevani lokalitet za datum, valutu itd.
		tmhDynamicLocaleProvider.defaultLocale('sr-latn');

		var deTranslations = {
			//Kad se bude pojavio MAIN.TITLE ključ, ako je lokalitet de-de ispis će biti Lokalisierung Beispiel
			"MAIN": {
				"TITLE": "Lokalisierung Beispiel",
				"COUNT": "Zählen",
				"CURRENCY": "Währung",
				"DATE":"Datum",
				"SELECTED":"ausgewählte Sprache"
			}
		};
		var srTranslations = {
			//Kad se bude pojavio MAIN.TITLE ključ, ako je lokalitet de-de ispis će biti Primer lokalizacije
			"MAIN": {
				"TITLE": "Primer lokalizacije",
				"COUNT": "Brojač",
				"CURRENCY": "Valuta",
				"DATE":"Datum",
				"SELECTED":"Izabran jezik"
			}
		};
		var enTranslations = {
			"MAIN": {
				"TITLE": "Localization example",
				"COUNT": "Count",
				"CURRENCY": "Currency",
				"DATE":"Date",
				"SELECTED":"Selected language"
			}
		};
		//postavljamo prevode ključeva za de-de lokalitet da budu vrednosti navedene u deTranslations
		$translateProvider.translations('de-de', deTranslations);
		$translateProvider.translations('sr-latn', srTranslations);
		$translateProvider.translations('en', enTranslations);
		//postavljamo podrazumevani lokalitet za prevode
		$translateProvider.preferredLanguage('sr-latn');
	}
})();