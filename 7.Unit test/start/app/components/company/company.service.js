(function() {
	"use strict";

	angular
		.module('company-registry.company')
		.factory('Company', Company);

	Company.$inject = ['$resource'];
	function Company($resource) {
		var collectionName = "companies";
		var companyService = $resource("http://localhost:3000/api/:collectionName/:id",
			{id: "@_id", collectionName: collectionName},
			{ update: { method: 'PUT' } });

		//Mogli smo da ekstendujemo companyService, pa da onda u kontroleru koristimo Company.$saveOrUpdate(cc.company, successCallback)
		//Kada extendujemo prototip onda kažemo da će ovu metodu imati svaka instanca companyService-a.
		angular.extend(companyService.prototype, {
			$saveOrUpdate: function(successCallback) {
				if(!this._id) {
					this.$save(successCallback);
				} else {
					this.$update(successCallback);
				}
			}
		});
		return companyService;
	}
})();