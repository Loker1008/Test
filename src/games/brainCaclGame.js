import readlineSync from 'readline-sync';
import { createRndNumber, createRndOperator } from '../lib/rndFunctions';

const startSecondGame = () => {
  const firstRndNumber = createRndNumber();
  const secondRndNumber = createRndNumber();
  const rndOperator = createRndOperator();
  let visualOperator;
  let result;

  switch (rndOperator) {
    case 0:
      visualOperator = '+';
      result = firstRndNumber + secondRndNumber;
      break;
    case 1:
      visualOperator = '-';
      result = firstRndNumber - secondRndNumber;
      break;

    default:
      visualOperator = '*';
      result = firstRndNumber * secondRndNumber;
      break;
  }

  const cliResponse = readlineSync.question(`Question: ${firstRndNumber} ${visualOperator} ${secondRndNumber}\n`);
  const isRightResponse = (result === parseInt(cliResponse, 10));

  if (isRightResponse) {
    return { isRightAnswer: true, message: 'Correct!' };
  }
  return { isRightAnswer: false, message: `'${cliResponse}' is wrong answer ;(. Correct answer was '${result}'.` };
};

export default startSecondGame;
