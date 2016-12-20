describe("EmployeeController", function() {
	var employeeController, $scope, $httpBackend;
	var appUrl = "http://localhost:3000/api";

	var places = {
		results: [ {"postalCode":"21000", "name":"Novi Sad"},
{"postalCode":"11000", "name":"Beograd"},
{"postalCode":"24000", "name":"Subotica"} ],
		count: 3
	};

	beforeEach(module("company-registry"));

	beforeEach(inject(function($controller, $rootScope, $location, Employee, $q, _$httpBackend_) {
		$httpBackend = _$httpBackend_;
		$scope = $rootScope.$new();

		var employee = new Employee();
		employee._id = "1";
		employee.jmbg = "1";
		employee.name = "Boban";
		employee.surname = "Mikić";
		employee.placeOfBirth = "Novi Sad";

		employeeController = $controller("EmployeeController", {
			$scope: $scope,
			$location: $location,
			employee: employee,
			places: places,
			Employee: Employee,
			deleteModal: {
				open: function() {return $q.when(true);}
			},
			placeModal: {
				open: function() {return $q.when({"postalCode":"34000", "name":"Kragujevac"});}
			},
			title: "Edit employee"
		});
	}));

	it("should make a HTTP PUT request on employee/1", function() {
		$httpBackend.expectPUT(appUrl + "/employees/1").respond("OK");
		employeeController.save();
		$httpBackend.flush();
	});

	it("should make a HTTP DELETE request on employee/1", function() {
		$httpBackend.expectDELETE(appUrl + "/employees/1").respond("OK");
		employeeController.remove();
		$httpBackend.flush();
	});

	it("should expand the list of places when a new place is created", function() {
		expect(employeeController.places.length).toBe(3);
		employeeController.newPlace();
		$scope.$digest();
		expect(employeeController.places.length).toBe(4);
	});

	it("should initialize the controller properly", function() {
		expect(employeeController.places).toBeDefined();
		expect(employeeController.employee).toBeDefined();
		expect(employeeController.employeeCopy).toBeDefined();
		expect(employeeController.title).toBeDefined();
		expect(employeeController.datepicker.minDate).toBeDefined();
		expect(employeeController.datepicker.maxDate).toBeDefined();
		expect(employeeController.datepicker.format).toBeDefined();
		expect(employeeController.datepicker.opened).toBeDefined();
		expect(employeeController.uniqueField).toBeDefined();
		expect(employeeController.newPlace).toBeDefined();
		expect(employeeController.revertChanges).toBeDefined();
		expect(employeeController.save).toBeDefined();
		expect(employeeController.remove).toBeDefined();
	});
});