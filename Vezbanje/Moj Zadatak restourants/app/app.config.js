(function() {
    angular
        .module('restModule')
        .config(configuration);

    configuration.$inject = ['tmhDynamicLocaleProvider'];
    function configuration(tmhDynamicLocaleProvider) {
        //postavljanje putanje gde da modul za dinamički lokalitet traži datoteke koje opisuju lokalitete
        tmhDynamicLocaleProvider.localeLocationPattern("./assets/js/angular-locale_{{locale}}.js");
    }
})();

/*
Promena u kontroleru stanja
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

Index.html

<button ng-click="ac.changeLocale('en')">English</button>
    <button ng-click="ac.changeLocale('sr-latn')">Serbian</button>
    <button ng-click="ac.changeLocale('de-de')">German</button><br/>
})();*/