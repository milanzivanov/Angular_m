Zadatak
=========
Pokrenite "http-server" u tekućem direktorijumu.

Otvoriti localhost:8080/ stranicu u web čitaču.

Razmotriti prikaz u web čitaču, zatim otvoriti index.html i nakon toga isolatedScope.directive.js u app/directives/ fascikli.

Napomena: Koristiti '=' kada prosleđujemo objekat čije promene treba da se oslikaju na scope komponente u kojoj se direktiva nalazi. Koristiti '@' kada treba da se prosledi neki tekst koji se neće modifikovati (npr. za prosleđivanje naziva, url-a ka slici, itd.). Koristi '&' kada treba proslediti funkciju da se izvršava u kontekstu direktive.

Napomena 2: Ukoliko je direktiva atribut ('A'), prosleđuju se podaci tako što se dodaju atributi u element u kom se direktiva nalazi. Na primer, za navedenu direktivu:
agular.module('app').directive('mojaDirektiva', function() {
	return {
		restrict: 'A',
		scope: {
			employee: '='
		}
	}
});
HTML izgleda ovako:
<div moja-direktiva employee='ma.boban'></div>