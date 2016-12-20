(function() {
	'use strict';
	
	angular
		.module('app')
		.directive('isolatedScope', isolatedScope);

	function isolatedScope() {
		var isolatedScopeDirective = {
			templateUrl: 'app/directives/template.html',
			restrict: 'E',
			scope: {
				employee: '=',
				//ako se u HTMLu atribut koji ide uz direktivu zove employee dovoljno je staviti '='
				//u suprotnom potrebno je staviti '=<ime atributa u HTMLu>'
				title: '@inputTitle'
				//voditi računa da ako ovde piše inputTitle, u HTMLu mora stojati input-title, kao kod zadavanja naziva direktive
			}
		};
		return isolatedScopeDirective;
	}
})();