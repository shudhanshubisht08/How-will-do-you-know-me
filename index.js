
var readlineSync = require('readline-sync');
var chalk = require('chalk')
var userName = readlineSync.question(chalk.red('What is your name?'));
console.log('Welcome !' + userName)
console.log(' My self Shudhanshu Bisht Let us know me  !' + userName)

var score = 0;

function play(question, answer) {

  var userAnswer = readlineSync.question(chalk.green(question));

  if (userAnswer === answer) {

    console.log('right');

    score = score + 2;

  }

  else {
    console.log('wrong');

    score = score - 1;



  }

  console.log('Your score is ' + score)
  console.log('--------------------------');

}

var questions = [{

  question: 'where are you from?',
  answer: 'Rishikesh'
},

{
  question: ' Where are you study?',
  answer: 'NeogCamp'
},

{
  question: ' Who is your mentor ?',
  answer: 'Tanay Pratap'
},

{
  question: ' How many experince they have?',
  answer: 'Fresher'
},

]

for (var i = 0; i < questions.length; i++) {

  var currentresult = questions[i];

  play(currentresult.question, currentresult.answer)


}

console.log(' your final score is ' + score)
console.log(chalk.yellow('Thank you! nice to meet you' + (userName)));

if (score > 2) {

  console.log('Well Played!')

}
else {

  console.log('Better luck Next Time!')
}