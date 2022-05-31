const perguntasQuiz = [
    {
        Questão: "Qual o nome do protagonista?",
        A: "Gats",
        B: "Gutsu",
        C: "Gutss",
        D: "Guts",
        Correta: 'D'
    },
    {
        Questão: "Qual o nome do melhor amigo do protagonista?",
        A: "Grifin",
        B: "Griffith",
        C: "Griffinth",
        D: "Grif",
        Correta: 'B'
    },
    {
        Questão: "Como se chama a espada utilizada por Guts?",
        A: "Dragonslayer",
        B: "Caça dragões",
        C: "Madatora",
        D: "DragonSlash",
        Correta: 'A'
    },
    {
        Questão: "Quem foi a primeira vitima de Guts?",
        A: "Gambino",
        B: "Casca",
        C: "Griffith",
        D: "Gambit",
        Correta: 'A'
    },
    {
        Questão: "Como alguém se torna um apóstolo?",
        A: "Matando um outro apóstulo",
        B: "Sacrificando um ancião",
        C: "Através de  um sacrifício com o Behelit",
        D: "Em um pacto de sangue na lua cheia",
        Correta: 'C'
    },
    {
        Questão: "Qual o nome do grupo dos apóstolos?",
        A: "A mão de Deus",
        B: "Os cavaleiros do apocalipse",
        C: "Os 12 pecados",
        D: "A ira de Deus",
        Correta: 'A'
    },
    {
        Questão: "Como se chama o amor de Guts?",
        A: "Mara",
        B: "Griffith",
        C: "Casca",
        D: "Casker",
        Correta: 'C'
    },
    {
        Questão: "Qual o evento em que Griffith renasceu como apóstolo?",
        A: "Eclipse",
        B: "Lua de sangue",
        C: "Behelit",
        D: "A reencarnação",
        Correta: 'A'
    },
    {
        Questão: "Em qual era Guts entrou para o bando do Falcão?",
        A: "Era de ouro",
        B: "Era de bronze",
        C: "Era de prata",
        D: "Era de madeira",
        Correta: 'A'
    },
    {
        Questão: "Qual o nome da armadura de Guts?",
        A: "Armadura Negra",
        B: "Armadura Berserker",
        C: "Defesa Sombria",
        D: "A escuridão",
        Correta: 'B'
    },
]
var temporizador = 16
var valor = 0
var pontos = 0
var spanPontuacao = document.getElementById('span_pontos')
var tituloTempo = document.getElementById('tempo')
tituloTempo.style.color = 'white'

var intervaloTemporizador = setInterval(() => {
    if (temporizador == 0) {
        proximaQuestao()
    }
    temporizador--
    tituloTempo.innerHTML = "Tempo:" + temporizador

}, 1000);

function comecar_quiz() {
    temporizador = 18
    const divQuiz = document.getElementById('quiz')
    divQuiz.style.display = "block"
    const questao = document.getElementById('questao')
    const respostaA = document.getElementById('respostaA')
    const respostaB = document.getElementById('respostaB')
    const respostaC = document.getElementById('respostaC')
    const respostaD = document.getElementById('respostaD')
    questao.innerHTML = perguntasQuiz[0].Questão
    respostaA.innerHTML = "A) " + perguntasQuiz[0].A
    respostaB.innerHTML = "B) " + perguntasQuiz[0].B
    respostaC.innerHTML = "C) " + perguntasQuiz[0].C
    respostaD.innerHTML = "D) " + perguntasQuiz[0].D


}

function proximaQuestao() {
    if (valor == 9) {
        var divPerguntas = document.getElementById('lista_itens')
        var divbot = document.getElementById('botaoProximaQuestao')
        var botoes = document.querySelector('.botoes')
        botoes.style.display='none'
        divbot.style.display='none'
        divPerguntas.style.display='none'
        spanPontuacao.innerHTML = `Parabéns!!! você fez ${pontos} pontos!!!`

    }
    temporizador = 16
    console.log(perguntasQuiz[valor].Questão + valor)
    const questao = document.getElementById('questao')
    const respostaA = document.getElementById('respostaA')
    const respostaB = document.getElementById('respostaB')
    const respostaC = document.getElementById('respostaC')
    const respostaD = document.getElementById('respostaD')
    questao.innerHTML = perguntasQuiz[valor + 1].Questão
    respostaA.innerHTML = "A) " + perguntasQuiz[valor + 1].A
    respostaB.innerHTML = "B) " + perguntasQuiz[valor + 1].B
    respostaC.innerHTML = "C) " + perguntasQuiz[valor + 1].C
    respostaD.innerHTML = "D) " + perguntasQuiz[valor + 1].D
    valor++
}

function checar() {
    var respostaSelecionada = document.querySelector('input[name="respostas"]:checked').value;
    var input = document.querySelector('input[name="respostas"]:checked')
    var label = input.nextSibling
    var span = label.firstChild
    
    console.log('respostaSelecionada', respostaSelecionada)
    console.log('perguntasQuiz[valor]', perguntasQuiz[valor])
    if (respostaSelecionada == perguntasQuiz[valor].Correta) {
        console.log('temporizador', temporizador)
        if (temporizador == 15 || temporizador == 14 || temporizador == 13 || temporizador == 12) {
            pontos += 30
        } else if (temporizador == 11 || temporizador == 10 || temporizador == 9) {
            pontos += 15
        } else if (temporizador == 8 || temporizador == 7 || temporizador == 6 || temporizador == 5) {
            pontos += 5
        } else {
            pontos += 1
        }

       
        span.style.backgroundColor = 'green'
        pontos += 10
        pontos = pontos
        spanPontuacao.innerHTML = `Pontos atuais: ${pontos}`

        console.log(span)
    }
    else {
       
        span.style.backgroundColor = 'red'
        pontos = pontos
        spanPontuacao.innerHTML = `Pontos atuais: ${pontos}`
    }
   proximaQuestao()
    
    
}