(function() {
	'use strict';

	angular
		.module('app')
		.controller('FormController', FormController);

	function FormController() {
		var form = this;
		form.master = {};
		form.update = update;
		form.reset = reset;

		function update(user) {
			if(form.stateForm.$valid) {
				form.master = angular.copy(user);
				form.stateForm.$setUntouched();
			} else {
				touchControlls();
			}
		}

		function reset() {
			form.user = angular.copy(form.master);
			fc.stateForm.$setUntouched();
		}

		function touchControlls() {
			//Prođi kroz sve propertie stateForm objekta
			angular.forEach(form.stateForm, function(value, key) {
				//Pronađi propertie čiji naziv počinje sa "input"
				if(key.indexOf("input") === 0) {
					//"Dodirni" polje
					value.$setTouched();
				}
			});
			//Funkcija podrazumeva da će naziv svakog polja 
			//koje želimo da regulišemo početi sa "input"
		}
	}
})();