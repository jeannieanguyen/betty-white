'use strict'; 
//grab gulp packages
var gulp = require('gulp'); 
var gutil = require('gulp-util'); 
var plugins = require('gulp-load-plugins')(); 
var minifyCss = require('gulp-minify-css');
var concat = require('gulp-concat-css'); 
var rename = require('gulp-rename');

gulp.task('default', function() {
	return gutil.log('Now running Gulp...')
}); 

gulp.task('build-css', function(){
	return gulp.src('./public/sass/**/*.scss')
				.pipe(plugins.sass())
				.pipe(gulp.dest('public/css/stylesheets'))
				.pipe(concat('style.css'))
				.pipe(gulp.dest('./'))
				.pipe(minifyCss())
				.pipe(rename('style.min.css'))
				.pipe(gulp.dest('./public/css/stylesheets')); 
});

gulp.task('watch', function(){
	gulp.watch('public/sass/**/*.scss', ['build-css']);
});
