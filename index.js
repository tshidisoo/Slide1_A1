// Quiz questions organized by category
const quizzes = {
    "alphabet": {
        title: "Alphabet & Words in English",
        questions: [
            {
                question: "How many letters are there in the English alphabet?",
                options: ["24", "25", "26", "27"],
                correctAnswer: "26",
                explanation: "The English alphabet consists of 26 letters: A through Z."
            },
            {
                question: "How many vowels are there in English?",
                options: ["4", "5", "6", "7"],
                correctAnswer: "5",
                explanation: "There are 5 vowels in English: A, E, I, O, and U."
            },
            {
                question: "Which of the following is NOT a vowel?",
                options: ["A", "E", "Y", "U"],
                correctAnswer: "Y",
                explanation: "Y is considered a consonant in English, although it can sometimes function as a vowel sound."
            },
            {
                question: "Which word has NO vowels?",
                options: ["Play", "Rhythm", "Speed", "Work"],
                correctAnswer: "Rhythm",
                explanation: "Rhythm has no vowels - Y is functioning as a consonant here."
            },
            {
                question: "In English, words can start with which of the following?",
                options: ["Only vowels", "Only consonants", "Both vowels and consonants", "Neither vowels nor consonants"],
                correctAnswer: "Both vowels and consonants",
                explanation: "English words can start with either vowels (e.g., 'ant') or consonants (e.g., 'ball')."
            },
            // New questions for alphabet category
            {
                question: "How many consonants are there in the English alphabet?",
                options: ["19", "20", "21", "22"],
                correctAnswer: "21",
                explanation: "There are 21 consonants in the English alphabet (26 letters minus 5 vowels)."
            },
            {
                question: "Which letter comes after 'P' in the English alphabet?",
                options: ["O", "Q", "R", "S"],
                correctAnswer: "Q",
                explanation: "The letter Q comes directly after P in the alphabet sequence."
            },
            {
                question: "Which letter comes before 'J' in the English alphabet?",
                options: ["H", "I", "K", "L"],
                correctAnswer: "I",
                explanation: "The letter I comes directly before J in the alphabet sequence."
            },
            {
                question: "Which of these words has the most vowels?",
                options: ["Beautiful", "Imagination", "Understand", "Computer"],
                correctAnswer: "Imagination",
                explanation: "Imagination has 5 vowels (i-a-i-a-io), while Beautiful has 4, Understand has 3, and Computer has 3."
            },
            {
                question: "Which of these contains a diphthong (two vowel sounds together)?",
                options: ["Cat", "Box", "Hat", "Pin"],
                correctAnswer: "Box",
                explanation: "Box contains the diphthong 'o' sound that glides into another vowel sound, while the others have single vowel sounds."
            }
        ]
    },
    "subjective-objective": {
        title: "Subjective & Objective Pronouns",
        questions: [
            {
                question: "Which of the following is a subjective/nominative pronoun?",
                options: ["Me", "Him", "They", "Us"],
                correctAnswer: "They",
                explanation: "They is a subjective pronoun used as the subject of a sentence."
            },
            {
                question: "Which of the following is an objective pronoun?",
                options: ["She", "We", "Your", "Her"],
                correctAnswer: "Her",
                explanation: "Her is an objective pronoun used as the object of a verb or preposition."
            },
            {
                question: "Select the correct subjective pronoun for a single male person.",
                options: ["I", "He", "She", "We"],
                correctAnswer: "He",
                explanation: "He is the subjective pronoun used for a male person."
            },
            {
                question: "Select the correct objective pronoun for multiple people.",
                options: ["They", "We", "Them", "Those"],
                correctAnswer: "Them",
                explanation: "Them is the objective pronoun used for multiple people."
            },
            {
                question: "Which sentence correctly uses a subjective pronoun?",
                options: ["Sarah told her to meet at the cafe.", "Him is an engineer.", "They are happy.", "John waved at we."],
                correctAnswer: "They are happy.",
                explanation: "They is correctly used as a subjective pronoun in 'They are happy.'"
            },
            // New questions for subjective-objective category
            {
                question: "In the sentence 'Please give it to ___', which pronoun is grammatically correct?",
                options: ["I", "Me", "My", "Mine"],
                correctAnswer: "Me",
                explanation: "Me is the correct objective pronoun to use after a preposition (to)."
            },
            {
                question: "Which sentence uses an objective pronoun correctly?",
                options: ["She gave the book to I.", "Us are going to the party.", "Him and I went to the store.", "The teacher asked her to answer."],
                correctAnswer: "The teacher asked her to answer.",
                explanation: "Her is correctly used as an objective pronoun after the verb 'asked'."
            },
            {
                question: "Which is the correct subjective pronoun to use when referring to yourself?",
                options: ["Me", "I", "My", "Mine"],
                correctAnswer: "I",
                explanation: "I is the correct subjective pronoun to use when referring to yourself as the subject of a sentence."
            },
            {
                question: "In the sentence '___ and Tom went to the cinema', which pronoun is correct?",
                options: ["Me", "Him", "I", "Them"],
                correctAnswer: "I",
                explanation: "I is the correct subjective pronoun since it's part of the subject of the sentence."
            },
            {
                question: "Which sentence uses subjective and objective pronouns correctly?",
                options: ["Me and her went swimming.", "Him and I are friends.", "She gave the gift to he.", "They invited my friend and I."],
                correctAnswer: "They invited my friend and I.",
                explanation: "They is correctly used as a subjective pronoun, and my friend and I is correctly used as the object of the verb 'invited'."
            }
        ]
    },
    "possessive": {
        title: "Possessive Pronouns & Adjectives",
        questions: [
            {
                question: "Which of the following is a possessive adjective?",
                options: ["Mine", "Yours", "Their", "Hers"],
                correctAnswer: "Their",
                explanation: "Their is a possessive adjective. Example: Their assignments."
            },
            {
                question: "Which of the following is a possessive pronoun?",
                options: ["My", "Your", "Her", "Mine"],
                correctAnswer: "Mine",
                explanation: "Mine is a possessive pronoun. Example: The book is mine."
            },
            {
                question: "Select the sentence with a correctly used possessive adjective.",
                options: ["The book on the shelf is my.", "This is my book on the shelf.", "The book is my on the shelf.", "My is the book on the shelf."],
                correctAnswer: "This is my book on the shelf.",
                explanation: "My is correctly used as a possessive adjective before the noun 'book'."
            },
            {
                question: "Select the sentence with a correctly used possessive pronoun.",
                options: ["The lunch in the fridge is her.", "Sarah remembered to bring she lunch to work.", "The lunch in the fridge is hers.", "Hers remembered to bring her lunch to work."],
                correctAnswer: "The lunch in the fridge is hers.",
                explanation: "Hers is correctly used as a possessive pronoun."
            },
            {
                question: "Which is the possessive adjective for 'it'?",
                options: ["It", "Its", "It's", "Itself"],
                correctAnswer: "Its",
                explanation: "Its is the possessive adjective for 'it'. Example: The cat licked its paws."
            },
            // New questions for possessive category
            {
                question: "Which is the possessive pronoun for 'we'?",
                options: ["Our", "Ours", "Us", "We's"],
                correctAnswer: "Ours",
                explanation: "Ours is the possessive pronoun for 'we'. Example: The victory is ours."
            },
            {
                question: "Which is the possessive adjective for 'you'?",
                options: ["You", "Yours", "Your", "You's"],
                correctAnswer: "Your",
                explanation: "Your is the possessive adjective for 'you'. Example: Is this your book?"
            },
            {
                question: "Select the sentence with a correctly used possessive pronoun.",
                options: ["This pen is her.", "That computer is our.", "Those shoes are theirs.", "The car is my."],
                correctAnswer: "Those shoes are theirs.",
                explanation: "Theirs is correctly used as a possessive pronoun at the end of a sentence."
            },
            {
                question: "Which sentence uses a possessive adjective correctly?",
                options: ["That is Johns book.", "That is John's book.", "That is Johns' book.", "That is John book."],
                correctAnswer: "That is John's book.",
                explanation: "John's is the correct possessive form for a singular possessor."
            },
            {
                question: "What is the difference between 'its' and 'it's'?",
                options: ["They are the same", "Its is possessive, it's is a contraction", "Its is a contraction, it's is possessive", "Its is plural, it's is singular"],
                correctAnswer: "Its is possessive, it's is a contraction",
                explanation: "Its is the possessive form of it (the cat chased its tail), while it's is a contraction of 'it is' or 'it has'."
            }
        ]
    },
    "articles": {
        title: "Articles",
        questions: [
            {
                question: "How many articles are there in English?",
                options: ["1", "2", "3", "4"],
                correctAnswer: "3",
                explanation: "There are 3 articles in English: a, an, and the."
            },
            {
                question: "Which indefinite article would you use before a word starting with a vowel sound?",
                options: ["A", "An", "The", "No article needed"],
                correctAnswer: "An",
                explanation: "An is used before words that begin with a vowel sound."
            },
            {
                question: "Which article would you use when referring to something specific?",
                options: ["A", "An", "The", "No article needed"],
                correctAnswer: "The",
                explanation: "The definite article 'the' is used when referring to something specific."
            },
            {
                question: "Select the sentence with the correct article usage.",
                options: ["I saw a elephant at the zoo.", "She bought an umbrella yesterday.", "He is an university student.", "They visited the NYC last summer."],
                correctAnswer: "She bought an umbrella yesterday.",
                explanation: "'An' is correctly used before 'umbrella', which starts with a vowel sound."
            },
            {
                question: "What type of article is 'the'?",
                options: ["Indefinite article", "Definite article", "Neutral article", "Possessive article"],
                correctAnswer: "Definite article",
                explanation: "'The' is the definite article in English, used for specific nouns."
            },
            // New questions for articles category
            {
                question: "Which sentence uses the correct article?",
                options: ["She is an doctor.", "He bought a orange.", "They own an house.", "I saw a unicorn."],
                correctAnswer: "I saw a unicorn.",
                explanation: "A unicorn is correct because 'unicorn' begins with a consonant sound /y/, not a vowel sound, despite being spelled with a vowel."
            },
            {
                question: "When would you use no article before a noun?",
                options: ["When talking about a specific item", "When talking about general plural nouns", "When talking about a single countable noun", "When talking about a proper name"],
                correctAnswer: "When talking about general plural nouns",
                explanation: "General plural nouns often don't need articles. Example: Cats are good pets (not 'The cats are good pets')."
            },
            {
                question: "Which sentence uses the article 'the' correctly?",
                options: ["The France is a beautiful country.", "I love the music.", "The my car is blue.", "The Mount Everest is the highest mountain."],
                correctAnswer: "I love the music.",
                explanation: "The is correctly used with 'music' as it refers to music in general or a specific type of music being discussed."
            },
            {
                question: "Which of the following words would use 'an' before it?",
                options: ["University", "European", "Useful", "Hour"],
                correctAnswer: "Hour",
                explanation: "An hour is correct because 'hour' begins with a vowel sound /aʊər/, even though it's spelled with a consonant."
            },
            {
                question: "Which sentence uses articles correctly?",
                options: ["I ate a apple for a lunch.", "She is the best student in an class.", "He wants to be an doctor in the future.", "I saw an honest man waiting at a bus stop."],
                correctAnswer: "I saw an honest man waiting at a bus stop.",
                explanation: "An honest (h is silent, so it starts with a vowel sound) and a bus stop (begins with a consonant sound) both use the correct articles."
            }
        ]
    }
};

