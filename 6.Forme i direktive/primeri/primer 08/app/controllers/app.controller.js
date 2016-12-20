(function() {
	'use strict';
	
	angular
		.module('app')
		.controller('MainAppController', MainAppController);

	function MainAppController() {
		var ma = this;

		ma.boban = {name: 'Boban', surname: 'Ristić', email: 'boban@gmail.com'};
		ma.leonora = {name: 'Leonora', surname: 'Srdić', email: 'leonora@gmail.com'};
		ma.aleksandar = {name: 'Aleksandar', surname: 'Perišić', email: 'boban@gmail.com'};

		ma.bobanTitle = "Boban the employee";
		ma.leonoraTitle = "Leonora the employee";
		ma.aleksandarTitle = "Aleksandar the employee";
	}
})();