describe("EmployeeController", function() {
	var empCtrl, employeeService;

	//pre svakog testa učitavamo app modul
	beforeEach(module("app"));

	//pre svakog testa učitavamo mock employeeService servis sa datom implementacijom
	beforeEach(module(function($provide){
		$provide.factory('employeeService', function(){
			return {
				addEmployee: function() {return false;},
				removeEmployee: function(jmbg) {return false;},
				getEmployees: function() {return [{jmbg:'1'}, {jmbg:'2'}];}
			};
		});
	}));

	//pre svakog testa "ubrizgavamo" $controller i mock employeeService i definišemo kontroler
	beforeEach(inject(function($controller, _employeeService_) {
		employeeService = _employeeService_;
		empCtrl = $controller("EmployeeController", {
			employeeService: employeeService
		});
	}));

	//proveravamo da li je sve učitano kako treba
	//ako pogledamo kod employee.service.js datoteke videćemo da ima 5 radnika,
	//ali očekujemo 2 zato što ne koristimo taj servis već mock implementaciju definisanu gore
	it("should have some employees at start", function() {
		expect(empCtrl.employees).toBeDefined();
		expect(empCtrl.employees.length).toBe(2);
	});

	//spyOn postavlja špijuna na metodu nekog objekta
	//između spyOn i expect(...).toHaveBeenCalled() se mora pozvati metoda koja se špijunira
	it("should call employee service functions", function() {
		spyOn(employeeService, "addEmployee");

		empCtrl.saveEmployee();

		expect(employeeService.addEmployee).toHaveBeenCalled();
	});






	it("should call employee service functions with param", function() {
		spyOn(employeeService, "addEmployee");
		empCtrl.employee = {jmbg:'1', name:'boban'};
		empCtrl.saveEmployee();

		expect(employeeService.addEmployee).toHaveBeenCalledWith({jmbg:'1', name:'boban'});
	});

	it("should call employee service function and receive custom return value", function() {
		spyOn(employeeService, "addEmployee").and.returnValue(5);
		empCtrl.employee = {jmbg:'1', name:'boban'};

		expect(empCtrl.lastSaveSuccess).toBe(true);
		empCtrl.saveEmployee();

		expect(empCtrl.lastSaveSuccess).toBe(5);
	});
});