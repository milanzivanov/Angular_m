Zadatak
=========
Pokrenite "http-server" u tekućem direktorijumu.

Otvoriti localhost:8080/ stranicu u web čitaču.

Ispitati ponašanje aplikacije kada se unese JMBG koji već postoji u tabeli.

Ugasiti server i uneti komandu "karma start tests/karma.config.js".

Otvoriti uniqueJmbg.directive.spec.js u app/shared/validators fascikli i proučiti testove. Posebnu pažnju obratiti na $compile servis.

Prva grupa testova je vezana za testiranje unique-jmbg direktive, dok je druga grupa vezana za busy-indicator direktivu koja se koristi zajedno sa unique-jmbg.

Napomena: html.children().scope() funkija je jQlite konstrukcija i koristi se kada je potrebno izvući scope iz deteta na ovaj način. Da je scope bio izolovan potrebno bi bilo pozvati html.children().isolateScope() funkciju.