const gulp = require('gulp')
const { series, parallel } = require('gulp')
    // series = realiza em cadeia
    // parallel = realiza em paralelo

const antes1 = cb => {
    console.log('Antes 1!')
    console.log('Antes 1!')
    return cb()
}

const antes2 = cb => {
    console.log('Antes 2!')
    return cb()
}

function copiar(cb) {
        // carrega os arquivos
    // gulp.src(['pastaA/arquivo1.txt', 'pastaA/arquivo2.txt'])

    gulp.src('pastaA/**/*.txt') //qualquer arquivo da pasta A com a extensão txt é copiado

        // pipe = mudanças nos arquivos carregados acima
        .pipe(gulp.dest('pastaB')) //cria altomaticamente
    return cb()
}

const fim = cb => {
    console.log('Fim!')
    return cb()
}

module.exports.default = series(
    parallel(antes1, antes2),
    copiar,
    fim
)