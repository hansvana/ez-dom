const gulp = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const markdox = require('gulp-markdox');
const concat = require('gulp-concat');

gulp.task('scripts', () => {
    return gulp.src('src/*.es6')
        .pipe(babel({
            presets: ['es2015']
        }))
        //.pipe(uglify())
        .pipe(gulp.dest(''));
});

//gulp.task('doc', () => {
//    return gulp.src('src/*.es6')
//        .pipe(markdox())
//        .pipe(concat('readme.md'))
//        .pipe(gulp.dest('./'));
//});

gulp.task('watch', () => {
    gulp.watch('src/*.es6', ['scripts']);
});

gulp.task('default', ['watch', 'scripts']);