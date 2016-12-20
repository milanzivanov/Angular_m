Zadatak
=========
Pokrenite "http-server" u tekućem direktorijumu.

Otvoriti localhost:8080/ stranicu u web čitaču.

Proučiti zašto (za razliku od prošlog primera) se greške ne vide odmah.

Obratiti pažnju na ng-show direktivu kod div-a koji sadrži ng-messages.

Uneti neki tekst u Name, sačekati 1 sekundu i obratiti pažnju na ispis u donjem delu stranice.

- Napomena: Prvi put kada se bude modifikovalo Name polje neće biti ispisa grešaka, čak iako je ime duže od 10 karaktera ili kraće od 2.
			Razlog zašto se ovo dešava je zato što polje nije $touched sve dok se ne napusti prvi put.
			Ako se napusti polje Name, zatim vrati i modifikuje, greške će se ispisati 1 sekund nakon prestanka kucanja (ako treba da se ispiše, naravno)

Uneti neki tekst u Email i napustiti polje.

Obratiti pažnju kako se greška ažurira samo kada se polje napusti (na 'blur' događaj).

Otvoriti index.html i proučiti ng-model-options direktivu koja se vezuje za input polje.