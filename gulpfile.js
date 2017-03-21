let gulp = require('gulp');
let exec = require('child_process').exec;

gulp.task('deploy', function (cb) {
  exec('node scripts/deploy-gitbook.js', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
})

gulp.task('build', function (cb) {
  exec('node scripts/generate-gitbook.js', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
})

gulp.task('serve', function (cb) {
  exec('gitbook serve', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
})

gulp.task('varias', ['build', 'deploy']);

gulp.task('actualiza', ['build'], function (cb) {
  exec('node scripts/deploy-gitbook.js', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
})

gulp.task('ejemplo', function (cb) {
  exec('node src/ejemplo.js', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
})

gulp.task('ejemplo1', function (cb) {
  exec('node src/ejemplo1.js', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
})

gulp.task('ejemplo2', function (cb) {
  exec('node src/ejemplo2.js', function (err, stdout, stderr) {
    console.log(stdout);
    console.log(stderr);
    cb(err);
  });
})
