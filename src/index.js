import readlineSync from 'readline-sync';

export default function (gameData) {
  const GAME_STEPS = 3;
  console.log('Welcome to the Brain Games!');
  console.log(gameData.gameDescription);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  const gameIter = (gameStep) => {
    if (gameStep === 0) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }
    const response = gameData.start();
    if (!response.isRightAnswer) {
      console.log(response.message);
      console.log(`Let's try again, ${userName}`);
      return;
    }
    if (response.isRightAnswer) {
      console.log(response.message);
    }
    gameIter(gameStep - 1);
  };

  gameIter(GAME_STEPS);
}
