var gulp = require('gulp'),
	gutil = require('gulp-util'),
	coffee = require('gulp-coffee');


var coffeeSources = ['components/coffee/tagline.coffee'];

gulp.task('coffee', function() {
	//specify where the original source method is
	gulp.src(coffeeSources)
	//pipe aka send to coffee variable.. 
		//'bare: true' compiles it to JS w/o putting 
		//it in safety wrapper like it normally would 
	.pipe(coffee({ bare: true })
		//in case there is an error.. does not 
		//stop the execution of any other gulp task
		.on('error', gutil.log))
	//where we want to send the file once this process is done
	.pipe(gulp.dest('components/scripts'))
});