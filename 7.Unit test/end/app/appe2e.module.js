(function() {
    "use strict";

    angular
        .module('appe2e', ['company-registry', 'ngMockE2E'])
        .run(appe2ePrep);

    function appe2ePrep($httpBackend, $location, Employee) {
        var appUrl = "http://localhost:3000/api";

        $httpBackend.whenGET("app/components/employee/employee-list.html").passThrough();
        $httpBackend.whenGET("app/components/employee/employee-row.html").passThrough();
        $httpBackend.whenGET("app/components/employee/employee.html").passThrough();
        $httpBackend.whenGET("app/components/core/side-bar.html").passThrough();
        $httpBackend.whenGET("app/components/core/header.html").passThrough();

        var employee = new Employee();
        employee._id = "1";
        employee.jmbg = "1";
        employee.name = "Boban";
        employee.surname = "Mikić";
        employee.placeOfBirth = "Novi Sad";
        // All employees
        $httpBackend.whenGET(/\/api\/employees/).passThrough();
        $httpBackend.whenGET(/\/api\/places/).passThrough();
    }
})();