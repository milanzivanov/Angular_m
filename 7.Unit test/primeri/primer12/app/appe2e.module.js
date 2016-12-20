(function() {
    "use strict";
    
    angular
        .module('appe2e', ['app', 'ngMockE2E'])
        .run(appe2ePrep);

    function appe2ePrep($httpBackend, $location) {
        var dbEndpoint = "https://api.mongolab.com/api/1/databases/kursevi-angular/collections/radnici";
        var appKey = "oNGu6nUpyK2wAxtLwTgFqq83F4cn1kZ4";

        $httpBackend.whenGET("app/components/employee/employee-list.html").passThrough();
        $httpBackend.whenGET("app/components/employee/employee-detail.html").passThrough();
        var employees = [
            {jmbg:"1", name: "Mirko", surname: "Ivovkić"},
            {jmbg:"2", name: "Nikola", surname: "Tešić"},
            {jmbg:"3", name: "Robert", surname: "Stefanović"},
            {jmbg:"4", name: "Aleksa", surname: "Trifković"}
        ];
        // All employees
        $httpBackend.whenGET(dbEndpoint + "?apiKey=" + appKey).respond(employees);

        //Validator
        $httpBackend.whenGET(dbEndpoint + "/9988776655000?apiKey=" + appKey).respond(404);

        // adds a new employee
        $httpBackend.whenPUT(dbEndpoint + "/9988776655000?apiKey=" + appKey).respond(function (method, url, data) {
            return [200];
        });
    }
})();