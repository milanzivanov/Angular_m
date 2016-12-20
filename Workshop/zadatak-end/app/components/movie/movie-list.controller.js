(function() {
	"use strict";

	angular
		.module('new-imdb.movie')
		.controller('MovieListController', MovieListController);

	MovieListController.$inject = ['$scope', '$location', 'movies', 'Movie'];
	function MovieListController($scope, $location, movies, Movie) {
		var mlc = this;

		mlc.movies = movies.results;

		mlc.sort = "rating";
		mlc.sortDirection = "desc";

		mlc.pagination = {
			page: 1,
			pageSize: 6,
			numberOfPages: Math.ceil(movies.count / 6),
			changePage: function(page) {
				mlc.pagination.page = page;
				getAll();
			}
		};

		$scope.$watch('mlc.sort', function(newVal, oldVal) {
			if(newVal !== oldVal) {
				mlc.sortDirection = 'asc';
				getAll();
			}
		});

		mlc.changeSortDirection = function() {
			mlc.sortDirection = mlc.sortDirection == 'asc' ? 'desc' : 'asc';
			getAll();
		};

		mlc.edit = function(id) {
			$location.path("/movie/"+id);
		};

		function getAll() {
			Movie.get({sort: mlc.sort, sortDirection: mlc.sortDirection, page: mlc.pagination.page, pageSize: mlc.pagination.pageSize}).$promise.then(function(data) {
				mlc.movies = data.results;
			});
		}
	}
})();