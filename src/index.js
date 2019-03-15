import readlineSync from 'readline-sync';

export default function (gameData) {
  const GAME_STEPS = 3;
  console.log('Welcome to the Brain Games!');
  console.log(gameData.gameDescription);
  const userName = readlineSync.question('May  I have your name? ');
  console.log(`Hello, ${userName}!`);

  const gameIter = (gameStep) => {
    if (gameStep === 0) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }
    const response = gameData.start();
    const cliResponse = readlineSync.question(`${response.question}`);


    if (response.rightAnswer !== cliResponse) {
      console.log(`${typeof response.rightAnswer}------------------------------`);
      console.log(`${cliResponse} ${response.badMess}`);
      console.log(`Let's try again, ${userName}`);
      return;
    }
    if (response.rightAnswer === cliResponse) {
      console.log(response.goodMess);
    }
    gameIter(gameStep - 1);
  };

  gameIter(GAME_STEPS);
}