// Game state
let currentQuiz = null;
let currentQuestionIndex = 0;
let score = 0;
let userAnswers = [];

// DOM Elements
const categorySelection = document.querySelector('.category-selection');
const gameContainer = document.querySelector('.game-container');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const categoryCards = document.querySelectorAll('.category-card');
const backBtn = document.getElementById('back-btn');
const resultBackBtn = document.getElementById('result-back-btn');
const quizTitle = document.getElementById('quiz-title');
const resultTitle = document.getElementById('result-title');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const progressBar = document.getElementById('progress-bar');
const progressText = document.getElementById('progress-text');
const scoreDisplay = document.getElementById('score-display');
const feedback = document.getElementById('feedback');
const nextBtn = document.getElementById('next-btn');
const finalScore = document.getElementById('final-score');
const resultMessage = document.getElementById('result-message');
const summaryContainer = document.getElementById('summary-container');
const restartBtn = document.getElementById('restart-btn');
const categoriesBtn = document.getElementById('categories-btn');

// Event listeners
categoryCards.forEach(card => {
    card.addEventListener('click', () => startQuiz(card.dataset.category));
});

backBtn.addEventListener('click', showCategories);
resultBackBtn.addEventListener('click', showCategories);
nextBtn.addEventListener('click', showNextQuestion);
restartBtn.addEventListener('click', restartQuiz);
categoriesBtn.addEventListener('click', showCategories);

