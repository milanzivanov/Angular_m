(function(){

	var calcService = function($q, $timeout){

		var increaseByOne = function(value){
			var deffered = $q.defer();			
			$timeout(function(){
				deffered.resolve(value + 1);
			}, 2000);
			return deffered.promise;
		}

		var multiplyByTwo = function(value){
			var deffered = $q.defer();			
			$timeout(function(){				
				deffered.resolve(value * 2);
			}, 2000);
			return deffered.promise;
		}

		return{
			increaseByOne: increaseByOne,
			multiplyByTwo: multiplyByTwo
		};
	}

	var app = angular.module("myFirstModule");
	app.factory("calcService", calcService);
}());