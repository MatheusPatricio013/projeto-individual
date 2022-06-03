
var verMais = document.getElementById('verMais')
var verMenos = document.getElementById('verMenos')
verMais.addEventListener('click', ()=>{
    var continuarResumo = document.getElementById('continuacaoResumo')
    continuarResumo.style.display ='block'
    verMais.style.display ='none'
})
verMenos.addEventListener('click', ()=>{
    var continuarResumo = document.getElementById('continuacaoResumo')
    continuarResumo.style.display ='none'
    verMais.style.display ='block'
})