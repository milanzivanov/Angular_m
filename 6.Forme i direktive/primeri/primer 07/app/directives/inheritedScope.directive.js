(function() {
	'use strict';
	
	angular
		.module('app')
		.directive('inheritedScope', inheritedScope);

	function inheritedScope() {
		var inheritedScopeDirective = {
			templateUrl: 'app/directives/template.html',
			restrict: 'E',
			scope: true
		};
		return inheritedScopeDirective;
	}
})();