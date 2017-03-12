
	var gulp = require ("gulp"),
		concat = require('gulp-concat'),
		uglify = require('gulp-uglify'),
		cleancss = require('gulp-clean-css'),
		autoprefixer = require('gulp-autoprefixer');


	gulp.task('scripts', function() {

		return gulp.src(['./src/js/*.js'])
        	.pipe(uglify())
        	.pipe(concat('bundle.min.js'))
        	.pipe(gulp.dest('dist/js'));


	});

	gulp.task('styles', function() {

		return gulp.src(['./src/css/*.css'])
		 	.pipe(autoprefixer())
        	.pipe(cleancss())
        	.pipe(concat('styles.min.css'))
        	.pipe(gulp.dest('dist/css'));

	});

	gulp.task('default', ['scripts', 'styles']);