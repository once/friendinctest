	
	var gulp = require("gulp"),
		browserSync = require('browser-sync').create();


	gulp.task("serve", function() {

		browserSync.init({
			server: {
				
				baseDir: "./src"
			},
			notify : false
		});
		
		gulp.watch("./src/**/*", ["watch"]);

	});



	gulp.task("watch", function () {

			browserSync.reload();
			
	});

	gulp.task("default", ["serve"])