describe("Employee Page", function () {
    var EmployeeAddPage = function() {
        this.jmbg = element(by.model("ec.employee.jmbg"));
        this.name = element(by.model("ec.employee.name"));
        this.surname = element(by.model("ec.employee.surname"));
        this.submit = element(by.buttonText("Save"));
    };

    var EmployeeListPage = function() {
        this.tableRows = element.all(by.repeater("employee in ec.employees"));
        this.add = element(by.className("btn"));
    };

    beforeEach(function () {
        browser.get("");
    });

    it("should navigate to add employee and add an employee.", function () {
        var listPage = new EmployeeListPage();
        var addPage = new EmployeeAddPage();

        var tableRowsBeforeAdd = listPage.tableRows.count();

        var button = listPage.add;
        button.click();

        expect(browser.getCurrentUrl()).toContain('add');

        var jmbgInput = addPage.jmbg;
        jmbgInput.sendKeys("9988776655000");
        var nameInput = addPage.name;
        nameInput.sendKeys("Test name");
        var surnameInput = addPage.surname;
        surnameInput.sendKeys("Test surname");

        var submit = addPage.submit;
        submit.click();

        expect(browser.getCurrentUrl()).not.toContain('add');

        var tableRowsAfterAdd = listPage.tableRows.count();
        expect(tableRowsAfterAdd).toBeGreaterThan(tableRowsBeforeAdd);

        var newRow = listPage.tableRows.last();
        
        newRow.all(by.tagName("td")).then(function(cells) {
            expect(cells[0].getText()).toBe("9988776655000");
            expect(cells[1].getText()).toBe("Test name");
            expect(cells[2].getText()).toBe("Test surname");
        });
    });
});