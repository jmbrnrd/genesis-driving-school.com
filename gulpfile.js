/**
 * Created by jmbrnrd on 28/08/2015.
 */

var gulp        = require('gulp');
var deploy      = require('gulp-gh-pages');

/**
 * Push build to gh-pages
 */
gulp.task('deploy', function () {
    return gulp.src("./_site/**/*")
        .pipe(deploy())
});