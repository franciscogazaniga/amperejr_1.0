var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

//Para os plugins do Bootstrap
gulp.task('sass-plugins', function() {
	return gulp.src(['scss/vendors/*.scss'])
	.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError)) //converte o Sass em CSS
	.pipe(gulp.dest("css/vendors"))
	.pipe(browserSync.stream());
});

//Para o estilo CSS
gulp.task('sass-style', function() {
	return gulp.src(['scss/*.scss'])
	.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError)) //converte o Sass em CSS
	.pipe(gulp.dest("css"))
	.pipe(browserSync.stream());
});

//Realiza a função watch para olhar os HTML e SCSS
gulp.task('watch', function() {
	browserSync.init({
		server: "./"
	});

	gulp.watch(['scss/vendors/*.scss', 'scss/*.scss'], gulp.parallel(['sass-plugins', 'sass-style']));
	gulp.watch("./*.html").on('change', browserSync.reload);

});

//Possibilita utilizar 'gulp' no cmd para executar todas as tarefas anteriores
gulp.task('default', gulp.parallel('sass-plugins', 'sass-style', 'watch'));