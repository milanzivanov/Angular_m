describe("Employee", function() {
	var Employee, $httpBackend;
	var appUrl = "https://api.mongolab.com/api/1/databases/kursevi-angular/collections";
	var appKey = "oNGu6nUpyK2wAxtLwTgFqq83F4cn1kZ4";

	beforeEach(module("employee"));

	beforeEach(inject(function(_Employee_, _$httpBackend_){
		Employee = _Employee_;
		$httpBackend = _$httpBackend_;
	}));

	it("should request all employees endpoints", function() {
		$httpBackend.expectGET(appUrl + "/radnici?apiKey="+appKey).respond([]);
		Employee.getEmployees();
		$httpBackend.flush();
	});

	it("should add employee", function() {
		$httpBackend.whenGET(appUrl + "/radnici?apiKey="+appKey).respond([{jmbg:'1'}, {jmbg:'2'}]);
		var employees = Employee.getEmployees();
		$httpBackend.flush();
		var numberOfEmployeesBefore = employees.length;

		$httpBackend.expectPUT(appUrl + "/radnici/123?apiKey="+appKey).respond("OK");
		Employee.saveEmployee(new Employee({jmbg:'123'}));
		$httpBackend.flush();

		expect(employees.length).toBe(numberOfEmployeesBefore + 1);
	});

	afterEach(function() {
    	$httpBackend.verifyNoOutstandingExpectation();
    	$httpBackend.verifyNoOutstandingRequest();
	});
});