/* eslint-disable no-undef */
/**
 * Example store structure
 */
const store = {
  // 5 or more questions are required
  questions: [
    {
      question: '"Nobody puts ___ in a corner"',
      answers: [
        'baby',
        'me',
        'us',
        'you'
      ],
      correctAnswer: 'baby',
    },
    {
      question: '"My mama always said life is like a box of ___"',
      answers: [
        'pasta',
        'sunshine',
        'kittens',
        'chocolates'
      ],
      correctAnswer: 'chocolates'
    },
    {
      question: '"Are you not ___?"',
      answers: [
        'satisfied',
        'entertained',
        'ready',
        'overwhelmed'
      ],
      correctAnswer: 'entertained'
    },
    {
      question: '"May the ___ be with you"',
      answers: [
        'Force',
        'Movement',
        'Momentum',
        'Inertia'
      ],
      correctAnswer: 'Force'
    },
    {
      question: '"You\'re killing me, ___"',
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
    <form id="start">
      <div>
        <input type="submit" value="Let's Go!">
      </div>  
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
    <form id="answers">
      <div class="radio-questions">
        <div>
          <input type="radio" name="answer" id="" value="${current.answers[0]}" required>
          <label for="answer">${current.answers[0]}</label>
        </div>
        <div>
          <input type="radio" name="answer" id="" value="${current.answers[1]}">
          <label for="answer">${current.answers[1]}</label>
        </div>
        <div>
          <input type="radio" name="answer" id="" value="${current.answers[2]}">
          <label for="answer">${current.answers[2]}</label>
        </div>
        <div>
          <input type="radio" name="answer" id="" value="${current.answers[3]}">
          <label for="answer">${current.answers[3]}</label>
        </div>
      </div>
      <div>
        <input type="submit" value="Submit Answer">
      </div>
    </form>
    <div>
      <p>correct: ${correct} and incorrect: ${incorrect}</p>
    </div>
    <div>
      <p>Question ${qNum} out of ${total}</p>
    </div>
    </div>`
  ;
}

// CORRECT PAGE TEMPLATE
function createCorrectPage() {
  // The current questionNumber
  const qNum = store.questionNumber;
  // The total questions to be asked
  const total = store.questions.length;
  // The current score (total correct answers)
  const correct = store.score;
  // Incorrect score to return
  // (question number - current question) - correctly answered questions
  const incorrect = (qNum) - correct;
  let correctA = store.questions[store.questionNumber - 1].correctAnswer;

  return `<div class="correct-page">
    <h2>Correct!!!</h2>
    <form id="next">
      <div class="why">
        <p>The answer "${correctA}" was right!</p>
      </div>
      <div>
        <input type="submit" value="Next">
      </div>
    </form>
    <div>
      <p>Correct: ${correct}     Incorrect: ${incorrect}</p>
    </div>
    <div>
      <p>Question ${qNum} out of ${total}</p>
    </div>
    </div>`
  ;
}

// INCORRECT PAGE TEMPLATE
function createIncorrectPage() {
  // The current questionNumber
  const qNum = store.questionNumber;
  // The total questions to be asked
  const total = store.questions.length;
  // The current score (total correct answers)
  const correct = store.score;
  // Incorrect score to return
  // (question number - current question) - correctly answered questions
  const incorrect = (qNum) - correct;
  let correctA = store.questions[store.questionNumber - 1].correctAnswer;

  return `<div class="correct-page">
    <h2>Sorry, that's incorrect...</h2>
    <form id="next">
      <div class="why">
        <p>The correct answer was ${correctA}.</p>
      </div>
      <div>
        <input type="submit" value="Next">
      </div>
    </form>
    <div>
      <p>Correct: ${correct} Incorrect: ${incorrect}</p>
    </div>
    <div>
      <p>Question ${qNum} out of ${total}</p>
    </div>
    </div>`
  ;
}

// RESULTS PAGE TEMPLATE
function createResultsPage() {
  // The current questionNumber
  const qNum = store.questionNumber;
  // The current score (total correct answers)
  const correct = store.score;
  // Incorrect score to return
  // (question number - current question) - correctly answered questions
  const incorrect = (qNum - 1) - correct;

  return `<div class="results-page">
  <div class="results-page">
    <h2>Results</h2>
    <div>
      <p>correct: ${correct} and incorrect: ${incorrect}</p>
    </div>
    <form id="restart">
      <input type="submit" value="Restart">
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
  $('main').html(renderedString);
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


function resultsPage() {
  const correct = store.score;
  
  const incorrect = questionNumber - correct;

  return `<div class="start-page">
  <h2>How'd you do?</h2>
  <div>
    <p>Correct: ${correct} and Incorrect: ${incorrect}</p> 
  </div>
    <form id="restart">
      <input type="submit" value="Restart">
    </form>
  </div>`
}




/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)


function handleStart (){
  $('#start').on('submit', function(e){
    e.preventDefault();
    store.quizStarted = true;
    store.questionNumber++;
    render();
    handleStart();
    handleSubmit();
    handleNext();
    handleRestart();
  })
}


// SUBMIT EVENT HANDLER
function handleSubmit() {
  $('#answers').on('submit', function(e) {
    e.preventDefault();
    console.log('Question Handled');
    let answer = $('[type="radio"]:checked').val();
    let correct = store.questions[store.questionNumber - 1].correctAnswer;
    // check current answer against correct answer
    // if the current answer is correct, change isCorrect to true
    if (answer === correct) {
      store.isCorrect = true;
      store.score++;
    }
    // if the current answer is wrong, change isCorrect to false
    if (answer !== correct) {
      store.isCorrect = false;
    }
    
    
    render();
    handleStart();
    handleSubmit();
    handleNext();
    handleRestart();
  });
}

// NEXT EVENT HANDLER
function handleNext() {
  $('#next').on('submit', function(e) {
    e.preventDefault();
    store.questionNumber++;
    store.isCorrect = null;
    render();
    handleStart();
    handleSubmit();
    handleNext();
    handleRestart();
  });
}

// RESTART EVENT HANDLER
function handleRestart() {
  $('#restart').on('submit', function(e) {
    e.preventDefault();
    store.questionNumber = 1;
    store.score = 0;
    store.isCorrect = null;
    render();
    handleStart();
    handleSubmit();
    handleNext();
    handleRestart();
  });
}



function main() {
  render();
  handleStart();
  handleSubmit();
  handleNext();
  handleRestart();
}

// Wait for page to load
$(main);

// HTML TEMPLATES

// <!--
//     <div class="start-page">
//       <h2>Are you ready?</h2>
//       <form id="start">
//         <div>
//           <input type="submit" value="Let's Go">
//         </div>  
//       </form>
//     </div>
//     -->

//     <!-- Question Page -->
//     <!--
//     <div class="question-page">
//       <h2>Quote</h2>
//       <form id="answers">
//         <div class="radio-questions">
//           <div>
//             <input type="radio" name="question" id="">
//             <label for="question">Thing 1</label>
//           </div>
//           <div>
//             <input type="radio" name="question" id="">
//             <label for="question">Thing 2</label>
//           </div>
//           <div>
//             <input type="radio" name="question" id="">
//             <label for="question">Thing 3</label>
//           </div>
//           <div>
//             <input type="radio" name="question" id="">
//             <label for="question">Thing 4</label>
//           </div>
//         </div>
//         <div>
//           <input type="submit" value="Submit Answer">
//         </div>
//       </form>
//       <div>
//         <p>correct: 0 and incorrect: 0</p>
//       </div>
//       <div>
//         <p>Question 1 of 5</p>
//       </div>
//     </div>
    

//     <!-- Correct Page -->
//     <!--
//     <div class="correct-page">
//       <h2>Correct!!!</h2>
//       <form>
//         <div class="why">
//           <p>Why you were correct!</p>
//         </div>
//         <div>
//           <input type="submit" value="Next">
//         </div>
//       </form>
//       <div>
//         <p>correct: 0 and incorrect: 0</p>
//       </div>
//       <div>
//         <p>Question 1 of 5</p>
//       </div>
//     </div>
//     -->

//     <!-- Incorrect Page -->
//     <!--
//     <div class="correct-page">
//       <h2>Sorry, that's incorrect...</h2>
//       <form>
//         <div class="why">
//           <p>Why you were wrong...</p>
//         </div>
//         <div>
//           <input type="submit" value="Next">
//         </div>
//       </form>
//       <div>
//         <p>correct: 0 and incorrect: 0</p>
//       </div>
//       <div>
//         <p>Question 1 of 5</p>
//       </div>
//     </div>
//     -->

//     <!-- Results Page -->
//     <!--
//     <div class="results-page">
//       <h2>Results</h2>
//       <div>
//         <p>correct: 0 and incorrect: 0</p>
//       </div>
//       <form>
//         <input type="submit" value="Restart">
//       </form>
//     </div>
//     --></div>


