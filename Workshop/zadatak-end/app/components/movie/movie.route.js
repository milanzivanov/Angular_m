(function() {
	angular
		.module('new-imdb.movie')
		.config(config);

	config.$inject = ['$stateProvider'];
	function config($stateProvider) {
		$stateProvider
			.state('main.movieList', {
				url: '/movie',
				views: {
					'content@': {
						templateUrl: 'app/components/movie/movie-list.html',
						controller: 'MovieListController',
						controllerAs: 'mlc',
						resolve: {
							movies: getMovies
						}
					}
				}
			})
			.state('main.movieAdd', {
				url: '/movie/add',
				views: {
					'content@': {
						templateUrl: 'app/components/movie/movie.html',
						controller: 'MovieController',
						controllerAs: 'mc',
						resolve: {
							movie: newMovie,
							title: newTitle,
							genres: getGenres
						}
					}
				}
			})
			.state('main.movieEdit', {
				url: '/movie/:id',
				views: {
					'content@': {
						templateUrl: 'app/components/movie/movie.html',
						controller: 'MovieController',
						controllerAs: 'mc',
						resolve: {
							movie: retrieveMovie,
							title: editTitle,
							genres: getGenres
						}
					}
				}
			});

		getMovies.$inject = ['Movie'];
		function getMovies(Movie) {
			return Movie.get({"pageSize":6, "sort":"rating", "sortDirection":"desc"}).$promise;
		}

		newMovie.$inject = ['Movie'];
		function newMovie(Movie) {
			return new Movie();
		}

		function newTitle() {
			return 'Add movie';
		}

		retrieveMovie.$inject =['$stateParams', 'Movie'];
		function retrieveMovie($stateParams, Movie) {
			return Movie.get({id: $stateParams.id}).$promise;
		}

		editTitle.$inject = ['$stateParams'];
		function editTitle($stateParams) {
			return "Edit movie with id " + $stateParams.id;
		}

		getGenres.$inject = ['Genre'];
		function getGenres(Genre) {
			return Genre.getAll();
		}
	}
})();