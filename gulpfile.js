// REQUIRED
var gulp        = require('gulp'),
    sass        = require('gulp-sass'),
    browserSync = require('browser-sync').create(),
    uglify = require('gulp-uglify'),
    plumber = require('gulp-plumber'),
    autoprefixer = require('gulp-autoprefixer'),
    sourcemaps  = require('gulp-sourcemaps'),
    concat = require('gulp-concat'),
    del = require('del'),
    rename = require('gulp-rename');

// DEVELOPMENT TASKS
//////// Tasks used in development environment ////////
// Scripts Task - tasks related to js
gulp.task('scripts', function(){
  return gulp.src(['app/js/**/*.js', '!app/js/**/*min.js'])
  .pipe(plumber())
  .pipe(concat('script.min.js'))
  .pipe(gulp.dest('app/js'))
  .pipe(uglify())
  .pipe(gulp.dest('app/js'))
  .pipe(browserSync.stream());
});

// Sass Task - development css - nested/readable/mapped
gulp.task('sassDev', function() {
  return gulp.src('app/sass/**/*.scss')
  .pipe(plumber())
  .pipe(rename({suffix:'.dev'}))
  .pipe(sourcemaps.init())
    .pipe(sass({sourceComments: 'map', sourceMap: 'sass', outputStyle: 'nested'}))
    .pipe(autoprefixer('last 2 versions'))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('app/css/'))
  .pipe(browserSync.stream());
});

// Sass Task - deployment css - compressed/minified/mapped
gulp.task('sassDep', function(){
  return gulp.src('app/sass/**/*.scss')
  .pipe(plumber())
  .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(autoprefixer('last 2 versions'))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('app/css/'))
  .pipe(browserSync.stream());
});

// Server Task - Asynchronous browser syncing of assets across multiple devices
gulp.task('serve', function(){
  browserSync.init({
    proxy   : "http://localhost/Bourbon/app"
  });

  gulp.watch('app/js/**/*.js', ['scripts']);
  gulp.watch('app/sass/**/*.scss', ['sassDev']);
  gulp.watch('app/sass/**/*.scss', ['sassDep']);
  gulp.watch('**/*.html').on('change', browserSync.reload);
  gulp.watch('**/*.php').on('change', browserSync.reload);
});

// Default Task
gulp.task('default', ['serve']);

////////////////////////////////////////////////////////
// DEPLOYMENT TASKS
//////// Tasks used to build deployment package ////////
gulp.task('build:cleanfolder', function(){
  del([
    './build/**/*'
  ]);
});

// create build directory for all files
gulp.task('build:copy', ['build:cleanfolder'], function(){
  return gulp.src('./app/**/*/')
  .pipe(gulp.dest('./build/'));
});

// remove unwanted build files and directories
gulp.task('build:remove', ['build:copy'], function(done){
  del([  // list files and directories to delete
    './build/sass/',
    './build/css/*dev*'
  ], done);
});

// main build task
gulp.task('build', ['build:copy', 'build:remove']);
