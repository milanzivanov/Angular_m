Zadatak
=========
Pokrenite "http-server" u tekućem direktorijumu.

Otvoriti localhost:8080/ stranicu u web čitaču.

Ispitati ponašanje aplikacije.

Ugasiti server i pokrenuti testove komandom "karma start tests/karma.config.js".

Ispisati kod datoteke employee.service.spec.js i obratiti pažnju na $httpBackend izraze u it blokovima, kao i na afterEach blok na dnu skripte.

Napomena: Osnovna razlika u 'expect' i 'when' definiciji $httpBackend zahteva je ta što se kod 'expect' očekuje da će se zahtev izvršiti (inače dolazi do greške), a kod 'when' je akcenat na tome šta će se vratiti kada se zahtev izvrši.
Napomena 2: 'expect' može takođe da vraća odgovor.
Napomena 3: kod 'expecta' je bitan redosled očekivanja zahteva i njihova frekvencija.
Napomena 4: $httpBackend.flush() se uglavnom poziva bez parametra, ali ukoliko prosledimo broj X onda to označava da želimo da se izvrše prvih X zahteva koji nisu izvršeni