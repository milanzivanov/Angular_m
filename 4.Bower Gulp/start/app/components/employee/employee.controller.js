(function () {
	angular
		.module('app')
		.controller('EmployeeController', EmployeeController);

	EmployeeController.$inject = ["$stateParams", "$location", "Employee"];
	function EmployeeController($stateParams, $location, Employee) {
		var ec = this;
	if($stateParams.id === "add") {
		ec.employee = {};
		ec.title = "Add new employee";
	} else {
		Employee.get($stateParams.id).then(function(response) {
			ec.employee = response.data;
		});
		ec.title = "Edit employee with id " + $stateParams.id;
	}

	ec.save = function() {
		if(ec.employee._id) {
			Employee.update(ec.employee).then(success);
		} else {
			Employee.create(ec.employee).then(success);
		}
	};

	ec.remove = function() {
		Employee.remove(ec.employee._id).then(success);
	};

	function success() {
		$location.path('/employee');
	}
}
})();

