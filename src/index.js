import readlineSync from 'readline-sync';

export default function (gameData, gameDescription) {
  const GAME_STEPS = 3;
  console.log('Welcome to the Brain Games!');
  console.log(gameDescription);
  const userName = readlineSync.question('May  I have your name? ');
  console.log(`Hello, ${userName}!`);

  const gameIter = (gameStep) => {
    if (gameStep === 0) {
      console.log(`Congratulations, ${userName}!`);
      return;
    }
    const response = gameData();
    const cliResponse = readlineSync.question(`Question: ${response.question} \n`);


    if (response.rightAnswer !== cliResponse) {
      console.log(`${cliResponse}'is wrong answer ;(. Correct answer was '${response.rightAnswer}`);
      console.log(`Let's try again, ${userName}`);
      return;
    }
    console.log('Correct!');

    gameIter(gameStep - 1);
  };

  gameIter(GAME_STEPS);
}
