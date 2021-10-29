const {src, dest, series, watch} = require('gulp'); 
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const terser = require('gulp-terser');
const browserSync = require('browser-sync').create(); 

function sassTask(){
    return src('app/scss/style.scss', {sourcemaps:true})
        .pipe(sass())
        .pipe(postcss([cssnano()]))
        .pipe(dest('dist', {sourcemaps:'.'}));
}
function jsTask(){
    return src('app/js/*.js', {sourcemaps:true})
        .pipe(terser())
        .pipe(dest('dist', {sourcemaps:'.'}));
}


function browserSyncServe(cb){
    browserSync.init({
        server:{
            baseDir: '.'
        }
    });
    cb(); 
}
function browserSyncReload(cb){
    browserSync.reload();
    cb(); 
}
function watchTask(){
    watch('*.html', browserSyncReload)
    watch(['app/scss/**/*.scss', 'app/js/**/*.js'], series(sassTask, jsTask, browserSyncReload, ));
}



exports.default = series(
    sassTask, 
    jsTask,
    browserSyncServe,
    watchTask
 
)