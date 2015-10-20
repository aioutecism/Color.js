var gulp        = require('gulp');
var exec        = require('child_process').exec;
var del         = require('del');
var runSequence = require('run-sequence');

var $ = require('gulp-load-plugins')();

var PATH = {
    src  : 'src',
    dest : 'dist'
};

gulp.task('clean', function () {
    return del([
        PATH.dest
    ]);
});

gulp.task('babel', function () {
    return gulp.src(PATH.src + '/**/*.js')
        .pipe($.sourcemaps.init())
            .pipe($.babel())
            .pipe($.uglify())
        .pipe($.sourcemaps.write())
        .pipe(gulp.dest(PATH.dest));
});

gulp.task('watch', function () {
    gulp.watch(PATH.src + '/**/*.js', ['babel']);
});

gulp.task('default', function (callback) {
    return runSequence(
        'clean',
        'babel',
        callback
    );
});
