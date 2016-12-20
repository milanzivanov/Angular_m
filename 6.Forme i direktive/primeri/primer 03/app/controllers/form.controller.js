(function() {
	'use strict';

	angular
		.module('app')
		.controller('FormController', FormController);

	function FormController() {
		var fc = this;
		fc.master = {};
		fc.update = update;
		fc.reset = reset;

		function update(user) {
			if(fc.stateForm.$valid) {
				fc.master = angular.copy(user);
				fc.stateForm.$setUntouched();
			} else {
				touchControlls();
			}
		}

		function reset() {
			fc.user = angular.copy(fc.master);
			fc.stateForm.$setUntouched();
		}

		function touchControlls() {
			//Prođi kroz sve propertie stateForm objekta
			angular.forEach(fc.stateForm, function(value, key) {
				//Pronađi propertie čiji naziv počinje sa "input"
				if(key.indexOf("input") === 0) {
					//"Dodirni" polje
					value.$setTouched();
				}
			});
			//Funkcija podrazumeva da će naziv svakog polja 
			//kog želimo da regulišemo početi sa "input"
		}
	}
})();