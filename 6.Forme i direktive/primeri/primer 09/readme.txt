Zadatak
=========
Pokrenite "http-server" u tekućem direktorijumu.

Otvoriti localhost:8080/ stranicu u web čitaču.

Razmotriti prikaz u web čitaču (unositi razne brojeve u polje), zatim otvoriti index.html i nakon toga linkFunction.directive.js u app/directives/ fascikli.

Napomena: Link funkciju koristiti za manipulisanje DOM-om i registrovanje osluškivača (na događaje, zatim $watch). Ako treba uticati na HTML šablon koji svaka instanca dobija koristiti compile funkciju.

Napomena 2: Jedino putem direktiva sme angular aplikacija da manipuliše DOM.

Napomena 3: Svaka direktiva treba da čisti za sobom (zbog čega postoji element.on('$destroy') da ugasi interval).

Napomena 4: Kao što se može primetiti u link funkciju je moguće injektovati servise, ali to se radi na nivou funkcije za konstrukciju objekta koji definiše direktivu.