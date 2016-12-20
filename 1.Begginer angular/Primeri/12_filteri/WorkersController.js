(function() {
	
	var EmployeesController = function($scope) {	
		$scope.data = {
			"employees":[			
				{"firstName" : "Petar",
				"lastName" : "Petrovic",
				"salary" : "100"},

				{"firstName" : "Nikola",
				"lastName" : "Nikolic",
				"salary" : "300"},

				{"firstName" : "Marko",
				"lastName" : "Markovic",
				"salary" : "200"}
			]
		};
	};

	var app = angular.module("myFirstModule"); 
	app.controller("EmployeesController", EmployeesController);

})();