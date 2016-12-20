(function() {
	'use strict';
	
	angular
		.module('app')
		.directive('uniqueJmbg', uniqueJmbg);

	uniqueJmbg.$inject = ['$q', 'Employee'];
	function uniqueJmbg($q, Employee, $timeout) {
		var uniqueJmbgDirective = {
			restrict: 'A',
			require: ['ngModel','?^busyIndicator'],
			link: function(scope, elem, attrs, ctrls) {
				var ngModelCtrl = ctrls[0];
				var busyIndicatorCtrl = ctrls[1];

				ngModelCtrl.$asyncValidators.uniqueJmbg = function(value) {
	  				if(!value || value === '') return $q.when(true);
					return Employee.get({"filter": {"jmbg": value}}).$promise
						.then(function(data) {
							if(data.count > 0) {
								return $q.reject('exists');
							} else {
								return true;
							}
					 	});
				};

				if (busyIndicatorCtrl) {
	                scope.$watch(function () { return ngModelCtrl.$pending; }, function (newValue) {
	                    if (newValue) busyIndicatorCtrl.show();
	                    else busyIndicatorCtrl.hide();
	                });
            	}
			}
		};
		return uniqueJmbgDirective;
	}
})();