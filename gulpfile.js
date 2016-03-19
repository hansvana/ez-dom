const gulp = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const markdox = require('gulp-markdox');

gulp.task('scripts', ['doc'], () => {
    return gulp.src('src/ez-dom.es6')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(uglify())
        .pipe(gulp.dest(''));
});

gulp.task('doc', () => {
    return gulp.src('src/ez-dom.es6')
        .pipe(markdox())
        .pipe(gulp.dest('./doc'));
});