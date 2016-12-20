(function() {
	
	var app = angular.module("filterTestModule");
	
	app.filter('capitalize', function() {
		return function(input, char) {
 
   		if (isNaN(input)) { // ukoliko se ne radi o broju
      		var char = char - 1 || 0; // ukoliko je char undefined imaće vrednost 0
      		var letter = input.charAt(char).toUpperCase();
      		var out = [];

      		for (var i = 0; i < input.length; i++) {
        		if (i == char) {
	          		out.push(letter);
    	    	} else {
        	  		out.push(input[i]);
        		}        
      		}

      		return out.join('');

    	} else {
    		return input;
    	}
  	}

		
	});

}());