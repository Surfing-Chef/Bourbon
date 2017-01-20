// REQUIRED
var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload,
    plumber = require('gulp-plumber'),
    autoprefixer = require('gulp-autoprefixer'),
    del  = require('del'),
    rename = require('gulp-rename');

// DEVELOPMENT TASKS
// Scripts Task - tasks related to js
gulp.task('scripts', function(){
  gulp.src(['app/js/**/*.js', '!app/js/**/*.min.js'])
  .pipe(plumber())
  .pipe(rename({suffix:'.min'}))
  .pipe(uglify())
  .pipe(gulp.dest('app/js'))
  .pipe(reload({stream: true}));
});

// Sass Tasks - tasks related to sc scss and css
// deployment css - compressed
gulp.task('sassDep', function(){
  gulp.src('app/sass/**/*.scss')
  .pipe(plumber())
  .pipe(sass({outputStyle: 'compressed'}))
  .pipe(autoprefixer('last 2 versions'))
  .pipe(gulp.dest('app/css/'))
  .pipe(reload({stream: true}));
});

// development css - nested
gulp.task('sassDev', function(){
  gulp.src('app/sass/**/*.scss')
  .pipe(plumber())
  .pipe(rename({suffix:'.dev'}))
  .pipe(sass({outputStyle: 'nested'}))
  .pipe(autoprefixer('last 2 versions'))
  .pipe(gulp.dest('app/css/'));
});

// HTML Tasks - tasks related to html
gulp.task('html', function(){
  gulp.src('./')
  .pipe(reload({stream: true}));
});

// Browser-Sync Tasks - tasks related to browser-sync
gulp.task('browser-sync', function(){
  browserSync({
    server:{
      baseDir: './app/'
    }
  });
});

// DEPLOYMENT TASKS
// clear out all files and folders from build folder
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

// Watch Task - watch files and folders for changes
gulp.task('watch', function(){
  gulp.watch('app/js/**/*.js', ['scripts']);
  gulp.watch('app/sass/**/*.scss', ['sassDev']);
  gulp.watch('app/sass/**/*.scss', ['sassDep']);
});

// Default Task - runs specified tasks asynchronously
gulp.task('default', ['scripts', 'sassDev', 'sassDep', 'html', 'browser-sync', 'watch']);
