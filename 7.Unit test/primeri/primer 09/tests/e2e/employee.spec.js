describe("Start Page", function () {

    //pre svakog testa učitamo url koji je definisan kao baseUrl + parametar browser.get metode (u ovom slučaju samo baseUrl)
    beforeEach(function () {
        browser.get("");
    });

    //proveravamo da li je učitana startna stranica
    it("should load the start page.", function () {
        expect(browser.getTitle()).toBe("Testing e2e example");
        expect(element(by.id("employeeTable"))).toBeDefined(true);
    });

    it("should navigate to add employee and add an employee.", function () {
        //sačuvamo broj redova u tabeli koja ima ng-repeat employee in ec.employees
        var tableRowsBeforeAdd = element.all(by.repeater("employee in ec.employees")).count();
        
        //kliknemo na dugme sa btn klasom
        var button = element(by.className("btn"));
        button.click();

        //očekujemo da će se otići na URL koji ima "add" u sebi
        expect(browser.getCurrentUrl()).toContain('add');

        //lociramo redom input elemente i postavljamo vrednosti
        var jmbgInput = element(by.model("ec.employee.jmbg"));
        jmbgInput.sendKeys("1234561234560");
        var nameInput = element(by.model("ec.employee.name"));
        nameInput.sendKeys("Test name");
        var surnameInput = element(by.model("ec.employee.surname"));
        surnameInput.sendKeys("Test surname");

        //kliknemo na dugme
        var submit = element(by.buttonText("Save"));
        submit.click();

        //očekujemo da smo otišli sa stranice koja ima "add" u svom URLu
        expect(browser.getCurrentUrl()).not.toContain('add');

        //očekujemo da sada ima više redova u tabeli
        var tableRowsAfterAdd = element.all(by.repeater("employee in ec.employees")).count();
        expect(tableRowsAfterAdd).toBeGreaterThan(tableRowsBeforeAdd);

        //uzimamo poslednji red u tabeli
        var newRow = element.all(by.repeater("employee in ec.employees")).last();
        
        //očekujemo da je poslednji red zapravo slog koji smo uneli malo pre
        newRow.all(by.tagName("td")).then(function(cells) {
            expect(cells[0].getText()).toBe("1234561234560");
            expect(cells[1].getText()).toBe("Test name");
            expect(cells[2].getText()).toBe("Test surname");
        });
    });
});