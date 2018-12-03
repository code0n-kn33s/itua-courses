var gulp = require('gulp'),
  browserSync = require('browser-sync')

gulp.task('browser-sync', function () {
  browserSync.init({
    server: {
      baseDir: "./"
    }
  })
})

gulp.task('watch', ['browser-sync'], function () {
  gulp.watch("common/css/***/**/*.css", browserSync.reload);
  gulp.watch("common/js/***/**/*.js", browserSync.reload);
  gulp.watch('lessons/***/**/*.js', browserSync.reload);
  gulp.watch("lessons/***/**/*.html", browserSync.reload);
  gulp.watch("lessons/***/**/*.css", browserSync.reload);
  gulp.watch('index.html', browserSync.reload);
});

gulp.task('default', [ 'watch' ]);