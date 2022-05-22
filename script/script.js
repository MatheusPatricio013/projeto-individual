const perguntasQuiz = [
    {
        Questão:"Qual o nome do protagonista?",
        A:"Gats",
        B:"Gutsu",
        C:"Gutss",
        D:"Guts",
        Correta:'D'
    },
    {
        Questão:"Qual o nome do melhor amigo do protagonista?",
        A:"Grifin",
        B:"Griffith",
        C:"Griffinth",
        D:"Grif",
        Correta:'B'
    },
    {
        Questão:"Como se chama a espada utilizada por Guts?",
        A:"Dragonslayer",
        B:"Caça dragões",
        C:"Madatora",
        D:"DragonSlash",
        Correta:'A'
    },
    {
        Questão:"Quem foi a primeira vitima de Guts?",
        A:"Gambino",
        B:"Casca",
        C:"Griffith",
        D:"Gambit",
        Correta:'A'
    },
    {
        Questão:"Como alguém se torna um apóstolo?",
        A:"Matando um outro apóstulo",
        B:"Sacrificando um ancião",
        C:"Através de  um sacrifício com o Behelit",
        D:"Em um pacto de sangue na lua cheia",
        Correta:'C'
    },
    {
        Questão:"Qual o nome do grupo dos apóstolos?",
        A:"A mão de Deus",
        B:"Os cavaleiros do apocalipse",
        C:"Os 12 pecados",
        D:"A ira de Deus",
        Correta:'A'
    },
    {
        Questão:"Como se chama o amor de Guts?",
        A:"Mara",
        B:"Griffith",
        C:"Casca",
        D:"Casker",
        Correta:'C'
    },
    {
        Questão:"Qual o evento em que Griffith renasceu como apóstolo?",
        A:"Eclipse",
        B:"Lua de sangue",
        C:"Behelit",
        D:"A reencarnação",
        Correta:'A'
    },
    {
        Questão:"Em qual era Guts entrou para o bando do Falcão?",
        A:"Era de ouro",
        B:"Era de bronze",
        C:"Era de prata",
        D:"Era de madeira",
        Correta:'A'
    },
    {
        Questão:"Qual o nome da armadura de Guts?",
        A:"Armadura Negra",
        B:"Armadura Berserker",
        C:"Defesa Sombria",
        D:"A escuridão",
        Correta:'B'
    },
]

var valor = 0
var pontos= 0
var spanPontuacao = document.getElementById('span_pontos')
function comecar_quiz(){
    const divQuiz = document.getElementById('quiz')
    divQuiz.style.display="block"
    const questao = document.getElementById('questao')
    const respostaA= document.getElementById('respostaA')
    const respostaB= document.getElementById('respostaB')
    const respostaC= document.getElementById('respostaC')
    const respostaD= document.getElementById('respostaD')
    questao.innerHTML=perguntasQuiz[0].Questão
    respostaA.innerHTML="A) "+perguntasQuiz[0].A
    respostaB.innerHTML="B) "+perguntasQuiz[0].B
    respostaC.innerHTML="C) "+perguntasQuiz[0].C
    respostaD.innerHTML="D) "+perguntasQuiz[0].D
}

function proximaQuestao(){
    console.log(perguntasQuiz[valor].Questão + valor)
    const questao = document.getElementById('questao')
    const respostaA= document.getElementById('respostaA')
    const respostaB= document.getElementById('respostaB')
    const respostaC= document.getElementById('respostaC')
    const respostaD= document.getElementById('respostaD')
    questao.innerHTML=perguntasQuiz[valor+1].Questão
    respostaA.innerHTML="A) "+perguntasQuiz[valor+1].A
    respostaB.innerHTML="B) "+perguntasQuiz[valor+1].B
    respostaC.innerHTML="C) "+perguntasQuiz[valor+1].C
    respostaD.innerHTML="D) "+perguntasQuiz[valor+1].D
    valor++
}

function checar(){
var respostaSelecionada =document.querySelector('input[name="respostas"]:checked').value;
if (respostaSelecionada == perguntasQuiz[valor].Correta){
    alert('Parabens')
    pontos+=10
    pontos=pontos
    spanPontuacao.innerHTML=`Pontos atuais: ${pontos}`
    proximaQuestao()
}
else{
    alert('errou')
    pontos=pontos
    spanPontuacao.innerHTML=`Pontos atuais: ${pontos}`
}


}