import readlineSync from 'readline-sync';
import { createRndNumber, createRndOperator } from '../lib/rndFunctions';

const startSecondGame = () => {
  const firstRndNumber = createRndNumber();
  const secondRndNumber = createRndNumber();
  const rndOperator = createRndOperator();
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
  const isRightResponse = (rezult === parseInt(cliResponse, 10));

  if (isRightResponse) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${cliResponse}' is wrong answer ;(. Correct answer was '${rezult}'.`);
  return false;
};

export default startSecondGame;
