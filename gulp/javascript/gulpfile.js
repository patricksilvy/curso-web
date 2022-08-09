const { series } = require('gulp')
const gulp = require('gulp')
const concat = require('gulp-concat')
const uglify = require('gulp-uglify')
const babel = require('gulp-babel')

function transformacaoJs(cb) {
    return gulp.src('src/**/*.js')
                //tras o codigo da versão mais atual para a versão 
                //mais suportada pelos browsers
        .pipe(babel({
            comments: false,
            presets: ["env"],
        }))
                //deixa o codigo mais feio e leve
        .pipe(uglify())
                //junta tudo em um arquivo só
        .on('error', err => console.log(err))
        .pipe(concat('codigo.min.js'))
                //destino do arquivo concatenado 
        .pipe(gulp.dest('build'))

    // return cb()
}

const fim = cb => {
    console.log('Fim!!!')
    return cb()
}

exports.default = series(transformacaoJs, fim)