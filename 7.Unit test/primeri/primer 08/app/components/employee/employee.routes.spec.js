ddescribe("Employee routes", function () {
    beforeEach(module('app'));

    //$route se mora ubrizgati, čak iako se ne koristi, inače se ne dešava promena putanje
    it("should default to list employees route", inject(function ($rootScope, $location, $route, $httpBackend) {
        $httpBackend.whenGET("app/components/employee/employee-list.html").respond("<div/>");
        $location.path("/undefinedPath");
        $rootScope.$digest();
        expect($location.path()).toBe("/");
        expect($route.current.templateUrl).toBe("app/components/employee/employee-list.html");
    }));
});