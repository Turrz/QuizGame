// Quiz Main 
const quizData = [
    // Question 1
    {
        question: "What does CSS stand for?",
        answers : {
            a: "Computer Science Study",
            b: "Cascading Style Sheets",
            c: "Conventional Set Study",
            d: "None of The Above!",
        },
        correct: "b",
    },
    // Question 2
    {
        question: "What does HTML stand for?",
        answers : {
            a: "Hacking To Make Linux",
            b: "Hypertext Markup Language",
            c: "Hyperphoto Make Link",
            d: "None of The Above!",
        },
        correct: "b",
    
    },
    // Question 3
    {
        question: "Hyperphoto Make Link",
        answers : {
            a: "Photo Hyper Press Languge",
            b: "Hypertext Preprocessor",
            c: "Hypertext Provider",
            d: "None of The Above!",
        },
        correct: "b",
    },
    // Question 4
    {
        question: "What does JavaScript do?",
        answers : {
            a: "Makes The Website Function",
            b: "Makes The Website's Design",
            c: "Does Data Analysis",
            d: "None of The Above!",
        },
        correct: "a",
    },
    // Question 5
    {
        question: "What is Python best for?",
        answers : {
            a: "Data Analysis",
            b: "Making An Interface",
            c: "Displaying A Nice Image",
            d: "None of The Above!",
        },
        correct: "a",
    },
    // Question 6
    {
        question: "What does VS Code Stand for?",
        answers : {
            a: "Visual Studio Code",
            b: "Visual Studio Code",
            c: "Viral SQL Code",
            d: "None of The Above!",
        },
        correct: "a",
    },
    // Question 7
    {
        question: "When was Python introduced?",
        answers : {
            a: "2003",
            b: "1989",
            c: "1991",
            d: "2000",
        },
        correct: "c",
    },
    // Question 8
    {
        question: "When was JavaScript introduced?",
        answers : {
            a: "1995",
            b: "1996",
            c: "1999",
            d: "2004",
        },
        correct: "",
    },
    // Question 9
    {
        question: "When was CSS introduced?",
        answers : {
            a: "2010",
            b: "1996",
            c: "1995",
            d: "1994",
        },
        correct: "d",
    },
    // Question 10
    {
        question: "When was HTML introduced?",
        answers : {
            a: "1998",
            b: "1991",
            c: "1997",
            d: "2003",
        },
        correct: "b",
    },

];

const quiz= document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {


    deselectAnswers()
    
    const currentQuizData = quizData[currentQuiz]
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEls => answerEls.checked = false)
}

function getSelected() {
    let answerEls
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
        if(answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++
        
        if(currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
            <h2>You answered ${score}/${quizData.length} questions correctly</h2>

            <button onclick="location.reload()">Reload</button>
            `
        }
    }
})            
