const $startGameButton = document.querySelector(".start-quiz")
const $questionscontainer =document.querySelector(".questions-container")
const $answersContainer = document.querySelector(".answers-container")
const $questiontext = document.querySelector(".question")
const $nextQuestionButton = document.querySelector(".next-question")

$startGameButton.addEventListener("click", stratGame)
$nextQuestionButton.addEventListener("click", displayNextQuestion)

let currentQuestionIndex =0
let totalcorrect=0


function stratGame(){
    $startGameButton.classList.add("hide")
    $questionscontainer.classList.remove("hide")
    displayNextQuestion()
}

function displayNextQuestion(){
   resetState()

    if(questions.length== currentQuestionIndex){
      return finishGame()
    }

    $questiontext.textContent = questions[currentQuestionIndex].question
    questions[currentQuestionIndex].asnwer.forEach(asnwer =>{
        const newAnswer = document.createElement("button")
        newAnswer.classList.add("button", "answer")
        newAnswer.textContent = asnwer.text
        if(asnwer.correct){
            newAnswer.dataset.correct = asnwer.correct
        }
        $answersContainer.appendChild(newAnswer)

        newAnswer.addEventListener("click", selectAnswer)
    })
}
function resetState(){
    while($answersContainer.firstChild){
        $answersContainer.removeChild($answersContainer.firstChild)
    }

    $nextQuestionButton.classList.add("hide")
}

function selectAnswer(event){
    const answerClicked= event.target

    if(answerClicked.dataset.correct){
        document.body.classList.add("correct")
        totalcorrect++
    }else {
        document.body.classList.add("incorrect")
    }

    document.querySelectorAll(".answer").forEach(button =>{
        if(button.dataset.correct){
            button.classList.add("correct")
        }else{
            button.classList.add("incorrect")
        }

        button.disabled = true
    })

    $nextQuestionButton.classList.remove("hide")  
    currentQuestionIndex++  
}
function finishGame(){
    const totalquestion= questions.length
    const performance= Math.floor(totalcorrect * 100 / totalquestion)

    let message= ""

    
    switch(true){
        case(performance >=90):
        message= "tu é BRABO quando o assunto é Futebol varzea :)"
        break
        case(performance>= 70):
        message="caraca se foi muito bem, se voce tentar mais uma vez vc acerta tudo, vamo la"
        break
        case(performance >= 30):
        message="da hora mano, vamos fazer de novo e acertar todas?"
        default:
        message="vish, nao foi tão bem, vamos fazer de novo e melhorar, tenho certeza que vai conseguir"
    }
    $questionscontainer.innerHTML=
    `
    <p class="final-message">
    Voce acertou ${totalcorrect} de ${totalquestion} Questões!
    <span>${message}</span>
    </p>
    <button onclick= window.location.reload() class="button">
    Refazer Quiz
    </button>
    `
    salvarPontuacao()
}
function salvarPontuacao(){
    const idUsuario= sessionStorage.ID_USUARIO
    fetch("/quizRoutes/cadastrarPontuacao", {
  method: "POST",
  headers: {                
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    // crie um atributo que recebe o valor recuperado aqui
    // Agora vá para o arquivo routes/usuario.js
    idUsuarioServer: idUsuario,
    qtdAcertosServer:totalcorrect,
  }),
})
  .then(function (resposta) {
    console.log("resposta: ", resposta);

    if (resposta.ok) {
     
    } else {
      throw "Houve um erro ao tentar realizar o cadastro!";
    }
  })
  .catch(function (resposta) {
    console.log(`#ERRO: ${resposta}`);
  });
}












const questions= [
    {
        question: "como é chamado o campo de jogo no futebol de varzea?",
        asnwer: [
            {text: "society", correct:false},
            {text: "terrão", correct:true},
            {text: "areião", correct:false},
            {text: "campinho", correct:false},
        ]
    },
    { 
        question: "O futebol de varzea tem torcida organizada?",
    asnwer: [
        {text: "Verdadeiro", correct:true},
        {text: "Falso", correct:false},
        ]
    },
    { 
        question: "Quantos jogadores formam um time de futebol de várzea em campo?",
    asnwer: [
        {text: "11", correct:true},
        {text: "9", correct:false},
        {text: "13", correct:false},
        {text: "22", correct:false},
        ]
    },
    { 
        question: "Qual é o termo usado para descrever um jogo de futebol de várzea?",
    asnwer: [
        {text: "Partida profissional", correct:false},
        {text: "Rachão", correct:true},
        {text: "Amistoso", correct:false},
        {text: "treino", correct:false},
        ]
    },
    { 
        question: "O futebol de Varzea revela jovens promessas nas comunidades",
    asnwer: [
        {text: "verdadeiro", correct:true},
        {text: "falso", correct:false},
        ]
    },
    
    { 
        question: "Como os times de futebol de várzea são geralmente formados e organizados?",
    asnwer: [
        {text: "Formados por proficionais", correct:false},
        {text: "organizados por ligas internacionais", correct:false},
        {text: "formados por amigos ou moradores, unidos pelo amor ao esporte", correct:true},
        {text: "São formados por técnicos profissionais", correct:false},
        ]
    },
    { 
        question: "O futebol de varzea so serve a pró do esporte.",
    asnwer: [
        {text: "verdadeiro", correct:false},
        {text: "falso", correct:true},
        ]
    },
    { 
        question: "Quais são os principais desafios enfrentados pelos jogadores de futebol de várzea?",
    asnwer: [
        {text: "Falta de apoio financeiro", correct:true},
        {text: "falta de jogadores", correct:false},
        {text: "falta de torcida", correct:false},
        {text: "Falta de onibus para chegar aos jogos", correct:false},
        ]
    },
    
    { 
        question: "oque diferencia a varzea do futebol profissional?",
    asnwer: [
        {text: "nao tem arbitro", correct:false},
        {text: "equipes financiadas por grandes empresas.", correct:false},
        {text: "Não segue as mesmas regras e regulamentos", correct:false},
        {text: "nível de visibilidade e mídia", correct:true},
        ]
    },
    { 
        question: "Os jogadores de futebol de várzea geralmente recebem salários pelo seus jogos. ",
    asnwer: [
        {text: "verdadeiro", correct:false},
        {text: "falso", correct:true},
        ]
    },
    
    

]