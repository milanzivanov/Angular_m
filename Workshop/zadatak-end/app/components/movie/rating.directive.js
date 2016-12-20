(function() {
	'use strict';
	
	angular
		.module('new-imdb.movie')
		.directive('ratingDirective', ratingDirective);

	function ratingDirective() {
		var ratingDirective = {
			template: '<span><img src="assets/img/gold_star.png"> {{rating}}</span>',
			restrict: 'E',
			scope: {
				"rating": "="
			}
		};
		return ratingDirective;
	}
})();