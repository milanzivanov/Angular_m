Zadatak
=========
Pokrenite "http-server" u tekućem direktorijumu.

Otvoriti localhost:8080/ stranicu u web čitaču.

Uneti "Pera" u Email polje.

Kliknuti na Name polje (ili negde van Email polja).

Desni klik na Email polje pa Inspect Element.

Obratiti pažnju na klase koje polje ima.

- Angular dodaje klase poljima spram njihovog stanja
- U našem slučaju dodate su klase ng-invalid (zato što nije unet ispravan email), ng-dirty (zato što je izmenjeno stanje polja, odnosno promenjeni su podaci koji su stojali tu), ng-touched (zato što smo dotakli polje kad smo kliknuli na njega)
- Pored toga angular dodaje klase za konkretnu validnost konkretnog ograničenja
- U našem slučaju to je ng-invalid-email (zato što nije ispoštovan format email-a) i ng-valid-required (zato što smo uneli nešto)

Analizirati stateForm.css u assets/css fascikli i primetiti kako je moguće uticati na izgled forme spram njenog stanja.

Stisnuti taster Reset.

Bez kliktanja na Email polje otvoriti inspect elements i pogledati koje klase sadrži email polje sada.

Analizirati form.controller.js u app/controllers fascikli.

Dodatno: Analizirati posebno touchControlls funkciju i razmotriti njenu svrhu.

Zadatak 2
=========
Osvežiti stranicu i uneti u Name i u Email polje "Pera".

Kliknuti na Reset.

Razmotriti zašto se ispraznilo Name polje, a nije Email.