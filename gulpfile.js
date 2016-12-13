var gulp = require("gulp");

var browserSync = require('browser-sync');



gulp.task("salami", function(){
	console.log("Hello, world!");
});

gulp.task("rain", ["salami"], function(){
	console.log("It gon rain");
});

gulp.task("browser-sync", function() {
	browserSync.init({
		server: {
			baseDir: "./"
		}
	});
	gulp.watch('./*.html').on("change", browserSync.reload);
		gulp.watch('./*.css').on("change", browserSync.reload);
			gulp.watch('./*.js').on("change", browserSync.reload);
});
