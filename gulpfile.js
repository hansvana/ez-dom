const gulp = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');

gulp.task('scripts', () => {
    return gulp.src('src/*.es6')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(uglify())
        .pipe(gulp.dest('./dist'));
});

gulp.task('watch', () => {
    gulp.watch('src/*.es6', ['scripts']);
});

gulp.task('default', ['watch', 'scripts']);