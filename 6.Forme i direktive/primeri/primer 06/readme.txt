Zadatak
=========
Pokrenite "http-server" u tekućem direktorijumu.

Otvoriti localhost:8080/ stranicu u web čitaču.

Razmotriti prikaz u web čitaču, zatim otvoriti index.html i nakon toga radnik.directive.js u app/components/radnik fascikli.

Zakomentarisati template atribut i njegovu vrednost i otkomentarisati templateUrl atribut.

Osvežiti prikaz u web čitaču i uočiti promenu, zatim otvoriti radnik.tpl.html u app/components/radnik fascikli.

Napomena: template atribut koristiti samo ako HTML stane u jedan kratak red, inače koristiti templateUrl.

Napomena 2: obratiti pažnju na ponašanje ng-repeat direktive. Podsetimo se da za svaku instancu radnika ng-repeat pravi novu instancu HTML elementa sa svojim scope-om. Zbog toga je moguće pristupiti "radnik" promenljivi u HTML šablonu direktive.