//Na vrhu gulpfile.js datoteke pišemo sve module koje ćemo koristiti
var gulp = require('gulp');

var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

//Učitaj datoteke (gulp.src), spoj ih u all.js (concat) i sačuvaj to u spojeni fasciklu (gulp.dest)
gulp.task('scripts', function() {
	return gulp.src('izvor/**/*.js')
		.pipe(concat('all.js'))
		.pipe(gulp.dest('spojeni'))
		.pipe(rename('all.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('odrediste'));
});

//Ako se desi neka promena u izvornim javaskript datotekama pokreni task agregiranja pa minifikacije
gulp.task('watch', function() {
	gulp.watch('izvor/**/*.js', ['scripts']);
});

//default task je task koji se pokreće ako u terminal ukucamo samo "gulp";
//Kao što se može videti, task ne mora da prihvata funkciju kao drugi parametar,
//može i niz taskova koji će se izvršiti
gulp.task('default', ['scripts', 'watch']);
//NAPOMENA: Taskovi navedeni u nizu se ne izvršavaju sekvencijalno, već paralelno