Zadatak
=========
Pokrenite "http-server" u tekućem direktorijumu.

Otvoriti localhost:8080/ stranicu u web čitaču.

Napraviti uniqueJmbg direktivu koja prilikom promene JMBG polja vrši zahtev na server da proveri da li postoji radnik sa datim JMBGom. Ukoliko postoji polje JMBG treba da bude $invalid, odnosno $valid ukoliko ne postoji radnik sa datim JMBGom. Potrebno je integrisati tu proveru sa validatorom kontrolera ngModel direktive. S' obzirom da komunikacija sa serverom može da traje potrebno je da validator bude asinhron (proučiti ngModel.$asyncValidators).

Napraviti busyIndicator direktivu koja će se integrisati sa uniqueJmbg tako da prikazuje indikator da se nešto dešava (pojavi ikonica, npr.) dok se vrši HTTP zahtev. Za ovo proučiti ngModelController.$pending polje.

Srediti formu koristeći znanje iz prethodnih primera da se prikažu greške koristeći ngMessages modul. Potrebno je da JMBG bude obavezno polje i da taj podatak bude jedinstve, kao i da bude tačno 13 karaktera. Polje ime i prezime treba da budu dužine između 2 i 15 karaktera i takođe obavezni. Polje email treba da bude tipa email i da bude obavezno polje.

Napomena: Ugrađena email direktiva prihvata asd@bfg kao validan email, iako bi trebalo nešto oblika asd@bfg.ckl

Dodatni zadatak: Napraviti kursevi-email direktivu koja radi bolje od ugrađene direktive. Moguće je isto postići bez direktive, koristeći ng-pattern.