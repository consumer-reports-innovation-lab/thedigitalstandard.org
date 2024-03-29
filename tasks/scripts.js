import gulp from 'gulp'
import webpack from 'webpack-stream'
import { webpackConfig } from './webpack'

gulp.task('scripts', function () {
  return gulp.src('./scripts/**.*')
    .pipe(webpack(webpackConfig, null, function (err, stats) {
      /* Use stats to do more things if needed */
      console.log(err)
    }))
    .pipe(gulp.dest('./src'));
})

