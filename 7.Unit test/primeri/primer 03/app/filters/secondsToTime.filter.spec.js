describe("Filters", function() {
	//pre svakog testa učitaj app modul
	beforeEach(module('app'));
	describe("SecondsToTime filter", function() {
		it('should convert integer to time format', 
			inject(function($filter) { //koristimo inject da "ubrizgamo" zavisnost
				expect($filter("secondsToTime")(5)).toBe("00:00:05"); //$filter prihvata ime filtera kao parametar i vraća filtersku funkciju
				expect($filter("secondsToTime")(65)).toBe("00:01:05");
				expect($filter("secondsToTime")(3610)).toBe("01:00:10");
			}));
	});
});