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

// NAMED TASKS
// Scripts Task - tasks related to js
gulp.task('scripts', function(){
  gulp.src(['dev/js/**/*.js', '!dev/js/**/*.min.js'])
  .pipe(plumber())
  .pipe(rename({suffix:'.min'}))
  .pipe(uglify())
  .pipe(gulp.dest('dev/js'))
  .pipe(reload({stream: true}));
});

// Sass Tasks - tasks related to sc scss and css
gulp.task('sass', function(){
  gulp.src('dev/sass/**/*.scss')
  .pipe(plumber())
  .pipe(autoprefixer('last 2 versions'))
  .pipe(gulp.dest('dev/css/'))
  .pipe(reload({stream: true}));
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

// Watch Task - watch files and folders for changes
gulp.task('watch', function(){
  gulp.watch('dev/js/**/*.js', ['scripts']);
  gulp.watch('dev/sass/**/*.scss', ['sass']);
});

// Default Task - runs specified tasks asynchronously
gulp.task('default', ['scripts', 'compass', 'html', 'php', 'browser-sync', 'watch']);
