describe("Employee routes", function () {
    beforeEach(module('app'));

    it("should default to list employees route", inject(function ($rootScope, $location, $route, $httpBackend) {    //Unless we inject $route route transitions do not happen, even if we change location\
        $httpBackend.whenGET("app/components/employee/employee-list.html").respond("<div/>");
        $location.path("/undefinedPath");
        $rootScope.$digest();
        expect($location.path()).toBe("/");
        expect($route.current.templateUrl).toBe("app/components/employee/employee-list.html");
    }));
});