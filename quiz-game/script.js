const questions = [
  {
  category: "Geography",
  question: "What's a continent that's also a country?",
  choices: ["Australia", "Asia", "Africa"],
  answer: "Australia"
  },

  {
  category: "Science",
  question: "What is the chemical symbol for water?",
  choices: ["CO2", "H2O","NaCl"],
  answer: "H2O"
  },

  {
  category: "History",
  question: "Who was the first President of the United States?",
  choices: ["George Washington", "Thomas Jefferson", "Abraham Lincoln"],
  answer: "George Washington"
  },

  {
  category: "Astronomy",
  question: "Which planet is known as the Red Planet?",
  choices: ["Venus", "Jupiter", "Mars"],
  answer: "Mars"
  },

  {
  category: "Nature",
  question: "What is the largest land mammal alive today?",
  choices: ["African Elephant", "Blue Whale", "Hippopotamus"],
  answer: "African Elephant"
  }
]

function getRandomQuestion(setOfQuestion) {
  const randomQuestion = Math.floor(Math.random() * setOfQuestion.length);
  return setOfQuestion[randomQuestion];
}

function getRandomComputerChoice(setOfChoices) {
  const randomComputerChoice = Math.floor(Math.random() * setOfChoices.length);
  return setOfChoices[randomComputerChoice];
}

function getResults(randomQuestion, randomComputerChoice) {
  if(randomComputerChoice === randomQuestion.answer){
    return "The computer's choice is correct!"
  } else {
    return `The computer's choice is wrong. The correct answer is: ${randomQuestion.answer}`;
  }
}

const pickedQuestion = getRandomQuestion(questions);

console.log(pickedQuestion);

const pickedChoice = getRandomComputerChoice(pickedQuestion.choices);

console.log(getResults(pickedQuestion, pickedChoice));