// Functions
function startQuiz(category) {
    // Set current quiz and reset game state
    currentQuiz = quizzes[category];
    currentQuestionIndex = 0;
    score = 0;
    userAnswers = [];
    
    // Update quiz title
    quizTitle.textContent = currentQuiz.title;
    resultTitle.textContent = `${currentQuiz.title} Completed!`;
    
    // Hide category selection and show game container
    categorySelection.style.display = 'none';
    gameContainer.style.display = 'block';
    
    // Show question screen
    quizScreen.classList.add('active');
    resultScreen.classList.remove('active');
    
    // Load first question
    showQuestion(currentQuestionIndex);
    updateProgress();
    updateScore();
}

function showQuestion(index) {
    const question = currentQuiz.questions[index];
    
    // Update question text
    questionText.textContent = question.question;
    
    // Clear options container
    optionsContainer.innerHTML = '';
    
    // Create and append options
    question.options.forEach(option => {
        const optionElement = document.createElement('div');
        optionElement.classList.add('option');
        optionElement.textContent = option;
        optionElement.addEventListener('click', () => checkAnswer(option));
        optionsContainer.appendChild(optionElement);
    });
    
    // Hide feedback and next button
    feedback.classList.add('hidden');
    nextBtn.classList.add('hidden');
}

function checkAnswer(selectedOption) {
    const correctAnswer = currentQuiz.questions[currentQuestionIndex].correctAnswer;
    const isCorrect = selectedOption === correctAnswer;
    const explanation = currentQuiz.questions[currentQuestionIndex].explanation;
    
    // Store user's answer
    userAnswers.push({
        question: currentQuiz.questions[currentQuestionIndex].question,
        userAnswer: selectedOption,
        correctAnswer: correctAnswer,
        isCorrect: isCorrect,
        explanation: explanation
    });
    
    // Update score if answer is correct
    if (isCorrect) {
        score++;
        updateScore();
    }
    
    // Disable all options
    const options = document.querySelectorAll('.option');
    options.forEach(option => {
        option.classList.add('disabled');
        
        if (option.textContent === correctAnswer) {
            option.classList.add('correct');
        } else if (option.textContent === selectedOption && !isCorrect) {
            option.classList.add('incorrect');
        }
    });
    
    // Show feedback
    feedback.textContent = isCorrect ? 
        `Correct! ${explanation}` : 
        `Incorrect. The correct answer is: ${correctAnswer}. ${explanation}`;
    feedback.classList.remove('hidden');
    feedback.classList.add(isCorrect ? 'correct' : 'incorrect');
    
    // Show next button
    nextBtn.classList.remove('hidden');
}

