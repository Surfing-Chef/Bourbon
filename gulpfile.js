// REQUIRED
var gulp = require('gulp'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync'),
    reload = browserSync.reload,
    plumber = require('gulp-plumber'),
    autoprefixer = require('gulp-autoprefixer'),
    sourcemaps  = require('gulp-sourcemaps'),
    concat  = require('gulp-concat'),
    del  = require('del'),
    rename = require('gulp-rename');

// DEVELOPMENT TASKS
// Scripts Task - tasks related to js
gulp.task('scripts', function(){
  gulp.src(['app/js/**/*.js', '!app/js/**/*min.js'])
  .pipe(plumber())
  .pipe(concat('script.min.js'))
  .pipe(gulp.dest('app/js'))
  .pipe(uglify())
  .pipe(gulp.dest('app/js'))
  .pipe(reload({stream: true}));
});

// Fonts Task - copy font-awesome files to directory for use
gulp.task('fonts', function(){
  return gulp.src('node_modules/font-awesome/fonts/*')
    .pipe(gulp.dest('app/fonts'));
});

// Sass Tasks - tasks related to sc scss and css
// deployment css - compressed
gulp.task('sassDep', function(){
  gulp.src('app/sass/**/*.scss')
  .pipe(plumber())
  .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}))
    .pipe(autoprefixer('last 2 versions'))
  .pipe(sourcemaps.write())
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
  gulp.src('app/')
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
  gulp.watch('app/**/*.html', ['html']);
});

// Default Task - runs specified tasks asynchronously
gulp.task('default', ['scripts', 'fonts', 'sassDev', 'sassDep', 'html', 'browser-sync', 'watch']);
