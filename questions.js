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
      question: "What is 6*5?",
      choices: [123, 30, 125, 122],
      correctAnswer: 30
  },
	{
			question: "What is 7*5?",
			choices: [194, 35, 632, 82],
			correctAnswer: 35
	},
	{
			question: "What is 8*5?",
			choices: [124, 40, 932, 52],
			correctAnswer: 40
	},
	{
			question: "What is 9*5?",
			choices: [212, 45, 435, 123],
			correctAnswer: 45
	},
	{
			question: "What is 10*5?",
			choices: [234, 50, 235, 123],
			correctAnswer: 50
	},
	{
			question: "What is 11*5?",
			choices: [456, 55, 24, 453],
			correctAnswer: 55
	},
	{
			question: "What is 12*5?",
			choices: [786, 60, 534, 128],
			correctAnswer: 60
	},
];

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
}

shuffle(questions)
