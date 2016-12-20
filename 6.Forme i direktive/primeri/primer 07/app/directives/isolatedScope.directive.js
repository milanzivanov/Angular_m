(function() {
	'use strict';
	
	angular
		.module('app')
		.directive('isolatedScope', isolatedScope);

	function isolatedScope() {
		var isolatedScopeDirective = {
			templateUrl: 'app/directives/template.html',
			restrict: 'E',
			scope: {}
		};
		return isolatedScopeDirective;
	}
})();