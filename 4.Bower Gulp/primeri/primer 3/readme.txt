Hipoteza
========
Imate aplikaciju koja se bavi evidentiranjem terena sportsko poslovnog prostora. Sistem vodi računa o terenima, timovima i sportistima koji koriste terene, kao i o rezervacijama datih terena.
Klijent je zatražio da se proširi aplikacija.
Želi da proširi evidenciju sportista tako da sadrži neke dodatne podatke.
Pored toga želi da proširi funkcionalnost rezervacije tako da se rezervacija može otkazati.

Zadatak
========
Lociraj sve komponente koje se odnose na entitet "sportsman", pa zatim na entitet "reservation".
Razmotriti koliko je jednostavno bilo to učiniti kada se komponente segmentiraju po komponentama aplikacije.

- Kada je aplikacija kompleksnija i sastoji se od više komponenti potrebno je razmisliti o strukturi paketa
- Ne treba gubiti vreme na traganje za kodom
- Lako je naučiti se na bilo kakvu strukturu paketa, problem nastaje kada programer uzme da radi na loše strukturiranom tuđem projektu (ili čak svom projektu na kom je radio pre 6+ meseci)
- Pridržavati se LIFT principa koliko god je moguće, ne treba gubiti vreme na navigaciji i traganju za kodom, već na razvoju aplikacije