function showNextQuestion() {
    currentQuestionIndex++;
    
    if (currentQuestionIndex < currentQuiz.questions.length) {
        // Show next question
        showQuestion(currentQuestionIndex);
        updateProgress();
    } else {
        // End quiz and show results
        showResults();
    }
}

function updateProgress() {
    const progressPercentage = ((currentQuestionIndex + 1) / currentQuiz.questions.length) * 100;
    progressBar.style.width = `${progressPercentage}%`;
    progressText.textContent = `Question ${currentQuestionIndex + 1}/${currentQuiz.questions.length}`;
}

function updateScore() {
    scoreDisplay.textContent = `Score: ${score}`;
}

function showResults() {
    // Hide question screen and show result screen
    quizScreen.classList.remove('active');
    resultScreen.classList.add('active');
    
    // Update final score
    finalScore.textContent = `Your score: ${score}/${currentQuiz.questions.length}`;
    
    // Show result message
    const percentage = (score / currentQuiz.questions.length) * 100;
    let message = '';
    let messageColor = '';
    
    if (percentage >= 90) {
        message = "Excellent! You've mastered this topic!";
        messageColor = '#28a745';
    } else if (percentage >= 70) {
        message = "Good job! You have a solid understanding of this topic.";
        messageColor = '#3498db';
    } else if (percentage >= 50) {
        message = "Not bad! With a bit more practice, you'll improve.";
        messageColor = '#f39c12';
    } else {
        message = "Keep practicing! This topic takes time to master.";
        messageColor = '#e74c3c';
    }
    
    resultMessage.textContent = message;
    resultMessage.style.backgroundColor = messageColor + '20'; // 20% opacity
    resultMessage.style.color = messageColor;
    
    // Display question summary
    showSummary();
}

