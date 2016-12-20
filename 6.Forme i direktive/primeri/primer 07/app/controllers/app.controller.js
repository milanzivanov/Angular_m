(function() {
	'use strict';
	
	angular
		.module('app')
		.controller('MainAppController', MainAppController);

	function MainAppController() {
		var ma = this;
		ma.boban = {name: 'Boban', surname: 'Ristić', email: 'boban@gmail.com'};
		ma.leonora = {name: 'Leonora', surname: 'Teslić', email: 'leonora@gmail.com'};
		ma.aleksandar = {name: 'Aleksandar', surname: 'Jovanović', email: 'aleksandar@gmail.com'};
	}
})();