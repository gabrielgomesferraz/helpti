/**
 *
 *  Super Muffato v8
 *  Copyright 2015 Muffato. All rights reserved.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License
 *
 */

// This gulpfile makes use of new JavaScript features.
// Babel handles this without us having to do anything. It just works.
// You can read more about the new JavaScript features here:
// https://babeljs.io/docs/learn-es2015/

'use strict';

import gulp from 'gulp';
import del from 'del';
import runSequence from 'run-sequence';
import browserSync from 'browser-sync';
import gulpLoadPlugins from 'gulp-load-plugins';
import mergeStream from 'merge-stream';

const reload = browserSync.reload;
const $ = gulpLoadPlugins();

// Configs to Style Stats
var styleStats = {
  config: {
    'published': false,
    'paths': false,
    'stylesheets': false,
    'styleElements': false,
    'size': true,
    'dataUriSize': false,
    'ratioOfDataUriSize': false,
    'gzippedSize': false,
    'simplicity': false,
    'rules': false,
    'selectors': true,
    'declarations': false,
    'averageOfIdentifier': false,
    'mostIdentifier': false,
    'mostIdentifierSelector': false,
    'averageOfCohesion': false,
    'lowestCohesion': false,
    'lowestCohesionSelector': false,
    'totalUniqueFontSizes': false,
    'uniqueFontSizes': false,
    'totalUniqueFontFamilies': false,
    'uniqueFontFamilies': false,
    'totalUniqueColors': false,
    'uniqueColors': false,
    'idSelectors': false,
    'universalSelectors': false,
    'unqualifiedAttributeSelectors': false,
    'javascriptSpecificSelectors': '',
    'userSpecifiedSelectors': false,
    'importantKeywords': false,
    'floatProperties': false,
    'mediaQueries': false,
    'propertiesCount': 0,
    'requestOptions': {}
  }
};

// Lint JavaScript
gulp.task('jshint', () => {
  return gulp.src([
    'app/assets/scripts/**/*.js',
  ])
    .pipe(reload({stream: true, once: true}))
    .pipe($.jshint())
    .pipe($.jshint.reporter('jshint-stylish'))
    .pipe($.if(!browserSync.active, $.jshint.reporter('fail')));
});

// Optimize images
gulp.task('images', () => {
  return gulp.src([
    'app/assets/images/**/*',
  ])
    .pipe($.imagemin({
      optimizationLevel: 7,
      progressive: true,
      interlaced: true
    }))
    .pipe(gulp.dest('arquivos/images/'))
    .pipe($.size({title: 'images'}));
});

// SVG
gulp.task('svg', () => {
  return gulp.src([
    'app/assets/svg/**/*.svg'
  ])
    .pipe(gulp.dest('arquivos/images/'))
    .pipe($.size({title: 'svg'}));
});

// Copy web fonts to arquivos
gulp.task('fonts', () => {
  return gulp.src([
    'app/assets/fonts/**/*.{ttf,woff,eot,svg}',
  ])
    .pipe($.rename({dirname: '/'})) // remove subfolders
    .pipe(gulp.dest('arquivos/fonts/'))
    .pipe($.size({title: 'fonts'}));
});

// Compile and automatically prefix stylesheets
gulp.task('styles', () => {
  const AUTOPREFIXER_BROWSERS = [
    'ie >= 8',
    'ie_mob >= 10',
    'ff >= 30',
    'chrome >= 34',
    'safari >= 7',
    'opera >= 23',
    'ios >= 7',
    'android >= 4.4',
    'bb >= 10'
  ];

  // For best performance, don't add Sass partials to `gulp.src`
  return gulp.src([
    'app/assets/styles/**/*.scss',
    'guide/assets/styles/**/*.scss'
  ])
    //.pipe($.sourcemaps.init())
    .pipe($.sass({
      precision: 10
    }).on('error', $.sass.logError))
    .pipe($.autoprefixer(AUTOPREFIXER_BROWSERS))
    //.pipe($.sourcemaps.write())
    .pipe($.rename({dirname: '/'})) // remove subfolders
    .pipe(gulp.dest('arquivos'))

    // Concatenate and minify styles
    .pipe($.if('*.css', $.groupCssMediaQueries()))
    .pipe($.if('*.css', $.minifyCss()))
    //.pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest('arquivos/styles/'))
    .pipe($.size({title: 'styles'}))
    //.pipe($.if(/supermuffato-v8.css/i, $.rename('dev-supermuffato-v8.css')))
    //.pipe(gulp.dest('arquivos/'));
});