function showSummary() {
    summaryContainer.innerHTML = '';
    
    userAnswers.forEach((answer, index) => {
        const summaryItem = document.createElement('div');
        summaryItem.classList.add('summary-item');
        
        const questionEl = document.createElement('div');
        questionEl.classList.add('summary-question');
        questionEl.textContent = `${index + 1}. ${answer.question}`;
        
        const answerEl = document.createElement('div');
        answerEl.classList.add('summary-answer');
        
        const userAnswerEl = document.createElement('span');
        userAnswerEl.classList.add('summary-user-answer');
        if (answer.isCorrect) {
            userAnswerEl.classList.add('correct');
        }
        userAnswerEl.textContent = `Your answer: ${answer.userAnswer}`;
        
        const correctAnswerEl = document.createElement('span');
        correctAnswerEl.classList.add('summary-correct-answer');
        if (!answer.isCorrect) {
            correctAnswerEl.textContent = `Correct: ${answer.correctAnswer}`;
        }
        
        answerEl.appendChild(userAnswerEl);
        answerEl.appendChild(correctAnswerEl);
        
        summaryItem.appendChild(questionEl);
        summaryItem.appendChild(answerEl);
        
        if (!answer.isCorrect) {
            const explanationEl = document.createElement('div');
            explanationEl.textContent = answer.explanation;
            explanationEl.style.marginTop = '5px';
            explanationEl.style.fontSize = '0.9rem';
            explanationEl.style.fontStyle = 'italic';
            summaryItem.appendChild(explanationEl);
        }
        
        summaryContainer.appendChild(summaryItem);
    });
}

function restartQuiz() {
    startQuiz(Object.keys(quizzes).find(key => quizzes[key] === currentQuiz));
}

function showCategories() {
    // Hide game container and show category selection
    gameContainer.style.display = 'none';
    categorySelection.style.display = 'block';
    
    // Reset active screens
    quizScreen.classList.remove('active');
    resultScreen.classList.remove('active');
}

// Initialize the page with categories view