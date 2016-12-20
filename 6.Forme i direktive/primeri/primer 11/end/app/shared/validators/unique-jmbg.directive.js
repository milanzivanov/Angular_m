(function() {
	'use strict';

	angular
		.module('app')
		.directive('uniqueJmbg', uniqueJmbg);

	uniqueJmbg.$inject = ['$q', 'radnikService', '$timeout'];
	function uniqueJmbg($q, radnikService, $timeout) {
		var uniqueJmbgDirective = {
			restrict: 'A',
			//ngModel nam je potreban da koristimo infrastrukturu forme za prikaz greške, a busyIndicator ćemo koristiti da prikažemo loading gif dok se učitava
			require: ['ngModel','?^busyIndicator'],
			link: function(scope, elem, attrs, ctrls) {
				//uzimamo kontrolere
				var ngModelCtrl = ctrls[0];
				var busyIndicatorCtrl = ctrls[1];

				//pristupamo asinhronimValidatorima (koji se poslednji izvršavaju) i postavljamo uniqueJmbg funkciju koja je naša validaciona funkcija i prihvata vrednost iz modela
				ngModelCtrl.$asyncValidators.uniqueJmbg = function(value) {
					//ako je value prazan vraćamo true, ali pošto $asyncValidators očekuje promise koristimo $q servis koji će se odmah resolve-ovati kao true
	  				if(!value || value === '') return $q.when(true);
	  				//pravimo zahtev za radnika sa datim JMBGom
					return radnikService.get({"filter": {"jmbg": value}}).$promise
						.then(function(data) {
							return $timeout(function() {
								if(data.count > 0) {
									return $q.reject('exists');
								} else {
									return true;
								}
							}, 2000);
					 	});
				};

				//ukoliko postoji busyIndicator direktiva na nekom parent elementu posmatramo atribut $pending ngModel kontrolera
				//ako se izvršava provera (jeste $pending) onda prikaži indikator, u suprotnom ga sakri (ove metode su definisane u busyIndicator direktivi)
				if (busyIndicatorCtrl) {
	                scope.$watch(function () { return ngModelCtrl.$pending; }, function (newValue) {
	                    if (newValue) busyIndicatorCtrl.show();
	                    else busyIndicatorCtrl.hide();
	                });
	            }
			}
		};
		return uniqueJmbgDirective;
	}
})();