import readlineSync from 'readline-sync';

export default function (game) {
  const GAME_STEPS = 2;
  console.log('Welcome to the Brain Games!');
  console.log(`${(game === 'first') ? 'Answer "yes" if number even otherwise answer "no".\n' : 'What is the result of the expression?\n'}`);


  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  const gameIter = (gameStep) => {
    const response = game();
    if (!response.isRightAnswer) {
      console.log(response.message);
      console.log(`Let's try again, ${userName}`);
      return 0;
    }
    if (response.isRightAnswer) console.log(response.message);
    if (gameStep === 0) {
      console.log(`Congratulations, ${userName}!`);
      return false;
    }
    return gameIter(gameStep - 1);
  };

  gameIter(GAME_STEPS);
}
