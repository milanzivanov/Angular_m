(function() {
  var MainController = function($scope, $location, $interval) {

    $scope.search = function(username) {
      if (countdownInterval) {
        $interval.cancel(countdownInterval);
        $scope.countdown = null;
      }
      $location.path("/user/"+username);      
    };

    var decrementCountdown = function() {
      $scope.countdown -= 1;
      if ($scope.countdown < 1) {
        $scope.search($scope.username);
      }
    };

    var countdownInterval = null;    
    var startCountdown = function() {
      countdownInterval = $interval(decrementCountdown, 1000, $scope.countdown);
    };
    
    $scope.username = "Angular";
    $scope.countdown = 30;
    startCountdown();
  };
  var app = angular.module("githubViewer");
  app.controller("MainController", MainController);

}());