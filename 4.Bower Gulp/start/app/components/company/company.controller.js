(function () {
	angular
		.module('app')
		.controller('CompanyController', CompanyController);

	CompanyController.$inject = ["$stateParams", "$location", "Company"];
	function CompanyController($stateParams, $location, Company) {
		var cc = this;
	if($stateParams.id === "add") {
		cc.company = {};
		cc.title = "Add new company";
	} else {
		Company.get($stateParams.id).then(function(response) {
			cc.company = response.data;
		});
		cc.title = "Edit company with id " + $stateParams.id;
	}

	cc.save = function() {
		if(cc.company._id) {
			Company.update(cc.company).then(success);
		} else {
			Company.create(cc.company).then(success);
		}
	};

	cc.remove = function() {
		Company.remove(cc.company._id).then(success);
	};

	function success() {
		$location.path('/company');
	}
}
})();

