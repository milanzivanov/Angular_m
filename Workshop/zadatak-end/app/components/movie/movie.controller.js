(function() {
	"use strict";

	angular
		.module('new-imdb.movie')
		.controller('MovieController', MovieController);

	MovieController.$inject = ['$location', 'movie', 'title', 'genres'];
	function MovieController($location, movie, title, genres) {
		var mc = this;
			
		mc.movie = movie;
		mc.genres = genres.data.results;
		mc.title = title;

		mc.save = function() {
			if(mc.movie._id) {
				mc.movie.$update(success);
			} else {
				mc.movie.$save(success);
			}
		};

		mc.remove = function() {
			mc.movie.$delete(success);
		};

		function success() {
			$location.path('/movie');
		}
	}
})();