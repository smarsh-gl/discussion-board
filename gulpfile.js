var gulp = require('gulp');
var concat = require("gulp-concat");
var less = require("gulp-less");
var ts = require('gulp-typescript');
var babel = require('gulp-babel');
// The default task (called when you run `gulp` from cli)
gulp.task('html', function() {
	gulp.src('./src/html/*.html')
	.pipe(gulp.dest('./build'));
});

gulp.task('js', function() {
	gulp.src('./src/js/*.ts')
	  .pipe(ts({
        noImplicitAny: false,
		noExternalResolve: true,
        out: 'bundle.min.js',
		target: 'es6'
      }))
	  .pipe(babel({
		  code:true
	  }))
	  .pipe(gulp.dest('./build/js'));
});

gulp.task('js-copy', function() {
	gulp.src('./src/js/*.js')
	  .pipe(gulp.dest('./build/js'));
});

gulp.task('server-build', function() {
	gulp.src('./server-src/*.ts')
	  .pipe(ts({
        noImplicitAny: false,
		noExternalResolve: true,
		target: 'es6'
      }))
	  .pipe(babel({
		  code:true
	  }))
	  .pipe(gulp.dest('./server-build'));
});


gulp.task('less', function() {
	gulp.src('./src/less/*.less')
	  .pipe(concat('bundle.min.css'))
	  .pipe(less())
	  .pipe(gulp.dest('./build/css'));
})


gulp.task('default', ['html', 'js', 'js-copy', 'less', 'server-build']);