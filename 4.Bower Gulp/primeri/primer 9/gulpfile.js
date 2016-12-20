//Na vrhu gulpfile.js datoteke pišemo sve module koje ćemo koristiti
var gulp = require('gulp');

var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var webserver = require('gulp-webserver');
//concat-vendor služi za spajanje stranih biblioteka koje preuzimamo putem bower alata
var concatVendor = require('gulp-concat-vendor');

gulp.task('vendorScripts', function() {
	return gulp.src('assets/vendor/*')
		.pipe(concatVendor('vendor.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('dist'));
});

gulp.task('scripts', function() {
	return gulp.src('app/**/*.js')
		.pipe(concat('all.min.js'))
		.pipe(uglify())
		.pipe(gulp.dest('dist'));
});


gulp.task('watch', function() {
	gulp.watch('app/**/*.js', ['scripts']);
});

gulp.task('webserver', function() {
  gulp.src('.')
    .pipe(webserver({
      livereload: true,
      open: true
    }));
});

gulp.task('default', ['vendorScripts', 'scripts', 'watch', 'webserver']);