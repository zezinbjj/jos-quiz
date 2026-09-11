// Lista expandida de perguntas e respostas do Quiz
const questions = [
    {
        question: "Qual país venceu a Copa do Mundo de 2022?",
        options: ["França", "Argentina", "Brasil", "Alemanha"],
        answer: 1 // Argentina
    },
    {
        question: "Qual jogador tem mais Bolas de Ouro na história?",
        options: ["Cristiano Ronaldo", "Pelé", "Lionel Messi", "Ronaldinho Gaúcho"],
        answer: 2 // Lionel Messi
    },
    {
        question: "Qual clube possui mais títulos da UEFA Champions League?",
        options: ["AC Milan", "Barcelona", "Liverpool", "Real Madrid"],
        answer: 3 // Real Madrid
    },
    {
        question: "Em que ano o Brasil conquistou seu primeiro título da Copa do Mundo?",
        options: ["1958", "1962", "1970", "1950"],
        answer: 0 // 1958
    },
    {
        question: "Quem é o maior artilheiro da história da Champions League?",
        options: ["Lionel Messi", "Robert Lewandowski", "Cristiano Ronaldo", "Karim Benzema"],
        answer: 2 // Cristiano Ronaldo
    },
    {
        question: "Qual seleção é conhecida como 'Laranja Mecânica'?",
        options: ["Holanda", "Alemanha", "Bélgica", "Espanha"],
        answer: 0 // Holanda
    },
    {
        question: "Qual jogador brasileiro venceu a Bola de Ouro em 2007?",
        options: ["Ronaldo Nazário", "Kaká", "Ronaldinho Gaúcho", "Rivaldo"],
        answer: 1 // Kaká
    },
    {
        question: "Onde foi realizada a primeira Copa do Mundo em 1930?",
        options: ["Brasil", "Itália", "Uruguai", "França"],
        answer: 2 // Uruguai
    },
    {
        question: "Qual clube brasileiro é conhecido como 'O Imortal'?",
        options: ["Flamengo", "Grêmio", "Palmeiras", "Santos"],
        answer: 1 // Grêmio
    },
    {
        question: "Quem é conhecido como o 'Rei do Futebol'?",
        options: ["Maradona", "Pelé", "Zico", "Cruyff"],
        answer: 1 // Pelé
    }
];

// Elementos do DOM
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const progressElement = document.getElementById("progress");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const scoreText = document.getElementById("score-text");

let currentQuestionIndex = 0;
let score = 0;
let canAnswer = true;

// Inicia o Quiz
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    quizScreen.classList.remove("hide");
    resultScreen.classList.add("hide");
    showQuestion();
}

// Exibe a pergunta atual
function showQuestion() {
    canAnswer = true;
    const currentQuestion = questions[currentQuestionIndex];
    
    questionElement.textContent = currentQuestion.question;
    progressElement.textContent = `Pergunta ${currentQuestionIndex + 1} de ${questions.length}`;
    
    // Limpa as opções anteriores
    optionsElement.innerHTML = "";

    // Cria os botões para cada opção
    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("btn-option");
        button.addEventListener("click", () => selectOption(index, button));
        optionsElement.appendChild(button);
    });
}

// Processa a seleção da opção
function selectOption(selectedIndex, selectedButton) {
    if (!canAnswer) return;
    canAnswer = false;

    const currentQuestion = questions[currentQuestionIndex];
    const buttons = optionsElement.querySelectorAll(".btn-option");

    if (selectedIndex === currentQuestion.answer) {
        selectedButton.classList.add("correct");
        score++;
    } else {
        selectedButton.classList.add("incorrect");
        buttons[currentQuestion.answer].classList.add("correct");
    }

    // Tempo de transição para a próxima pergunta (1.2 segundos)
    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            showQuestion();
        } else {
            showResult();
        }
    }, 1200);
}

// Exibe o resultado final
function showResult() {
    quizScreen.classList.add("hide");
    resultScreen.classList.remove("hide");
    scoreText.textContent = `Você acertou ${score} de ${questions.length} perguntas!`;
}

// Reinicia o Quiz
function restartQuiz() {
    startQuiz();
}

// Inicializa o jogo ao carregar a página
startQuiz();
