const questions = [
    {
        question: "1. DOM stands for Document Object Model.",
        options: ["True", "False"],
        correctAnswer: 0,
        explanation: "DOM stands for Document Object Model."
    },
    {
        question: "2. getElementById() selects an element using its CSS class.",
        options: ["True", "False"],
        correctAnswer: 1,
        explanation: "getElementById() selects an element using its ID."
    },
    {
        question: "3. textContent can change the text inside an HTML element.",
        options: ["True", "False"],
        correctAnswer: 0,
        explanation: "textContent can read or change an element's text."
    },
    {
        question: "4. addEventListener() can respond to button clicks.",
        options: ["True", "False"],
        correctAnswer: 0,
        explanation: "addEventListener() responds to events."
    },
    {
        question: "5. document.createElement() creates a new HTML element.",
        options: ["True", "False"],
        correctAnswer: 0,
        explanation: "createElement() creates a new element."
    }
];
const structuredQuestions = [
    {
        question: "Explain the difference between HTML, CSS and JavaScript.",
        marks: 6,
        modelAnswer: "HTML provides the structure of a web page. CSS controls its appearance and layout. JavaScript adds behaviour and interactivity."
    },
    {
        question: "Describe the steps needed to run a TypeScript file in a web browser.",
        marks: 5,
        modelAnswer: "Write the code in a .ts file, configure TypeScript, compile it using npx tsc, ensure the generated JavaScript exists, link that JavaScript in HTML, and open the page in a browser."
    },
    {
        question: "Explain what happens when a user selects an answer in an interactive quiz.",
        marks: 5,
        modelAnswer: "The program reads the selected option, compares it with the correct answer, updates the score when appropriate, displays feedback, and allows the user to continue."
    },
    {
        question: "State four steps for using Git to save and upload changes to a remote repository.",
        marks: 4,
        modelAnswer: "Use git add to stage changes, git commit to record them, git push to upload them, and git status to check the working tree and staged changes."
    },
    {
        question: "Explain three ways to make a quiz app more reliable and user-friendly.",
        marks: 6,
        modelAnswer: "Validate the question data, prevent users from answering the same question multiple times, show clear feedback, provide a restart option, and make the layout responsive."
    }
];
[
    {
        question: "What does HTML stand for?",
        options: [
            "Hyper Text Markup Language",
            "High Transfer Machine Language",
            "Hyper Tool Multi Language",
            "Home Text Management Language"
        ],
        correctAnswer: 0,
        explanation: "HTML stands for Hyper Text Markup Language."
    },
    {
        question: "Which language is used to style web pages?",
        options: ["JavaScript", "HTML", "CSS", "SQL"],
        correctAnswer: 2,
        explanation: "CSS controls the appearance and layout of web pages."
    },
    {
        question: "Which HTML tag creates a hyperlink?",
        options: ["<link>", "<a>", "<href>", "<url>"],
        correctAnswer: 1,
        explanation: "The <a> tag creates a hyperlink using the href attribute."
    },
    {
        question: "Which keyword declares a variable that can be reassigned in JavaScript?",
        options: ["const", "fixed", "let", "static"],
        correctAnswer: 2,
        explanation: "The let keyword declares a block-scoped variable that can be reassigned."
    },
    {
        question: "Which symbol is used for strict equality in JavaScript?",
        options: ["=", "==", "===", "!="],
        correctAnswer: 2,
        explanation: "The === operator checks equality without converting operand types."
    },
    {
        question: "What is the purpose of TypeScript?",
        options: [
            "To replace HTML",
            "To add static type checking to JavaScript",
            "To store images",
            "To manage computer hardware"
        ],
        correctAnswer: 1,
        explanation: "TypeScript adds a type system to JavaScript and compiles to JavaScript."
    },
    {
        question: "Which HTML tag is used to display an image?",
        options: ["<picture-src>", "<img>", "<image>", "<src>"],
        correctAnswer: 1,
        explanation: "The <img> element displays an image using its src attribute."
    },
    {
        question: "Which CSS property changes text colour?",
        options: ["font-style", "background", "text-size", "color"],
        correctAnswer: 3,
        explanation: "The color property sets the foreground colour of text."
    },
    {
        question: "What does DOM stand for?",
        options: [
            "Document Object Model",
            "Data Operation Method",
            "Digital Ordinance Mode",
            "Document Order Manager"
        ],
        correctAnswer: 0,
        explanation: "The DOM represents a web document as objects that JavaScript can access."
    },
    {
        question: "Which method selects an element by its ID?",
        options: [
            "document.querySelectorAllById()",
            "document.getElementById()",
            "document.findId()",
            "document.getClass()"
        ],
        correctAnswer: 1,
        explanation: "getElementById() retrieves an element using its unique ID."
    },
    {
        question: "Which Git command saves a snapshot of staged changes?",
        options: ["git push", "git pull", "git commit", "git status"],
        correctAnswer: 2,
        explanation: "git commit records the staged changes in the repository history."
    },
    {
        question: "Which SQL command retrieves data from a table?",
        options: ["SELECT", "DELETE", "UPDATE", "DROP"],
        correctAnswer: 0,
        explanation: "SELECT is used to retrieve data from database tables."
    },
    {
        question: "What does API stand for?",
        options: [
            "Application Programming Interface",
            "Advanced Program Internet",
            "Applied Processing Input",
            "Automated Page Integration"
        ],
        correctAnswer: 0,
        explanation: "An API defines how software components communicate with each other."
    },
    {
        question: "Which HTTP status code commonly means a resource was not found?",
        options: ["200", "301", "404", "500"],
        correctAnswer: 2,
        explanation: "HTTP 404 indicates that the requested resource was not found."
    },
    {
        question: "Why should passwords be hashed before storage?",
        options: [
            "To make them shorter",
            "To help protect them if the database is exposed",
            "To display them automatically",
            "To make users log in without passwords"
        ],
        correctAnswer: 1,
        explanation: "Password hashing helps prevent stored passwords from being directly readable. Use a password-hashing algorithm designed for passwords, such as Argon2id."
    }
];
let structuredIndex = 0;
let structuredSubmitted = false;
function showStructuredQuestion() {
    const question = structuredQuestions[structuredIndex];
    if (!question)
        return;
    const progress = document.getElementById("structured-progress");
    const heading = document.getElementById("structured-question");
    const marks = document.getElementById("structured-marks");
    const answer = document.getElementById("structured-answer");
    const feedback = document.getElementById("structured-feedback");
    const submitButton = document.getElementById("submit-structured");
    const nextButton = document.getElementById("next-structured");
    if (!progress || !heading || !marks || !answer ||
        !feedback || !submitButton || !nextButton) {
        console.error("Structured quiz elements are missing from index.html.");
        return;
    }
    progress.textContent =
        `Question ${structuredIndex + 1} of ${structuredQuestions.length}`;
    heading.textContent = question.question;
    marks.textContent = `Total marks: ${question.marks}`;
    answer.value = "";
    answer.disabled = false;
    feedback.textContent = "";
    submitButton.disabled = false;
    nextButton.disabled = true;
    nextButton.textContent =
        structuredIndex === structuredQuestions.length - 1
            ? "Finish"
            : "Next Question";
    structuredSubmitted = false;
}
function submitStructuredAnswer() {
    if (structuredSubmitted)
        return;
    const answer = document.getElementById("structured-answer");
    const feedback = document.getElementById("structured-feedback");
    const submitButton = document.getElementById("submit-structured");
    const nextButton = document.getElementById("next-structured");
    const question = structuredQuestions[structuredIndex];
    if (!answer || !feedback || !submitButton || !nextButton || !question) {
        console.error("Could not find the structured quiz elements.");
        return;
    }
    if (answer.value.trim() === "") {
        feedback.textContent = "Please type your answer first.";
        return;
    }
    structuredSubmitted = true;
    answer.disabled = true;
    submitButton.disabled = true;
    nextButton.disabled = false;
    feedback.textContent =
        `Model answer: ${question.modelAnswer}`;
}
function nextStructuredQuestion() {
    if (!structuredSubmitted)
        return;
    if (structuredIndex < structuredQuestions.length - 1) {
        structuredIndex++;
        showStructuredQuestion();
    }
    else {
        const heading = document.getElementById("structured-question");
        const progress = document.getElementById("structured-progress");
        const marks = document.getElementById("structured-marks");
        const answer = document.getElementById("structured-answer");
        const feedback = document.getElementById("structured-feedback");
        const submitButton = document.getElementById("submit-structured");
        const nextButton = document.getElementById("next-structured");
        if (heading && progress && marks && answer &&
            feedback && submitButton && nextButton) {
            heading.textContent = "Structured Questions Completed!";
            progress.textContent = "You have reached the end.";
            marks.textContent = "";
            answer.value = "";
            answer.disabled = true;
            feedback.textContent = "Well done for completing the questions!";
            submitButton.disabled = true;
            nextButton.disabled = true;
        }
    }
}
document
    .getElementById("submit-structured")
    ?.addEventListener("click", submitStructuredAnswer);
