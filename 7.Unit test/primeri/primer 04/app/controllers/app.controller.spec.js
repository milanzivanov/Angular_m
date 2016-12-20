describe("Controllers", function() {
	//pre svakog testa učitavamo app modul
	beforeEach(module("app"));

	describe("AppController", function() {
		var appCtrl, $timeout;

		//pre svakog testa učitavamo $window mock servis sa datom implementacijom
		//pošto smo servis nazvali isto kao standardni $window servis sistem koristi ovu implementaciju
		beforeEach(module(function($provide){
			$provide.factory('$window', function(){
				return {
					alert: function() {}
				};
			});
		}));

		//pre svakog testa "ubrizgavamo" navedene zavisnosti
		//ng-mock pruža mock implementaciju $timeout servisa, dok smo za $window servis mi pružili iznad mock implementaciju
		//$controller servis definiše kontroler komponentu i prihvata ime i listu zavisnosti kontrolera kako je on definisan u app.controller.js
		//_$timeout_ je isto kao da smo napisali $timeout (sistem skida donju crtu sa početka i kraja), ali je ovako preglednije da se zna na šta se misli
		beforeEach(inject(function($controller, _$timeout_, $window) {
			$timeout = _$timeout_;
			appCtrl = $controller("AppController", {
				$timeout: $timeout,
				$window: $window
			});
		}));

		it("should sum after 0.5 second", function() {
			appCtrl.x=5;
			appCtrl.y=10;
			appCtrl.sum();
			expect(appCtrl.value).not.toEqual(15);
			//$timeout.flush simulira prolazak vremena
			$timeout.flush(250);
			expect(appCtrl.value).not.toEqual(15);
			$timeout.flush(250);
			expect(appCtrl.value).toEqual(15);
		});

		it("should multiply after 0.5 second", function() {
			appCtrl.x=5;
			appCtrl.y=10;
			appCtrl.multiply();
			expect(appCtrl.value).not.toEqual(50);
			$timeout.flush(250);
			expect(appCtrl.value).not.toEqual(50);
			$timeout.flush(250);
			expect(appCtrl.value).toEqual(50);
		});
	});
});