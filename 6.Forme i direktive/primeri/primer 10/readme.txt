Zadatak
=========
Pokrenite "http-server" u tekućem direktorijumu.

Otvoriti localhost:8080/ stranicu u web čitaču.

Razmotriti prikaz u web čitaču (unositi razne brojeve u polje), zatim otvoriti index.html i obratiti pažnju na strukturu DOMa vezanu za kursevi-tabs i kursevi-pane direktive (transclude).

Otvoriti kurseviTabs.directive.js i kursevi-tabs.html iz app/directives fascikle i analizirati kod. Posebnu pažnju obratiti na controller atribut u kurseviTabs.directive.js.

Otvoriti kurseviPane.directive.js i analizirati kod. 

Napomena: Koristimo 'controller' kada želimo da definišemo funkcije koje će drugde komponente moći da koriste, a 'link' u svim drugim slučajevima. Ukoliko želimo da koristimo kontroler neke direktive potrebno je da koristimo atribut 'require' i onda će se pojaviti četvrti parametar u 'link' funkciji koji sadrži 1 ili više (u zavisnosti od require) kontrolera.

Napomena 2: Kad se koristi require obratiti pažnju gde se zahteva da se nalazi komponenta (na istom elementu ili u nekom roditeljskom čvoru, za šta koristimo ^), kao i da li smo sigurni da ćemo naći komponentu (?).