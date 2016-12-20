(function() {
	'use strict';

	angular
		.module('app')
		.controller('AppGreatGrandParentController', AppGreatGrandParentController)
		.controller('AppGrandParentController', AppGrandParentController)
		.controller('AppParentController', AppParentController)
		.controller('AppController', AppController)

		.controller('App2GreatGrandParentController', App2GreatGrandParentController)
		.controller('App2GrandParentController', App2GrandParentController)
		.controller('App2ParentController', App2ParentController)
		.controller('App2Controller', App2Controller);

	AppGreatGrandParentController.$inject = ['$scope'];
	function AppGreatGrandParentController($scope) {
		$scope.wine = {name:'Cabernet Sauvignon'};
	}

	AppGrandParentController.$inject = ['$scope'];
	function AppGrandParentController($scope) {
		$scope.wine = {name:'Chardonnay'};
	}

	AppParentController.$inject = ['$scope'];
	function AppParentController($scope) {
		$scope.wine = {name:'Sauvignon Blanc'};
	}

	AppController.$inject = ['$scope'];
	function AppController($scope) {
		$scope.wine = {name:'Merlot'};
	}


	function App2GreatGrandParentController() {
		this.wine = {name:'Cabernet Sauvignon'};
	}

	function App2GrandParentController() {
		this.wine = {name:'Chardonnay'};
	}

	function App2ParentController() {
		this.wine = {name:'Sauvignon Blanc'};
	}

	function App2Controller() {
		this.wine = {name:'Merlot'};
	}
})();