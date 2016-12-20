(function() {
  
  var UserController = function($scope, $routeParams, github) {
  	
  
  	var onUserComplete = function(data) {
      $scope.user = data;
      github.getRepos($scope.user).then(onRepos, onError);
    };

    var onRepos = function(data) {
      $scope.repos = data;
    };
    var onError = function(reason) {
      $scope.error = "Could not fetch the data.";
      $scope.user = null;
    };

    $scope.username = $routeParams.username;
    github.getUser($scope.username).then(onUserComplete, onError);
    $scope.repoSortOrder="-stargazers_count";
  };

  var app = angular.module("githubViewer");
  app.controller("UserController", UserController);
}());
