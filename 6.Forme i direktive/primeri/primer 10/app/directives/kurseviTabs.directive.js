(function() {
	'use strict';

	angular
		.module('app')
		.directive('kurseviTabs', kurseviTabs);
	
	function kurseviTabs() {
		var kurseviTabsDirective = {
    		restrict: 'E',
    		transclude: true,
    		templateUrl: 'app/directives/kursevi-tabs.html',
    		scope: {},
    		controller: function() {
    			var kt = this;
      			kt.panes = [];
      			//prosleđujemo tab i stavimo njegov atribut selected na true, a od svih ostalih na false
				kt.select = function(pane) {
	        		angular.forEach(kt.panes, function(pane) {
	          			pane.selected = false;
	        		});
	       		 	pane.selected = true;
	      		};

				kt.addPane = function(pane) {
					if (kt.panes.length === 0) {
						kt.select(pane);
					}
					kt.panes.push(pane);
				};
    		},
    		controllerAs: 'kt',
    		bindToController: true
  		};
  		return kurseviTabsDirective;
  	}
})();