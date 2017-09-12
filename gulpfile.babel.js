/**
 *
 *  HelpTI
 *  Copyright 2015 HelpTI. All rights reserved.
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
    'app/assets/scripts/pages/**/*.js',
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
    'app/assets/fonts/**/*.{ttf,woff,wolff2,eot,svg}',
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
  ])
    .pipe($.sass({
      precision: 10
    }).on('error', $.sass.logError))
    .pipe($.autoprefixer(AUTOPREFIXER_BROWSERS))
    .pipe($.rename({dirname: '/'})) // remove subfolders

    // Concatenate and minify styles
    .pipe($.if('*.css', $.groupCssMediaQueries()))
    .pipe($.if('*.css', $.minifyCss()))
    .pipe(gulp.dest('arquivos/styles/'))
    .pipe($.size({title: 'styles'}))
});

// Bootstrap plugins
gulp.task('bootstrap-scripts', () => {
  return gulp.src([
    './app/assets/scripts/vendor/bootstrap/transition.js',
    './app/assets/scripts/vendor/bootstrap/alert.js',
    './app/assets/scripts/vendor/bootstrap/collapse.js',
    './app/assets/scripts/vendor/bootstrap/dropdown.js',
    './app/assets/scripts/vendor/bootstrap/modal.js',
    './app/assets/scripts/vendor/bootstrap/tab.js'
  ])
    .pipe($.concat('bootstrap.js'))
    .pipe($.uglify({preserveComments: 'some'}))
    // Output files
    .pipe(gulp.dest('arquivos/scripts/vendor'))
    .pipe($.size({title: 'bootstrap-scripts'}));
});

// HelpTI Scripts
gulp.task('scripts', () => {
  return gulp.src([
    './app/assets/scripts/pages/**/*.js'
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
    baseDir: '/'
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
    ['jshint', 'php', 'bootstrap-scripts', 'scripts', 'svg', 'images', 'fonts'],
    cb
  );
});
