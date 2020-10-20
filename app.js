/* eslint-disable no-undef */
/**
 * Example store structure
 */
const store = {
  // 5 or more questions are required
  questions: [
    {
      question: 'Nobody puts ___ in a corner',
      answers: [
        'baby',
        'me',
        'us',
        'you'
      ],
      correctAnswer: 'Dirty Dancing',
    },
    {
      question: 'My mama alwyas said life is like a box of ___',
      answers: [
        'pasta',
        'sunshine',
        'kitens',
        'chocolate'
      ],
      correctAnswer: 'chocolate'
    },
    {
      question: 'Are you not ___?',
      answers: [
        'satisfied',
        'entertained',
        'ready',
        'overwhelmed'
      ],
      correctAnswer: 'entertained'
    },
    {
      question: 'May the ___ be with you',
      answers: [
        'Force',
        'Movement',
        'Momentum',
        'Inertia'
      ],
      correctAnswer: 'Force'
    },
    {
      question: 'You\'re killing me, ___',
      answers: [
        'Buddy',
        'Man',
        'Smalls',
        'Biggie'
      ],
      correctAnswer: 'Smalls'
    }
  ],
  quizStarted: false,
  questionNumber: 0,
  score: 0,
  isCorrect: null,
};

/**
 * 
 * Technical requirements:
 * 
 * Your app should include a render() function, that regenerates the view each time the store is updated. 
 * See your course material and access support for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 * SEE BELOW FOR THE CATEGORIES OF THE TYPES OF FUNCTIONS YOU WILL BE CREATING 👇
 * 
 */

/********** TEMPLATE GENERATION FUNCTIONS **********/

// These functions return HTML templates

// START PAGE TEMPLATE
function createStartPage() {
  return `<div class="start-page">
    <h2>Are you ready?</h2>
    <form>
      <button type="submit">Start</button>
    </form>
    </div>`
  ;
}

// QUESTION PAGE TEMPLATE
function createQuestionPage() {
  // The total questions to be asked
  const total = store.questions.length;
  // The current questionNumber
  const qNum = store.questionNumber;
  // Current question object
  const current = store.questions[qNum - 1];
  // The current score (total correct answers)
  const correct = store.score;
  // Incorrect score to return
  // (question number - current question) - correctly answered questions
  const incorrect = (qNum - 1) - correct;

  return `<div class="question-page">
    <h2>${current.question}</h2>
    <form>
      <label for="question">${current.answers[0]}</label>
      <input type="radio" name="question" id="">
      <label for="question">${current.answers[1]}</label>
      <input type="radio" name="question" id="">
      <label for="question">${current.answers[2]}</label>
      <input type="radio" name="question" id="">
      <label for="question">${current.answers[3]}</label>
      <input type="radio" name="question" id="">
      <button type="submit">Sumbit</button>
    </form>
          <p>correct: ${correct} and incorrect: ${incorrect}</p>
          <p>Question ${qNum} out of ${total}</p>
    </div>`
  ;
}

// CORRECT PAGE TEMPLATE
function createCorrectPage() {
  // The total questions to be asked
  const total = store.questions.length;
  // The current score (total correct answers)
  const correct = store.score;
  // Incorrect score to return
  // (question number - current question) - correctly answered questions
  const incorrect = (qNum - 1) - correct;

  return `<div class="correct-page">
    <h2>Correct!!!</h2>
    <p>Why you were correct!</p>
    <form>
      <button type="submit">Next</button>
    </form>
    <p>correct: ${correct} and incorrect: ${incorrect}</p>
    <p>Question ${qNum} out of ${total}</p>
    </div>`
  ;
}

// INCORRECT PAGE TEMPLATE
function createIncorrectPage() {
  // The total questions to be asked
  const total = store.questions.length;
  // The current score (total correct answers)
  const correct = store.score;
  // Incorrect score to return
  // (question number - current question) - correctly answered questions
  const incorrect = (qNum - 1) - correct;

  return `<div class="incorrect-page">
    <h2>Correct!!!</h2>
    <p>Why you were incorrect...</p>
    <form>
      <button type="submit">Next</button>
    </form>
    <p>correct: ${correct} and incorrect: ${incorrect}</p>
    <p>Question ${qNum} out of ${total}</p>
    </div>`
  ;
}

// RESULTS PAGE TEMPLATE
function createResultsPage() {
  // The total questions to be asked
  const total = store.questions.length;
  // The current score (total correct answers)
  const correct = store.score;
  // Incorrect score to return
  // (question number - current question) - correctly answered questions
  const incorrect = (qNum - 1) - correct;

  return `<div class="results-page">
    <h2>Results</h2>
    <p>correct: ${correct} and incorrect: ${incorrect}</p>
    <form>
      <button type="submit">Next</button>
    </form>
    </div>`
  ;
}

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store
// RENDER FUNCTION
function render() {

  const renderedString = createRenderString(store);

  // insert html into DOM
  $('.display').html(renderedString);
}

// WHICH TEMPLATE TO DISPLAY
function createRenderString(obj) {
  if (obj.quizStarted === false) {
    // return start page
    return createStartPage();
  }

  // if there are more questions to be asked
  if (obj.questionNumber <= obj.questions.length) {
    if (obj.isCorrect === null) {
      // return current question page
      return createQuestionPage();
    } else if (obj.isCorrect === true) {
      // return correct page
      return createCorrectPage();
    } else if (obj.isCorrect === false) {
      // return incorrect page
      return createIncorrectPage();
    }
  }

  // else, return results page
  return createResultsPage();
}

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)

// START EVENT HANDLER
function handleStart() {
  $('.display').on('submit', '#start', function() {
    store.quizStarted === true;
    render();
  });
}

// SUBMIT EVENT HANDLER
function handleSubmit() {
  $('.display').on('submit', '#question', function() {
    // check current answer against correct answer
    // if the current answer is correct, change isCorrect to true
    // if the current answer is wrong, change isCorrect to false
    render();
  });
}

// NEXT EVENT HANDLER
function handleNext() {
  $('.display').on('submit', '#next', function() {
    store.questionNumber++;
    // change isCorrect to null
    // if there are more questions, display the next question
    // if there aren't any more questions, display the results page
  });
}



function main() {
  render();
  handleStart();
  handleSubmit();
  handleNext();
}

// Wait for page to load
$(main);