/**
 * write config data to src/js/environment-config.js
 */

var gulp = require('gulp'),
	opts = require('../opts');

gulp.task('app-config', function(done){

	opts.logMsg('\n*****' + 'begin app-config' + '*****\n');

	var str = '//auto-generated by gulp from config.js\n';
	str += 'App.constant("environment", ' + JSON.stringify(opts.config) + ');';
	opts.fs.writeFile(opts.src + opts.jsDir + '/environment-config.js', str, function(err){
		if(err) throw err;
		opts.logMsg('\nconfig file write completed\n');
		done();
	});

});