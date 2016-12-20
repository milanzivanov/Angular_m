Sintaksa verzija
==================
- Bower lista zavisnosti sadrži parove "ime modula":"verzija modula"
- Verzija modula može da bude određen broj (npr. "1.2.0")
- Verzija modula takođe može da ima specijalne znake:
	- Kad stoji "~" ispred broja to znači da se dobavlja najnovija verzija koja ne menja prva dva broja)
	  Primer: "~1.2.0" traži bilo koju verziju između 1.2.0 i 1.3.0 (ali ne i 1.3.0)
	- Kad stoji "~" ispred broja to znači da se dobavlja najnovija verzija koja ne menja prvi broj)
	  Primer: "~1.2" traži bilo koju verziju između 1.2.0 i 2.0.0 (ali ne i 2.0.0)
	- Umesto poslednje cifre možemo postaviti "x" što predstavlja "bilo koji broj"
	  Primer: "1.x" odgovara 1.1, ali i 1.9; Preuzeće se najnovija verzija koja postoji
	- Ako umesto verzije stoji "latest" to će skinuti najnoviju verziju. Ovo treba izbegavati jer je u opštem slučaju velika razlika između verzije 1.0.0 i 3.0.0
- Isti simboli važe i u package.json datoteci kada pričamo o NPM zavisnostima


Zadatak
========
Otvoriti bower.json i analizirati sadržaj datoteke.
U terminalu ukucati "bower install" u direktorijumu gde se nalazi bower.json
Proučiti "bower_components" fasciklu.

Obrisati bower_components fasciklu.
Izmeniti bower.json tako da se preuzima "angular-route":"1.2" (umesto "1.x")
Ukucati u terminalu "bower install" u tekućem direktorijumu.
Proučiti ispis konzole.