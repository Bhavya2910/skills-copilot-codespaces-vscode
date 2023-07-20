// Create web server
Path: server.js
var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
app.use(express.static(__dirname + '/dist'));
app.listen(port);
console.log('Server started on port ' + port);
Path: Gruntfile.js
module.exports = function(grunt) {
  grunt.initConfig({
    connect: {
      server: {
        options: {
          port: 8080,
          base: 'dist',
          keepalive: true
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.registerTask('default', ['connect']);
};
Path: gulpfile.js
var gulp = require('gulp');
var connect = require('gulp-connect');
gulp.task('connect', function() {
  connect.server({
    root: 'dist',
    port: 8080
  });
});
gulp.task('default', ['connect']);
Path: webpack.config.js
module.exports = {
  entry: './src/app/app.js',
  output: {
    path: './dist',
    filename: 'app.bundle.js'
  }
};
// Path: package.json
// {
//   "name": "angular-webpack",
//   "version": "1.0.0",
//   "description": "",
//   "main": "index.js",
//   "scripts": {
//     "test": "echo \"Error: no test specified\" && exit 1",
//     "dev": "webpack -d --watch",
//     "build": "webpack -p"
//   },
//   "author": "",
//   "license": "ISC",
//   "devDependencies": {
//     "babel-core": "^6.7.6",
//     "babel-loader": "^6.2.4",
//     "babel-preset-es2015": "^6.6.0",
//     "babel-preset-stage-0": "^6.5.0",
//     "babel-preset-stage-1": "^6.5.0",
//     "babel-preset-stage-2": "^6.5.0",
//     "webpack": "^1.12.14"
//   }
// }
