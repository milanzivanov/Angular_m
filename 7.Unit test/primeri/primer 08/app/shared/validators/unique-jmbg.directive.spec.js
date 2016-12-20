describe("Unique jmbg directive", function () {
    var $compile, $rootScope, $httpBackend, $scope;
    var appUrl = "http://localhost:3000/api";

    beforeEach(module('app'));

    //"ubrizgavamo" sve potrebne servise
    beforeEach(inject(function (_$compile_, _$rootScope_, _$httpBackend_) {
        //$compile koristimo za formiranje HTML fragmenta koji sadrži direktivu
        $compile = _$compile_;
        //$rootScope koristimo za formiranje novog $scope objekta ukoliko nam je on potreban
        $rootScope = _$rootScope_;
        //kako testiramo unique jmbg direktivu koja pravi zahtev na server da vidi da li postoji radnik sa datim jmbgom treba nam mock servis
        $httpBackend = _$httpBackend_;
        //formiramo nov $scope za našu direktivu
        $scope = $rootScope.$new();
    }));

    describe("unique jmbg", function () {
        var inputElement;
        //pre svakog testa ćemo formirati dati HTML fragment
        beforeEach(function () {
            inputElement = "<form name='testForm'><input type='text' name='jmbg' ng-model='jmbg' unique-jmbg/></form>";
        });

        //za početak testiramo da li sistem baca grešku ako definišemo HTML element sa unique-jmbg, a bez ng-model
        //potrebno je da imamo ng-model da bi pristupili kontroleru, kao što smo definisali u require atributu objekta direktive u unique-jmbg.directive.js
        it("should fail if ng-model not defined.", function () {
            expect(function() {
                $compile("<div unique-jmbg></div>")($scope);
            }).toThrow();
        });

        //kompajliramo template koji je ispravan nad $scope objektom za kontekst i očekujemo da sve prođe bez greške
        it("should load the directive without error", function () {
            expect(function() {
                $compile(inputElement)($scope);
            }).not.toThrow();
        });

        it("should make request when use input changes and model should be valid", function () {
            $httpBackend.whenGET(appUrl + '/employees?filter=%7B%22jmbg%22:%22987%22%7D').respond({results:[], count:0});
            $compile(inputElement)($scope);

            //kad promenimo vrednost jmbg polja znamo da se izvršava HTTP zahtev
            $scope.testForm.jmbg.$setViewValue("987");
            $httpBackend.flush();

            //kako je definisano da zahtev vraća count 0 očekujemo da će forma biti validna
            expect($scope.testForm.$valid).toBe(true);
        });

        it("should make request when use input changes and model should be invalid", function () {
            $httpBackend.expectGET(appUrl + "/employees?filter=%7B%22jmbg%22:%22987%22%7D").respond({results:[{}], count:1});
            $compile(inputElement)($scope);
            $scope.testForm.jmbg.$setViewValue("987");
            $httpBackend.flush();

            //kako vraćamo count 1 očekujemo da imamo greške
            expect($scope.testForm.$valid).toBe(false);
            expect($scope.testForm.jmbg.$valid).toBe(false);
            expect($scope.testForm.jmbg.$error.uniqueJmbg).toBe(true);
        });
    });

    describe("unique jmbg with busy indicator", function () {
        var inputElement;
        beforeEach(inject(function () {
            inputElement = "<form name='testForm'><div busy-indicator><input type='text' name='jmbg' ng-model='jmbg' unique-jmbg /></div></form>";
        }));

        //proveravamo da li se element za indikator nalazi u HTMLu, tj. da li je učitan
        it("should load busy indicator", function () {
            var e = $compile(inputElement)($scope);

            expect(e.html().indexOf("assets/img/loader.gif") > 0).toBe(true);
        });

        it("should show busy indicator when remote request is made and hide later", function () {
            var html = $compile(inputElement)($scope);
            var childScope = html.children().scope();

            $httpBackend.whenGET(appUrl + "/employees?filter=%7B%22jmbg%22:%22987%22%7D").respond({results:[{}], count:1});
            //pre nego što se unese vrednost u jmbg polje ne postoji busy indicator
            expect(childScope.indicator.busy).toBeUndefined();
            $scope.testForm.jmbg.$setViewValue("987");
            //kad se unese očekujemo da će se pojaviti
            expect(childScope.indicator.busy).toBe(true);

            $httpBackend.flush();

            //nakon što se zahtev izvrši očekujemo da će se ukloniti
            expect(childScope.indicator.busy).toBe(false);
        });
    });

    afterEach(function() {
        $httpBackend.verifyNoOutstandingRequest();
        $httpBackend.verifyNoOutstandingExpectation();
    });
});