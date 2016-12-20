(function() {
	'use strict';

	angular
		.module('radnik')
		.controller('RadnikController', RadnikController);

	RadnikController.$inject = ['radnikService'];
	function RadnikController(radnikService) {
		var rad = this;
		radnikService.get({"pageSize":30}).$promise.then(function(data) {
			rad.radnici = data.results;
		});

		rad.radnik = new radnikService();
		rad.save = saveRadnik;
		rad.reset = resetRadnik;

		function saveRadnik() {
        	if (rad.radnikForm.$invalid) return;
        	rad.radnik.$save().then(function (radnik) {
        		rad.radnik = new radnikService();
        		rad.radnici.push(radnik);
        		rad.radnikForm.$setPristine();
        	});
        }

        function resetRadnik() {
        	rad.radnik = new radnikService();
        	rad.radnikForm.$setPristine();
        }
	}
})();