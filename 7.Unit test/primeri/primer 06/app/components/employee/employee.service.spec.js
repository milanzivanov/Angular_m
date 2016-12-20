ddescribe("Employee", function() {
	var Employee, $httpBackend;
	var appUrl = "http://localhost:3000/api";

	beforeEach(module("employee"));

	beforeEach(inject(function(_Employee_, _$httpBackend_){
		Employee = _Employee_;
		$httpBackend = _$httpBackend_;
	}));

	it("should request all employees endpoints", function() {
		//očekujemo da će se izvršiti 1 HTTP GET zahtev na dati URL
		$httpBackend.expectGET(appUrl + "/employees").respond({results:[],count:0});
		Employee.getEmployees();
		$httpBackend.flush();
	});


	it("should add employee", function() {
		//ako i kad se izvrši HTTP get zahtev na dati URL definišemo odgovor da bude [{_id:'1'}, {_id:'2'}]
		$httpBackend.whenGET(appUrl + "/employees").respond({
			results: [{_id:'1'}, {_id:'2'}],
			count: 2
		});
		var employees;
		Employee.getEmployees().then(function(emp) {
			employees = emp;
		}); //bitno je staviti whenGET iznad
		$httpBackend.flush();
		var numberOfEmployeesBefore = employees.length;

		//očekujemo da će se izvršiti HTTP post zatev na dati URL
		$httpBackend.expectPOST(appUrl + "/employees").respond("OK");
		Employee.saveEmployee(new Employee());
		$httpBackend.flush();

		//da bi shvatili zašto se promena desila potrebno je pogledati implementaciju saveEmployee metode u employee.service.js
		expect(employees.length).toBe(numberOfEmployeesBefore + 1);
	});

	//na kraju dodajemo ovaj blok da garantujemo da smo flushovali sve zahteve koje smo formirali,
	//kao i da ne postoje expect izrazi za HTTP zahteve koji nisu okinuti
	afterEach(function() {
		$httpBackend.verifyNoOutstandingRequest();
    	$httpBackend.verifyNoOutstandingExpectation();
	});
});