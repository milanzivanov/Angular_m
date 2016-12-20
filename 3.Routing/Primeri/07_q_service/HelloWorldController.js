(function() {
	
	var HelloWorldController = function($scope, $timeout, $q) {
		
		function asyncGreet(name) {
			var deffered = $q.defer();			
  			$timeout(function(){
  				deffered.notify('About to greet ' + name + '.');
  				//if (okToGreet(name)) {
  				if(Math.random() > 0.5){
        			deffered.resolve('Hello, ' + name + '!');
      			} else {
        			deffered.reject('Greeting ' + name + ' is not allowed.');
      			}
  			}, 3000);
  			return deffered.promise;
  		}


  		var onSuccess = function(data){
  			alert(data);
  		}
  		var onFailure = function(reason){
  			alert("Failed, " + reason);
  		}
  		var onNotify = function(update){
  			alert("Notified: " + update);
  		}

  		asyncGreet('Robin Hood').then(onSuccess, onFailure, onNotify);
  		


	}

	var app = angular.module("myFirstModule"); // Preuzimamo referencu na modul koji je ranije kreiran (u app.js)
	app.controller("HelloWorldController", HelloWorldController); // Registrujemo kontroler u preuzetom modulu

}());