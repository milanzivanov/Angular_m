//Na vrhu gulpfile.js datoteke pišemo sve module koje ćemo koristiti
var gulp = require('gulp');
var protractor = require('gulp-protractor');
var webserver = require('gulp-webserver');
var karma = require('karma');
var exit = require('gulp-exit');

gulp.task('test', function(done) {
    karma.server.start({
    	//putanja do karma.config.js
        configFile: __dirname + '\\tests\\karma.config.js'
    }, done);
});

gulp.task('webserver', function() {
  gulp.src('.')
    .pipe(webserver());
});

//potrebno je ažurirati webdriver za selenium server 
var webdriverUpdate = require('gulp-protractor').webdriver_update;
gulp.task('webdriverUpdate', webdriverUpdate);

gulp.task('e2e', ['webserver', 'webdriverUpdate'], function(done) {
	gulp.src([])
		.pipe(protractor.protractor({
			//putanja do protractor.config.js
			configFile: __dirname + "\\tests\\protractor.config.js",
			//menjamo baseUrl pošto webserver koristi port 8000, a http-server 8080
      		args: ['--baseUrl', 'http://localhost:8000']
		}))
		.on('error', function(error) {
			console.log(error);
		})
	//bez ovog plugina se ne ugase pokrenuti serveri
    .pipe(exit());
});