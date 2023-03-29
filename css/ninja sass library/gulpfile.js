const { src, dest, watch, series } = require('gulp')
const sass = require('gulp-sass')(require('sass'))
const purgecss = require('gulp-purgecss')

    function buildStyles(){
        return src('scss2/**/*.scss')//we take source file then >;
            .pipe(sass())//pipe it to the sass compiler for it be compiled into css our sass file then >;
            .pipe(purgecss({ content: ['*.html'] }))
            .pipe(dest('css'))//pipe the compiled css file to be output into this file;
    }//responsible for compiling sass into css;

    function watchTask(){
        watch(['scss2/**/*.scss', '*.html'], buildStyles)//first is the source file, second is function which will run when the source file changes;
    }//will watch our sass file for changes & recompile it when we changes;

    exports.default = series(buildStyles, watchTask)
