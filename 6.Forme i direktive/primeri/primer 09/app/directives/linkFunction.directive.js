(function() {
	'use strict';
	
	angular
		.module('app')
		.directive('counter', counter);

	counter.$inject = ['$interval'];
	function counter($interval) {
		var counterDirective = {
			restrict: 'E',
			link: function(scope, element, attrs) {
				//atributi number i interval su navedeni u HTMLu
				var start = attrs.number;
				var interval = attrs.interval;

				//radi demonstracije postavljeno je da se na mouseover događaj ove direktive cursor pretvori u pointer (ruka)
      			element.bind('mouseover', function() {
        			element.css('cursor', 'pointer');
      			});

      			var i, timeoutId;

      			//funkcija koju ćemo pozivati periodično da postavimo tekst elementa
			    function updateTime() {
			    	element.text(i++);
			    }

			    //ako se vrednost od number promeni postavljamo i (brojač) na tu vrednost i ažuriramo vreme
			    scope.$watch(attrs.number, function(value) {
			    	i = value;
			    	updateTime();
			    });

			    //direktiva treba da čisti za sobom, te gasimo interval kada se uništi direktiva
			    element.on('$destroy', function() {
			    	$interval.cancel(timeoutId);
			    });

			    // pokrećemo proces periodično ažuriranja brojača i čuvamo u timeoutId da bi mogli da isključimo u kodu iznad
			    timeoutId = $interval(function() {
			    	updateTime();
			    }, interval);
			}
		};
		return counterDirective;
	}
})();