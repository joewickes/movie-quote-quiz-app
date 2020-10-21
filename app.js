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
      correctAnswer: 'baby',
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


// PLAN
// find out what the current question is 
// find out what the correct answer is for that question
// find out what answer the user submitted
// check to see if the user answer matches the correct answer
// if user answer matches correct answer - go to correct page
// if user answer does not match correct answer - go to incorrect page
//

//PLAN FOR TODAY
//CREATE A CONTAINER FOR THE CORRECT ANSWERS
//CREATE A CONTAINER FOR THE INCORRECT ANSWERS
//CREATE A CONTAINER FOR THE CURRENT QUEATIONS
//LOOP THROUGH THE QUESTIONS TO PLACE THEM IN THE PROPER CONTAINERS

function checkAnswer(){
  let correctAnswer = store.questions[store.questionNumber].correctAnswer 
  let userInput = $('[type="radio"]:checked').val();
  if (userInput === correctAnswer){
    $("body").html(`
      <div class="correct-page">
        <h2>Correct!!!</h2>
        <p>Why you were correct!</p>
        <button class="button">Next</button
        <p>correct: 0 and incorrect: 0</p>
        <p>Question 1 of 5</p>
      </div>
    `);
  } else {
    $("body").html(`
      <div class="incorrect-page">
        <h2>Incorrect</h2>
        <p>Why you were incorrect...</p>
        <button class="button">Next</button>
        <p>correct: 0 and incorrect: 0</p>
        <p>Question 1 of 5</p>
      </div>
    `)
  }
}