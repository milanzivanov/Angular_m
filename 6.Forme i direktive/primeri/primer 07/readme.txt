Zadatak
=========
Pokrenite "http-server" u tekućem direktorijumu.

Otvoriti localhost:8080/ stranicu u web čitaču.

Razmotriti prikaz u web čitaču, zatim otvoriti index.html i app.controller.js u app/controllers fascikli.

Redom otvarati sharedScope.directive.js, inheritedScope.directive.js i isolatedScope.directive.js i uočiti razlike između navedenih direktiva, i to u njihovoj definiciji (što se vidi u kodu) i u ponašanju (što se vidi u web čitaču).

Napomena: Osnovna razlika između sharedScope i inheritedScope direktive je što se u prvom slučaju scope deli sa scope-om kontrolera u kom se direktiva nalazi, što znači da ako direktiva proširuje svoj scope ona zapravo proširuje scope od komponente (uglavnom kontrolera) u kom se nalazi u direktivi koji se kači na scope i može mu se pristupiti i u drugoj direktivi. InheritedScope direktiva stvara novi scope čiji $parent je scope komponente (uglavnom kontrolera) u kom se direktiva nalazi, što znači da ako direktiva proširuje svoj scope neće uticati na scope svog $parent-a.

Napomena 2: IsolatedScope direktiva formira nov izolovan scope koji se detaljnije ispituje u sledećem primeru.