document
    .getElementById("next-structured")
    ?.addEventListener("click", nextStructuredQuestion);
showStructuredQuestion();
if (questions.length === 0) {
    throw new Error("Add at least one question to the quiz.");
}
for (const question of questions) {
    if (question.options.length < 2 ||
        !Number.isInteger(question.correctAnswer) ||
        question.correctAnswer < 0 ||
        question.correctAnswer >= question.options.length) {
        throw new Error(`Invalid question or answer: ${question.question}`);
    }
}
let currentQuestionIndex = 0;
let score = 0;
let answered = false;
function getElement(id) {
    const element = document.getElementById(id);
    if (!element) {
        throw new Error(`Missing HTML element: #${id}`);
    }
    return element;
}
function showQuestion() {
    answered = false;
    const currentQuestion = questions[currentQuestionIndex];
    getElement("progress").textContent =
        `Question ${currentQuestionIndex + 1} of ${questions.length}`;
    getElement("question").textContent =
        currentQuestion.question;
    const optionsElement = getElement("options");
    optionsElement.replaceChildren();
    getElement("explanation").textContent = "";
    const nextButton = getElement("next-btn");
    nextButton.disabled = true;
    nextButton.textContent = "Next Question";
    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.type = "button";
        button.textContent = option;
        button.className = "option-btn";
        button.addEventListener("click", () => {
            checkAnswer(index);
        });
        optionsElement.appendChild(button);
    });
}
function checkAnswer(selectedIndex) {
    if (answered)
        return;
    answered = true;
    const currentQuestion = questions[currentQuestionIndex];
    const buttons = getElement("options")
        .querySelectorAll("button");
    buttons.forEach(button => {
        button.disabled = true;
    });
    const explanation = getElement("explanation");
    if (selectedIndex === currentQuestion.correctAnswer) {
        score++;
        buttons[selectedIndex].classList.add("correct");
        explanation.textContent =
            `Correct! ${currentQuestion.explanation}`;
    }
    else {
        buttons[selectedIndex].classList.add("incorrect");
        buttons[currentQuestion.correctAnswer]
            .classList.add("correct");
        explanation.textContent =
            `Incorrect. ${currentQuestion.explanation}`;
    }
    const nextButton = getElement("next-btn");
    nextButton.disabled = false;
    if (currentQuestionIndex === questions.length - 1) {
        nextButton.textContent = "See Results";
    }
}
function nextQuestion() {
    if (!answered)
        return;
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    }
    else {
        showResults();
    }
}
function showResults() {
    const quizScreen = getElement("quiz-screen");
    const percentage = Math.round((score / questions.length) * 100);
    let feedback;
    if (percentage >= 80) {
        feedback = "Excellent work! Keep it up!";
    }
    else if (percentage >= 50) {
        feedback = "Good effort! Keep practising!";
    }
    else {
        feedback = "Keep studying. You can improve!";
    }
    quizScreen.replaceChildren();
    const heading = document.createElement("h2");
    heading.textContent = "Quiz Completed!";
    const result = document.createElement("p");
    result.textContent =
        `You scored ${score} out of ${questions.length}.`;
    const percentageText = document.createElement("p");
    percentageText.textContent = `Your result: ${percentage}%`;
    const feedbackText = document.createElement("p");
    feedbackText.textContent = feedback;
    const restartButton = document.createElement("button");
    restartButton.textContent = "Restart Quiz";
    restartButton.type = "button";
    restartButton.addEventListener("click", restartQuiz);
    quizScreen.append(heading, result, percentageText, feedbackText, restartButton);
}
function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    answered = false;
    const quizScreen = getElement("quiz-screen");
    quizScreen.innerHTML = `
        <div class="quiz-info">
            <span id="progress"></span>
        </div>
        <h2 id="question"></h2>
        <div id="options"></div>
        <p id="explanation"></p>
        <button id="next-btn" type="button" disabled>
            Next Question
        </button>
    `;
    connectNextButton();
    showQuestion();
}
function connectNextButton() {
    getElement("next-btn")
        .addEventListener("click", nextQuestion);
}
connectNextButton();
showQuestion();
console.log("QUIZ FILE LOADED!");
export {};
