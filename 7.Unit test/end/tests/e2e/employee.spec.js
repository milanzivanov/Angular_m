describe("Employee Page", function () {
    var EmployeeDetailPage = function() {
        this.jmbg = element(by.model("ec.employee.jmbg"));
        this.name = element(by.model("ec.employee.name"));
        this.surname = element(by.model("ec.employee.surname"));
        this.email = element(by.model("ec.employee.email"));
        this.place = element(by.model("ec.employee.placeOfBirth"));
        this.submit = element(by.buttonText("Save"));
        this.revert = element(by.buttonText("Revert"));
    };

    var EmployeeListPage = function() {
        this.tableRows = element.all(by.repeater("employee in elc.employees"));
        this.add = element.all(by.className("btn")).last();
        this.pagination = element.all(by.repeater("page in elc.pagination.iterator"));
        this.search = {
            jmbg: element(by.model("elc.filter.jmbg")),
            name: element(by.model("elc.filter.name")),
            surname: element(by.model("elc.filter.surname")),
            placeOfBirth: element(by.model("elc.filter.placeOfBirth"))
        };
        this.sort = {
            jmbg: element(by.css('[ng-click="elc.tableChanged(\'jmbg\')"]')),
            name: element(by.css('[ng-click="elc.tableChanged(\'name\')"]')),
            surname: element(by.css('[ng-click="elc.tableChanged(\'surname\')"]')),
            placeOfBirth: element(by.css('[ng-click="elc.tableChanged(\'placeOfBirth\')"]'))
        }
    };

    beforeEach(function () {
        browser.get("#/employee");
    });

    it("should have 3 pages with 5 elements on the first page and 5 elements on the last page", function () {
        var listPage = new EmployeeListPage();
        expect(listPage.pagination.count()).toBe(3);
        expect(listPage.tableRows.count()).toBe(5);

        listPage.pagination.last().element(by.tagName("a")).click();
        expect(listPage.tableRows.count()).toBe(5);
    });

    it("should have the elements sorted by name in ascending and descending order", function () {
        var listPage = new EmployeeListPage();
        
        //kliknemo na link za sortiranje po imenu
        listPage.sort.name.click();
        var firstRow = listPage.tableRows.first();
        //uzimamo prvi red i pristupamo unutrašnjim td elementima
        firstRow.all(by.tagName("td")).then(function(cells) {
            expect(cells[1].getText()).toBe("Aleksandar");
        });

        listPage.pagination.last().element(by.tagName("a")).click();
        //odlazimo na drugu stranicu tabele i pristupamo poslednjem redu
        var lastRow = listPage.tableRows.last();
        lastRow.all(by.tagName("td")).then(function(cells) {
            expect(cells[1].getText()).toBe("Vasilije");
        });

        //vraćamo se na prvu stranu tabele
        listPage.pagination.first().element(by.tagName("a")).click();
        listPage.sort.name.click();
        //trebala bi Vasilije sada da bude prvi
        firstRow = listPage.tableRows.first();
        firstRow.all(by.tagName("td")).then(function(cells) {
            expect(cells[1].getText()).toBe("Vasilije");
        });

        listPage.pagination.last().element(by.tagName("a")).click();
        lastRow = listPage.tableRows.last();
        //dok je Aleksandar poslednji
        lastRow.all(by.tagName("td")).then(function(cells) {
            expect(cells[1].getText()).toBe("Aleksandar");
        });
    });

    it("should have the elements sorted by place of birth in ascending and descending order", function () {
        var listPage = new EmployeeListPage();
        
        listPage.sort.placeOfBirth.click();
        var firstRow = listPage.tableRows.first();
        firstRow.all(by.tagName("td")).then(function(cells) {
            expect(cells[4].getText()).toBe("Beograd");
        });

        listPage.pagination.last().element(by.tagName("a")).click();
        var lastRow = listPage.tableRows.last();
        lastRow.all(by.tagName("td")).then(function(cells) {
            expect(cells[4].getText()).toBe("Užice");
        });

        listPage.pagination.first().element(by.tagName("a")).click();
        listPage.sort.placeOfBirth.click();
        firstRow = listPage.tableRows.first();
        firstRow.all(by.tagName("td")).then(function(cells) {
            expect(cells[4].getText()).toBe("Užice");
        });

        listPage.pagination.last().element(by.tagName("a")).click();
        lastRow = listPage.tableRows.last();
        lastRow.all(by.tagName("td")).then(function(cells) {
            expect(cells[4].getText()).toBe("Beograd");
        });
    });

    it("should have the elements filtered by name", function () {
        var listPage = new EmployeeListPage();
        
        listPage.search.name.sendKeys("bo");
        var firstRow = listPage.tableRows.first();
        firstRow.all(by.tagName("td")).then(function(cells) {
            expect(cells[1].getText()).toBe("Boban");
        });

        var lastRow = listPage.tableRows.last();
        lastRow.all(by.tagName("td")).then(function(cells) {
            expect(cells[1].getText()).toBe("Boris");
        });
    });

    it("should have the elements filtered by place of birth", function () {
        var listPage = new EmployeeListPage();
        
        listPage.search.placeOfBirth.all(by.tagName("option")).each(function(option) {
            option.click();
            option.getText().then(function(text) {
                if(text !== "---") {
                    var firstRow = listPage.tableRows.first();
                    firstRow.all(by.tagName("td")).then(function(cells) {
                        expect(cells[4].getText()).toBe(text);
                    });

                    var lastRow = listPage.tableRows.last();
                    lastRow.all(by.tagName("td")).then(function(cells) {
                        expect(cells[4].getText()).toBe(text);
                    });
                }
            });
        });
    });

    it("should change number of pages based on search", function () {
        var listPage = new EmployeeListPage();
        expect(listPage.pagination.count()).toBe(3);
        listPage.search.name.sendKeys("bo");
        expect(listPage.pagination.count()).toBe(1);
        listPage.search.name.clear();
        expect(listPage.pagination.count()).toBe(3);
    });

    it("should load correct employee", function () {
        var listPage = new EmployeeListPage();
        var detailPage = new EmployeeDetailPage();
        
        listPage.tableRows.first().click();

        //očekujemo da će url imati employee/nekiBroj (1 ili više cifri)
        expect(browser.getCurrentUrl()).toMatch(/employee\/[0-9]+/);

        expect(detailPage.jmbg.getAttribute('value')).toEqual("0000000000000");
        expect(detailPage.name.getAttribute('value')).toEqual("Aleksandar");
        expect(detailPage.surname.getAttribute('value')).toEqual("Atanacković");
        expect(detailPage.place.getAttribute('value')).toContain("Novi Sad");

        expect(detailPage.revert.isEnabled()).toBe(false);
        detailPage.name.sendKeys("Mitar");
        expect(detailPage.revert.isEnabled()).toBe(true);
        detailPage.revert.click();
        expect(detailPage.revert.isEnabled()).toBe(false);
    });

    it("should have appropriate errors", function () {
        var listPage = new EmployeeListPage();
        var detailPage = new EmployeeDetailPage();
        
        listPage.add.click();

        detailPage.jmbg.sendKeys("1231231231231");
        detailPage.email.sendKeys("test@gmail.com");
        detailPage.name.sendKeys("Boban");
        detailPage.surname.sendKeys("Bobanić");
        expect(detailPage.submit.isEnabled()).toBe(true);

        detailPage.jmbg.clear();
        detailPage.email.clear();
        detailPage.name.clear();
        detailPage.surname.clear();

        detailPage.email.sendKeys("@gmail.com");
        detailPage.jmbg.sendKeys("123");
        expect(detailPage.submit.isEnabled()).toBe(false);
    });

});