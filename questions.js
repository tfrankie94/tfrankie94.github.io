var questions = [
	{
	    question: "What is 1*5?",
	    choices: [5, 10, 15, 20],
	    correctAnswer: 5
  },
	{
	    question: "What is 2*5?",
	    choices: [1, 10, 4, 58, 2],
	    correctAnswer: 10
  },
	{
			question: "What is 3*5?",
			choices: [18, 28, 15],
			correctAnswer: 15
	},
  {
      question: "What is 4*5?",
      choices: [58, 20, 1515],
      correctAnswer: 20
  },
  {
      question: "What is 5*5?",
      choices: [121, 25, 15],
      correctAnswer: 25
  }
];

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
}

shuffle(questions)
