'use strict'

let gulp = require('gulp')
let rimraf = require('gulp-rimraf')
let tsc = require('gulp-typescript')
let sourcemaps = require('gulp-sourcemaps')
let tslint = require('gulp-tslint')
let nodemon = require('gulp-nodemon')
var mocha = require('gulp-mocha')
var istanbul = require('gulp-istanbul')
var coveralls = require('gulp-coveralls')
var remapIstanbul = require('remap-istanbul/lib/gulpRemapIstanbul');

// /*  Variables */
let tsProject = tsc.createProject('tsconfig.json')
let sourceFiles = 'src/**/*.ts'
let testFiles = 'test/**/*.ts'
let outDir = require('./tsconfig.json').compilerOptions.outDir
let buildSourceFiles = outDir + '/src/**/*.js';
let entryPoint = './build/src/server.js'

/**
 * Remove build directory.
 */
gulp.task('clean', function() {
    return gulp.src(outDir, { read: false })
        .pipe(rimraf())
})


/**
 * Lint all custom TypeScript files.
 */
gulp.task('tslint', () => {
    return gulp.src(sourceFiles)
        .pipe(tslint())
        .pipe(tslint.report('verbose'))
})

/**
 * Compile TypeScript sources and create sourcemaps in build directory.
 */
gulp.task('compile', ['clean'], () => {
    let tsResult = gulp.src([sourceFiles, testFiles])
        .pipe(sourcemaps.init())
        .pipe(tsc(tsProject))
    return tsResult.js
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(outDir))
})

/**
 * Watch for changes in TypeScript, HTML and CSS files.
 */
gulp.task('watch', function() {
    gulp.watch([sourceFiles], ['compile']).on('change', (e) => {
        console.log('TypeScript file ' + e.path + ' has been changed. Compiling.')
    })
})

/**
 * Build the project.
 */
gulp.task('build', ['compile'], () => {
    console.log('Building the project ...')
})

gulp.task("istanbul:hook", ['compile'], function() {
  console.log("Build source files", buildSourceFiles);
    return gulp.src([buildSourceFiles])
        // Covering files
        .pipe(istanbul())
        // Force `require` to return covered files
        .pipe(istanbul.hookRequire());
});

gulp.task('coveralls', function () {
  gulp.src('coverage/lcov.info').pipe(coveralls());
});

//using remap-istanbul we can point our coverage data back to the original ts files
function remapCoverageFiles() {
    return gulp.src('./coverage/coverage-final.json')
    .pipe(remapIstanbul({
        basePath: '.',
        reports: {
            'html': './coverage',
            'text-summary': null,
            'lcovonly': './coverage/lcov.info'
        }
    }));
}

gulp.task('test', ['istanbul:hook'], () => {
    return gulp.src(['build/test/**/*.js'], { read: false })
        .pipe(mocha({ reporter: 'list' }))
        .pipe(istanbul.writeReports())
        .on('end', remapCoverageFiles) //perform a remap
        .once('error', () => {
            process.exit(1);
        })
        .once('end', () => {
            process.exit();
        });
})


gulp.task('nodemon', ['build'], () => {
    nodemon({
        script: entryPoint,
        env: { 'NODE_ENV': 'development' },
        tasks: ['build']
    })
})
