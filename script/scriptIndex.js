
var verMais = document.getElementById('verMais')
var verMenos = document.getElementById('verMenos')
var containerImagem = document.getElementById('img')
var setaDireita = document.getElementById('setaDireita')
var setaEsquerda = document.getElementById('setaEsquerda')
var somPaginaVirando = document.getElementById('paginaVirando')
var imagem = document.querySelectorAll(".containerImagens img")
var spanDescricao = document.getElementById('descricaoPersonagens')

const descricaoPersonagens = [{
    Nome: "Guts",
    Historia: " Guts era um jovem órfão que<br> cresceu como um mercenário, e <br>que procurava um propósito em sua vida.<br>Um certo dia, acabou conhecendo Griffith, um <br>jovem idealista e líder do 'Bando do falcão'.<br> Após muitas aventuras, os dois acabaram<br> se desentendendo e Guts saiu pelo mundo em busca de<br> seus sonhos e novas aventuras",
    Frase: "Eu nunca esperei por um milagre, farei as coisas acontecerem por mim mesmo."
}, {
    Nome: "Griffith",
    Historia: " Griffith é o antagonista principal de Berserk.<br> Ele é o fundador e líder dos grupos mercenários Bando<br> do Falcão e o Novo Bando do Falcão, o governador<br> da cidade de Falconia e o quinto <br>membro da Mão de Deus; conhecido como Femto.",
    Frase: "Neste mundo o destino do homem é <br>controlado por uma entidade transcedental ou lei?<br> A mão de Deus realmente paira sobre nós?<br>Ao menos é verdade que o homem não tem<br> controle nem sobre sua própria vontade."
},
{
    Nome: "Caska",
    Historia: "Como uma jovem de origem humilde, Casca<br> considerava dificuldades, tais como fome e sequestro, um<br> fato normal da vida de camponesa. No entanto, depois<br> de ter sido quase estuprada por um nobre, ela escolheu<br> lutar, antes de ser auxiliada por Griffith, o <br>qual ofereceu a ela uma espada para se defender.",
    Frase: "Naquele dia, eu finalmente percebi.<br> Eu não conseguia desviar meus olhos, não de Griffith, que<br> havia perdido pela primeira vez e estava de joelhos; mas sim das costas<br> do Gatts, que se afastava sem sequer olhar para trás. ."
},
{
    Nome: "Nosferatu Zodd",
    Historia: "Zodd é um guerreiro bárbaro de 3 metros de altura quando em forma humana.<br> Quando transformado, ele se assemelha a um minotauro com o rosto de um leão, cujo <br> tamanho supera muito mais a maioria dos seres humanos.<br> Ele é considerado por muitos mercenários como o 'Deus do Campo de Batalha', já que ele <br> viveu centenas de anos sem encontrar um adversário digno em combate.",
    Frase: "Se você é alguém que esse homem considera como verdadeiro amigo, é <br>bom que saiba disso, no momento em que as ambições dele forem <br>frustradas, a morte virá buscar você!!! Uma morte certa, da <br>qual jamais poderá escapar!!!!!"
},
{
    Nome: "Farnese",
    Historia: "Farnese de Vandimion é um dos personagens principais e uma<br> nobre da família Vandimion que liderou guarda cerimonial da Santa Sé, Os <br>Cavaleiros das Sagradas Correntes de Ferro. Ela se tornou depois membro<br> do Novo Grupo de Guts.",
    Frase: "Desde que este homem apareceu, tudo está desmoronando!<br> O mundo que conheço entrou em colapso!"
},
{
    Nome: "Grunbeld ",
    Historia: " Grunbeld é um dos mais poderosos apóstolos existentes.<br> Um autêntico gigante, mesmo nos padrões de um apóstolo - com mais<br> de três metros de altura na forma humana - e com feições régias, ainda<br> que selvagens, muitos o comparam com um dragão, e não é por menos.",
    Frase: "Você é um excelente guerreiro. <br>Mas de agora em diante, vou cumprir minhas ordens para o<br>nosso mestre como um apóstolo do Falcão da Luz!! Eu serei seu oponente!!!"
},
{
    Nome: "Ganishka",
    Historia: " Ganishka era imperador do Império Kushan, ele <br>era um apóstolo que usou um tipo de Behelit, só<br> que feito por homens. Diferente de outros apóstolos, ele é contra a Mão de Deus.",
    Frase: "Eu sou o melhor caminho para para o melhor império<br> neste mundo! Eu sou o novo Deus!!!"
},
{
    Nome: "Skull Knight",
    Historia: "Skull Knight é de longe um dos seres mais fortes da série, tendo<br> vivido por mais de mil anos, conhece diversos segredos de ambos os <br>mundos -astral e físico. Travou inúmeros duelos contra Zodd, ao qual considera seu principal rival, sendo <br>chamado pelo menos de “velho amigo”.",
    Frase: "Tu Nasceste de um um cadáver e emergiste da lama.<br> Tu é “Aquele que Principiou do Fim”!!! És o mais próximo da morte e, por <br>isso mesmo, possuis habilidades para dela escapar!!!<br> Resistas, desafies, enfrentes!!! Essas são as únicas armas daquele que luta contra morte!!<br> Não te esqueças jamais!!! Quando estiveres a beira do <br>desespero, apenas os que se levantarem com espada em punho, mesmo<br> que partida ao meio, se salvarão, ou então…"
},
{
    Nome: "A ideia do mal",
    Historia: " É uma entidade sobrenatural parecida com um coração que aparece<br> no Capítulo 83, o assim chamado 'Capítulo Perdido' do mangá.<br> Ele é um elemento chave nas ações da Mão de Deus, embora <br>suas intenções sejam um mistério.",
    Frase: "Como você será o único escolhido?"
},
{
    Nome: "Void",
    Historia: " Void é o membro mais filosófico da Mão de Deus e está <br>principalmente preocupado em analisar e controlar o curso do destino.<br> Void é aquele que conduz os sacrifícios feitos por almas <br>torturadas para que eles se tornem apóstolos e alcancem seus sonhos.",
    Frase: "Demônios para alguns, Anjos para outros."
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
    spanDescricao.innerHTML = `
    Nome: ${descricaoPersonagens[index].Nome}  <br><br>
          História:${descricaoPersonagens[index].Historia} <br><br>
          "${descricaoPersonagens[index].Frase}"
    `
}


function sliderEsquerda() {
    index--
    if (index <= 0) {
        index = 0
    }
    containerImagem.style.transform = `translateX(${-index * 450}px)`
    spanDescricao.innerHTML = `
    Nome: ${descricaoPersonagens[index].Nome}  <br><br>
          História:${descricaoPersonagens[index].Historia} <br><br>
          "${descricaoPersonagens[index].Frase}"
    `
    console.log(descricaoPersonagens[0].Historia)
}