// Bootstrap plugins
gulp.task('materialize-scripts', () => {
  return gulp.src([
      './app/assets/scripts/materialize/initial.js',
      './app/assets/scripts/materialize/jquery.easing.1.4.js',
      './app/assets/scripts/materialize/animation.js',
      './app/assets/scripts/materialize/velocity.min.js',
      './app/assets/scripts/materialize/hammer.min.js',
      './app/assets/scripts/materialize/jquery.hammer.js',
      './app/assets/scripts/materialize/global.js',
      './app/assets/scripts/materialize/collapsible.js',
      './app/assets/scripts/materialize/dropdown.js',
      './app/assets/scripts/materialize/modal.js',
      './app/assets/scripts/materialize/materialbox.js',
      './app/assets/scripts/materialize/parallax.js',
      './app/assets/scripts/materialize/tabs.js',
      './app/assets/scripts/materialize/tooltip.js',
      './app/assets/scripts/materialize/waves.js',
      './app/assets/scripts/materialize/toasts.js',
      './app/assets/scripts/materialize/sideNav.js',
      './app/assets/scripts/materialize/scrollspy.js',
      './app/assets/scripts/materialize/forms.js',
      './app/assets/scripts/materialize/slider.js',
      './app/assets/scripts/materialize/cards.js',
      './app/assets/scripts/materialize/chips.js',
      './app/assets/scripts/materialize/pushpin.js',
      './app/assets/scripts/materialize/buttons.js',
      './app/assets/scripts/materialize/transitions.js',
      './app/assets/scripts/materialize/scrollFire.js',
      './app/assets/scripts/materialize/date_picker/picker.js',
      './app/assets/scripts/materialize/date_picker/picker.date.js',
      './app/assets/scripts/materialize/date_picker/picker.time.js',
      './app/assets/scripts/materialize/character_counter.js',
      './app/assets/scripts/materialize/carousel.js',
      './app/assets/scripts/materialize/tapTarget.js'
  ])
    .pipe($.concat('materialize.js'))
    .pipe($.uglify({preserveComments: 'some'}))
    // Output files
    .pipe($.if(/sm-v8-bootstrap.js/i, gulp.dest('arquivos/scripts')))
    .pipe($.size({title: 'materialize-scripts'}));
});

// Super Muffato V8 Scripts
gulp.task('scripts', () => {
  return gulp.src([
    './app/assets/scripts/*'
  ])
    .pipe($.uglify({preserveComments: 'some'}))
    // Output files
    .pipe($.rename({dirname: '/'})) // remove subfolders
    .pipe(gulp.dest('arquivos/scripts'))
    .pipe($.size({title: 'scripts'}));
});

gulp.task('php', function() {
  return gulp.src([
    'app/**/*.php'
  ])
  .pipe(gulp.dest('build'))
  .pipe(reload({
    stream: true
  }));
});

// Clean output directory
gulp.task('clean', () => del(['arquivos/*','build/*', '!build/.git'], {dot: true}));

// Watch files for changes & reload
gulp.task('serve', ['default'], () => {
  browserSync({
    notify: false,
    logPrefix: 'helpti',
    // Run as an https by uncommenting 'https: true'
    // Note: this uses an unsigned certificate which on first access
    //       will present a certificate warning in the browser.
    // https: true,
    // Browser automatically opening
    open: false,
    proxy: 'dev.helpti.com',
    baseDir: '/build'
  });

  // Application
  gulp.watch(['app/**/*.php'], ['php', reload]);
  gulp.watch(['app/assets/styles/**/*.{scss,css}'], ['styles', reload]);
  gulp.watch(['app/assets/scripts/scripts/**/*.js'], ['scripts', 'common-scripts', 'jshint', reload]);
  gulp.watch(['app/assets/images/**/*'], ['images', reload]);
  gulp.watch(['app/assets/images/**/*'], ['svg', reload]);

});

// Build production files, the default task
gulp.task('default', ['clean'], cb => {
  runSequence(
    'styles',
    ['jshint', 'php', 'materialize-scripts', 'scripts', 'svg', 'images', 'fonts'],
    cb
  );
});
