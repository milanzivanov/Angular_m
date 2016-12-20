describe("Start Page", function () {
    beforeEach(function () {
        browser.get("");
    });

    it("should load the start page.", function () {
        expect(browser.getTitle()).toBe("Testing e2e example with mock backend");
        expect(element(by.id("employeeTable"))).toBeDefined(true);
    });

    it("should navigate to add employee and add an employee.", function () {
        var tableRowsBeforeAdd = element.all(by.repeater("employee in ec.employees")).count();

        var button = element(by.className("btn"));
        button.click();

        expect(browser.getCurrentUrl()).toContain('add');

        var jmbgInput = element(by.model("ec.employee.jmbg"));
        jmbgInput.sendKeys("9988776655000");
        var nameInput = element(by.model("ec.employee.name"));
        nameInput.sendKeys("Test name");
        var surnameInput = element(by.model("ec.employee.surname"));
        surnameInput.sendKeys("Test surname");

        var submit = element(by.buttonText("Save"));
        submit.click();

        expect(browser.getCurrentUrl()).not.toContain('add');

        var tableRowsAfterAdd = element.all(by.repeater("employee in ec.employees")).count();
        expect(tableRowsAfterAdd).toBeGreaterThan(tableRowsBeforeAdd);

        var newRow = element.all(by.repeater("employee in ec.employees")).last();
        
        newRow.all(by.tagName("td")).then(function(cells) {
            expect(cells[0].getText()).toBe("9988776655000");
            expect(cells[1].getText()).toBe("Test name");
            expect(cells[2].getText()).toBe("Test surname");
        });
    });
});