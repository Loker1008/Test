import readlineSync from 'readline-sync';
import startFirstGame from './games/brainEvenGame';
import startSecondGame from './games/brainCaclGame';

export default function (game = 'first') {
  let count = 0;
  console.log('Welcome to the Brain Games!');
  console.log(`${(game === 'first') ? 'Answer "yes" if number even otherwise answer "no".\n' : 'What is the result of the expression?\n'}`);


  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  while (count < 3) {
    const isRightAnswer = (game === 'first') ? startFirstGame() : startSecondGame();
    count += 1;
    if (isRightAnswer === false) { console.log(`Let's try again, ${userName}`); break; }
    if (count === 3) { console.log(`Congratulations, ${userName}!`); }
  }
}
