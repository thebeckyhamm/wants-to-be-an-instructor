var gulp = require("gulp"),
    sass = require("gulp-sass"),
    autoprefixer = require("gulp-autoprefixer"),
    browserSync = require("browser-sync"),
    minify = require("gulp-minify-css"),
    plumber = require("gulp-plumber");

gulp.task("styles", function(){
    gulp.src(["./*.scss","./sass/*.scss"])
        .pipe(plumber())
        .pipe(sass())
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        // .pipe(gulp.dest("./"))
        // .pipe(minify())
        .pipe(gulp.dest("./"));
});

gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: "./"
        }
    });
});

gulp.task("default", ["styles", "browser-sync"], function(){
    gulp.watch(["./*.scss", "./sass/*.scss", "index.html"], ["styles", browserSync.reload]);
});