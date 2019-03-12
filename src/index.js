import readlineSync from 'readline-sync';

const rndNumber = () => (Math.random() * 100).toFixed(0);

const Question = () => {
  let isRight;
  const rndNum = rndNumber();
  const question = readlineSync.question(`Question: ${rndNum}\n`);
  if (question !== 'yes' && question !== 'no') {
    console.log(`'${question}' is wrong answer ;`);
    return 0;
  }
  if (rndNum % 2 === 0) {
    isRight = true;
  } else {
    isRight = false;
  }
  if ((question === 'yes' && isRight) || (question === 'no' && !isRight)) {
    console.log('Correct!');
    return 1;
  }
  console.log(`'${question}' is wrong answer ;(. Correct answer was '${question === 'yes' ? 'no' : 'yes'}'.`);
  return 0;
};


export default function () {
  let count = 0;
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".\n');
  const actual = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${actual}!`);

  while (count < 3) {
    const numQuestion = Question();
    count += 1;
    if (numQuestion === 0) { console.log(`Let's try again, ${actual}`); break; }
    if (count === 3) { console.log(`Congratulations, ${actual}!`); }
  }
}
