import readlineSync from 'readline-sync';
import { createRndNumber, createRndOperator } from '../lib/rndFunctions';

const startSecondGame = () => {
  let isRight;
  const firstRndNumber = parseInt(createRndNumber(), 10);
  const secondRndNumber = parseInt(createRndNumber(), 10);
  const rndOperator = parseInt(createRndOperator(), 10);
  let visualOperator;
  let rezult;

  switch (rndOperator) {
    case 0:
      visualOperator = '+';
      rezult = firstRndNumber + secondRndNumber;
      break;
    case 1:
      visualOperator = '-';
      rezult = firstRndNumber - secondRndNumber;
      break;

    default:
      visualOperator = '*';
      rezult = firstRndNumber * secondRndNumber;
      break;
  }

  const cliResponse = readlineSync.question(`Question: ${firstRndNumber} ${visualOperator} ${secondRndNumber}\n`);
  isRight = (rezult === parseInt(cliResponse, 10)) ? isRight = true : isRight = false;

  if (isRight) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${cliResponse}' is wrong answer ;(. Correct answer was '${rezult}'.`);
  return false;
};

export default startSecondGame;
