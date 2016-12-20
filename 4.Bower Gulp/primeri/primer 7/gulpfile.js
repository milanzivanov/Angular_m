//Na vrhu gulpfile.js datoteke pišemo sve module koje ćemo koristiti (za sada samo gulp)
var gulp = require('gulp');

//gulp.task je metoda kojom se definiše task; Prvi parametar je ime taska,
//a drugi funkcija koja se izvršava kada se task aktivira
gulp.task('transfer', function() {
	return gulp.src('izvor/**/*.txt')
		.pipe(gulp.dest('odrediste'));
});

//Transfer task radi sledeće:
//	1) Uzima sve tekstualne dokumente iz izvor fascikle (putem gulp.src metode)
//	2) Zatim ih premešta u fasciklu odrediste (putem gulp.dest metode)

//Metodu pipe možemo tumačiti kao reč "zatim", 
//gde je parametar funkcije radnja koja se treba dalje vršiti.

gulp.task('watch', function() {
	gulp.watch('izvor/**/*.txt', ['transfer']);
});

//Ukoliko se desi neka promena na tekstualnim dokumentima u izvor fascikli
//vrši se transfer task koji će prebaciti izmene i u fasciklu odrediste