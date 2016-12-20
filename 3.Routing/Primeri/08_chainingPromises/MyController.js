(function() {
	
	var MyController = function($scope, calcService, $q) {
	
		$scope.restart = function(){
			$scope.retVal1 = null;
			$scope.retVal2 = null;
			$scope.finalRes = null;
		}
		$scope.restart();

		// $scope.trigger = function(){
		// 	calcService.increaseByOne(1, function(retVal){
		// 		$scope.retVal1 = retVal;
		// 		 calcService.multiplyByTwo(1, function(retVal){
		// 		 	$scope.retVal2 = retVal; // imamo oba broja i možemo da ih saberemo
		// 			$scope.finalRes = $scope.retVal1 + $scope.retVal2;	
		// 		 });
		// 	})
		// }

		$scope.trigger = function(){
			calcService.increaseByOne(1) // Prvo prvi broj uvećamo za 1
				.then(function(retVal){ 
					$scope.retVal1 = retVal;
					return calcService.multiplyByTwo(1); // nakon što smo prvi broj uvećali za 1, množimo drugi sa 2
				})
				.then(function(retVal){
					$scope.retVal2 = retVal; // imamo oba broja i možemo da ih saberemo
					$scope.finalRes = $scope.retVal1 + $scope.retVal2;
				});					
		}

		$scope.triggerAll = function(){
			// paralelno pozivamo servis da uvećamo 1. broj za 1 a drugi pomnožimo sa 2
			var promise1 = calcService.increaseByOne(1); 
			var promise2 = calcService.multiplyByTwo(1);			
			$q.all([promise1, promise2]).then(function(data){
				// kada su oba rezultata spremna sabiramo ih
				$scope.retVal1 = data[0];
				$scope.retVal2 = data[1];
				$scope.finalRes = data[0] + data[1];
			});
		}

	};

	var app = angular.module("myFirstModule");
	app.controller("MyController", MyController);

}());