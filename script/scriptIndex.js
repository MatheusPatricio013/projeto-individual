
var verMais = document.getElementById('verMais')
var verMenos = document.getElementById('verMenos')
var containerImagem = document.getElementById('img')
var setaDireita = document.getElementById('setaDireita')
var setaEsquerda = document.getElementById('setaEsquerda')
var somPaginaVirando = document.getElementById('paginaVirando')
var imagem = document.querySelectorAll(".containerImagens img")
var spanDescricao = document.getElementById('descricaoPersonagens')

const descricaoPersonagens = [ {
    Nome:"Guts",
    Historia:" Guts era um jovem órfão que<br> cresceu como um mercenário, e <br>que procurava um propósito em sua vida.<br>Um certo dia, acabou conhecendo Griffith, um <br>jovem idealista e líder do 'Bando do falcão'.<br> Após muitas aventuras, os dois acabaram<br> se desentendendo e Guts saiu pelo mundo em busca de<br> seus sonhos e novas aventuras",
    Frase:"Eu nunca esperei por um milagre, farei as coisas acontecerem por mim mesmo."
}
]



verMais.addEventListener('click', () => {
    var continuarResumo = document.getElementById('continuacaoResumo')
    continuarResumo.style.display = 'block'
    verMais.style.display = 'none'
})
verMenos.addEventListener('click', () => {
    var continuarResumo = document.getElementById('continuacaoResumo')
    continuarResumo.style.display = 'none'
    verMais.style.display = 'block'
})

setaDireita.addEventListener('click', () => {
    slider()
    somPaginaVirando.play()
})
setaEsquerda.addEventListener('click', () => {
    sliderEsquerda()
    somPaginaVirando.play()
})

var index = 0;
var pixelAtual = 0
function slider() {
    index++
    if (index > imagem.length - 1) {
        index = 0
    }
    pixelAtual += 450
    containerImagem.style.transform = `translateX(${-index * 450}px)`

}


function sliderEsquerda() {
    index--
    if (index <= 0) {
        index = 0
    }
    containerImagem.style.transform = `translateX(${-index * 450}px)`
    spanDescricao.innerHTML = `
    Nome: ${descricaoPersonagens[0].Nome}  <br><br>
          História:${descricaoPersonagens[0].Historia} <br><br>
          "${descricaoPersonagens[0].Frase}"
    `
    console.log(descricaoPersonagens[0].Historia)
}

