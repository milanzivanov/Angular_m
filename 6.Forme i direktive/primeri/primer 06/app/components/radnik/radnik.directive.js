(function() {
	'use strict';
	
	angular
		.module('radnik')
		.directive('kurseviRadnik', kurseviRadnik);

	function kurseviRadnik() {
		var kurseviRadnik = {
			template: '<p>Jmbg: {{radnik.jmbg}}<br/>'+
					  'Ime:	{{radnik.name}} {{radnik.surname}}<br/>'+
        			  'Email: {{radnik.email}}</p>',
        	//templateUrl: 'app/components/radnik/radnik.tpl.html',
        	restrict: 'E'
		};
		return kurseviRadnik;
	}
})();