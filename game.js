//setting our variable
const question = document.querySelector('#question')
const choices = array.from(document.querySelectorAll('.choice-text'))
const progressText = document.querySelector('#progressText')
const scorText = document.querySelector('#score')
const progressBarFull = document.querySelector('#progressBarFull')
 let currentQuestion = {}
 let acceptingAnswers = true
 let score = 0
 let questionCounter = 0
 let availableQuestions  = []
 //the question that we going to use in our game
 let questions = [
    {
        question: 'how many states in usa',
        choice1: '50',
        choice2: '52',
        choice3: '53',
        choice4: '49',
        answer: 1,
    },
    {
        question: 'who is the first president of the united states',
        choice1: 'Richard Henry Lee',
        choice2: 'abraham lincoln',
        choice3: 'John Hanson',
        choice4: 'George Washington',
        answer: 4
    },
    {
        question: 'how many states in usa',
        choice1: '50',
        choice2: '51',
        choice3: '52',
        choice4: '49',
        answer: 1
    },
    {
        question: 'who is the first state in usa',
        choice1: 'new york',
        choice2: 'texas',
        choice3: 'delaware',
        choice4: 'california',
        answer: 3
    }
 ]