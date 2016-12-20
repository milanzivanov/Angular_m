(function() {
	
	// $log servis je injektovan u kontroler
	var LogController = function($scope, $log) {
		
		// ispis logova - pogledati konzolu		
		$scope.trigger = function(){
			$log.log("This is a log");
			$log.info("This is an info log");
			$log.warn("This is a warning log");
			$log.error("This is a error log");
			$log.debug("This is a debug log");
		}
	};

	var app = angular.module("myFirstModule");
	app.controller("LogController", LogController);

})();