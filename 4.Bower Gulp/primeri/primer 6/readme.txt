NPM komande vezane za gulp
==========================

npm install					- traži package.json u tekućem direktorijumu i preuzima sa interneta sve
				  		zavisnosti navedene u dependency i devDependency JSON nizovima (smešta ih u node_modules paket)

npm install gulp			- instalira gulp u tekućem direktorijumu (smešta ga u node_modules)

npm install gulp -g 		- instalira gulp globalno

npm install gulp --save-dev	- instalira gulp u tekućem direktorijumu i ažurira package.json

Zadatak
=========
Uneti u terminal komandu "npm install" u tekućem direktorijumu.
Proučiti node_modules paket koji nastane.

Uneti u terminal komandu "gulp transfer" i analizirati rezultat rada posmatrajući direktorijum izvor i odrediste.
Otvoriti gulpfile.js i proučiti kod.