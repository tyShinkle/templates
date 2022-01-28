const {src,dest,watch} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const concat = require('gulp-concat');
const pug = require('gulp-pug');

function  css(){
    return src('./src/css/*.scss')
        .pipe(sass().on('error',sass.logError))
        .pipe(dest('./dist/assets'));
}

function js(){
    return src('./src/js/*.js')
        .pipe(concat('scipts.js'))
        .pipe(dest('./dist/assets/'));
}

function html(){
    return src('./src/pug/views/*.pug')
        .pipe(pug({pretty:true,}))
        .pipe(dest('./dist'));
}

exports.css = css;
exports.js = js;
exports.html = html;

exports.watch = function(){
    watch('./src/css/*scss',css);
    watch('./src/pug/**/*.pug',html);
    watch('./src/js/*.js',js);
}