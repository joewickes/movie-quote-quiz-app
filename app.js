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
  score: 0
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

/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

/********** EVENT HANDLER FUNCTIONS **********/

// These functions handle events (submit, click, etc)

function render() {
  console.log('Rendering page...');

  const renderedString = createRenderString(store);
  console.log(renderedString);

  // insert html into DOM
  $('.display').html(renderedString);
}

// function createRenderString(obj) {
//   const handledStart = handleStart();

//   const handledQuestionSubmit = handleSubmit();

//   const handledNext = handleNext();

// }

function main() {
  render();
}

$(main);


// function createDisplayString(obj) {
//   // if typeOfString === start
//   // display start page
//   if (obj.quizStarted === false) {
//     return startPage();
//   }

//   obj.questionNumber++;
//   return makeQuestionPage();
// }

// function makeQuestionPage() {
//   const qNum = store.questionNumber;
//   const current = store.questions[qNum - 1];
//   const correct = store.score;
//   const incorrect = (qNum - 1) - correct;
//   return `<div class="question-page">
//     <h2>${current.question}</h2>
//     <form>
//       <label for="question">${current.answers[0]}</label>
//       <input type="radio" name="question" id="">
//       <label for="question">${current.answers[1]}</label>
//       <input type="radio" name="question" id="">
//       <label for="question">${current.answers[2]}</label>
//       <input type="radio" name="question" id="">
//       <label for="question">${current.answers[3]}</label>
//       <input type="radio" name="question" id="">
//       <button type="submit">Sumbit</button>
//     </form>
//           <p>correct: ${correct} and incorrect: ${incorrect}</p>
//     </div>`;
// }
