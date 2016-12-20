describe("EmployeeListController", function() {
	var employeeListController, $scope;

	var employees = {
		results: [ {"jmbg":"1", "name":"Boban", "surname":"Mikić", "placeOfBirth":"Novi Sad"},
{"jmbg":"2", "name":"Renata", "surname":"Ninić", "placeOfBirth":"Beograd"},
{"jmbg":"3", "name":"Kristijan", "surname":"Terzić", "placeOfBirth":"Subotica"},
{"jmbg":"4", "name":"Svetlana", "surname":"Terzić", "placeOfBirth":"Novi Sad"},
{"jmbg":"5", "name":"Tamara", "surname":"Simić", "placeOfBirth":"Subotica"},
{"jmbg":"6", "name":"Boris", "surname":"Dimić", "placeOfBirth":"Novi Sad"},
{"jmbg":"7", "name":"Aleksandar", "surname":"Bratić", "placeOfBirth":"Beograd"} ],
		count: 7
	};

	var places = {results:[], count:0};

	beforeEach(module("company-registry"));

	beforeEach(inject(function($controller, $rootScope, $location) {
		$scope = $rootScope.$new();
		employeeListController = $controller("EmployeeListController", {
			$scope: $scope,
			$location: $location,
			employees: employees,
			places: places
		});
	}));

	it("should have 2 pages of employees", function() {
		expect(employeeListController.pagination.iterator.length).toBe(2);
	});

	it("should initialize the controller properly", function() {
		expect(employeeListController.employees).toBeDefined();
		expect(employeeListController.places).toBeDefined();
		expect(employeeListController.pagination.page).toBeDefined();
		expect(employeeListController.pagination.pageSize).toBeDefined();
		expect(employeeListController.pagination.iterator).toBeDefined();
		expect(employeeListController.pagination.changePage).toBeDefined();
		expect(employeeListController.tableChanged).toBeDefined();
		expect(employeeListController.edit).toBeDefined();
	});
});