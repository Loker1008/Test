import readlineSync from 'readline-sync';

export default function (game) {
  console.log('Welcome to the Brain Games!');
  console.log(`${(game === 'first') ? 'Answer "yes" if number even otherwise answer "no".\n' : 'What is the result of the expression?\n'}`);


  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  const startGame = (gameCount) => {
    if (gameCount === 0) {
      console.log(`Congratulations, ${userName}!`);
      return false;
    }
    const isRightAnswer = game();
    if (!isRightAnswer) {
      console.log(`Let's try again, ${userName}`);
      return 0;
    }
    return startGame(gameCount - 1);
  };

  startGame(3);
}
