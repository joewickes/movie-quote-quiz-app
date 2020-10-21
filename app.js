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
      question: 'My mama always said life is like a box of ___',
      answers: [
        'pasta',
        'sunshine',
        'kittens',
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

// START PAGE

function startPage(){
  let startPage = ` 
    <div class="start-page">
    <h2>Are you ready?</h2>
    <form>
       <button id="start" type="submit" >Let's Go!</button>
     </form>
    </div>`;
    return startPage
}

//QUESTION PAGE


/********** RENDER FUNCTION(S) **********/

// This function conditionally replaces the contents of the <main> tag based on the state of the store

function handleStartPage (){
  $('main').on('click', '#start', function(){
    store.quizStarted === true;
    render();
  })
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

