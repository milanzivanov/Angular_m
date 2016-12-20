(function() {
	'use strict';
	
	angular
		.module('app')
		.directive('sharedScope', sharedScope);

	function sharedScope() {
		var sharedScopeDirective = {
			templateUrl: 'app/directives/template.html',
			restrict: 'E'
		};
		return sharedScopeDirective;
	}
})();