Zadatak
=========
Pokrenite "http-server" u tekućem direktorijumu.

Otvoriti localhost:8080/ stranicu u web čitaču.

Ispitati ponašanje aplikacije.

Ugasiti server i pokrenuti testove komandom "karma start tests/karma.config.js".

Ispisati kod datoteke app.controller.spec.js i obratiti pažnju na red 7 (definisanje mock servisa), 17 (kreiranje kontrolera) i sam it blok.

Napomena: Kontroler je definisan putem controllerAs sintakse što znači da nam ne treba $scope.
Napomena 2: module funkcija ngMock modula prihvata string, objekat ili funkciju. U opštem slučaju nećemo koristiti objekat, već string ako želimo da učitamo sve komponente postojećeg modula, ili funkciju ukoliko želimo da napravimo mock servisa (u kom slučaju ćemo proslediti i $provide servis funkciji).
Napomena 3: Bitan je redosled pozivanja module funkcija, jer se za servis datog imena samo gleda poslednja navedena implementacija, što znači da ako prvo učitamo servis iz modula, pa onda kreiramo mock servis sa datim imenom gledaće se samo mock servis.
Napomena 4: inject funkcija se može pozvati nakon što su učitani/kreirani sve komponente putem module funkcije.