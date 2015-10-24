var gulp        = require('gulp');
var del         = require('del');
var runSequence = require('run-sequence');

var $ = require('gulp-load-plugins')();

var PATH = {
    src   : 'src',
    dev   : 'dev',
    build : 'build'
};

// For development
gulp.task('clean:dev', function () {
    return del([
        PATH.dev
    ]);
});

gulp.task('babel:dev', function () {
    return gulp.src(PATH.src + '/**/*.js')
        .pipe($.sourcemaps.init())
            .pipe($.babel())
        .pipe($.sourcemaps.write())
        .pipe(gulp.dest(PATH.dev));
});

gulp.task('dev', function (callback) {
    return runSequence(
        'clean:dev',
        'babel:dev',
        function () {
            gulp.watch(PATH.src + '/**/*.js', ['babel:dev']);
            callback && callback();
        }
    );
});

// For build
gulp.task('clean:build', function () {
    return del([
        PATH.build
    ]);
});

gulp.task('babel:build', function () {
    return gulp.src(PATH.src + '/**/*.js')
        .pipe($.babel())
        .pipe($.uglify())
        .pipe($.concat('color.min.js'))
        .pipe(gulp.dest(PATH.build));
});

gulp.task('default', function (callback) {
    return runSequence(
        'clean:build',
        'babel:build',
        callback
    );
});
