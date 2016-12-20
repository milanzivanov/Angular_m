(function() {
    "use strict";
    
    angular
        .module('appe2e', ['app', 'ngMockE2E'])
        .run(appe2ePrep);

    function appe2ePrep($httpBackend, $location) {
        //kad aplikacija zatraži employee-list.html ili employee-detail.html propuštamo poziv (nepravimo mock)
        $httpBackend.whenGET("app/components/employee/employee-list.html").passThrough();
        $httpBackend.whenGET("app/components/employee/employee-detail.html").passThrough();
        var employees = {
            results: [
            {jmbg:"1", name: "Mirko", surname: "Ivovkić"},
            {jmbg:"2", name: "Nikola", surname: "Tešić"},
            {jmbg:"3", name: "Robert", surname: "Stefanović"},
            {jmbg:"4", name: "Aleksa", surname: "Trifković"}
            ],
            count: 4
        };
        //kad se napravi HTTP GET na dati url vraćamo listu zaposlenih koju smo definisali iznad
        $httpBackend.whenGET("http://localhost:3000/api/employees").respond(employees);

        //mock backend za validator
        $httpBackend.whenGET("http://localhost:3000/api/employees?filter=%7B%22jmbg%22:%229988776655000%22%7D").respond({results:[], count:0});

        //mock backend za čuvanje novog zaposlenog
        $httpBackend.whenPOST("http://localhost:3000/api/employees").respond(function (method, url, data) {
            return [200];
        });
    }
})();