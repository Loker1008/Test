import readlineSync from 'readline-sync';
import { createRndNumber, createRndOperator } from '../lib/rndFunctions';

const makeCalculation = (operatorInt, firstNumber, secondNumber) => {
  switch (operatorInt) {
    case 0:
      return { visualOperator: '+', result: firstNumber + secondNumber };
    case 1:
      return { visualOperator: '-', result: firstNumber - secondNumber };

    default:
      return { visualOperator: '*', result: firstNumber * secondNumber };
  }
};

const startSecondGame = () => {
  const firstRndNumber = createRndNumber();
  const secondRndNumber = createRndNumber();
  const rndOperator = createRndOperator();
  const calculate = makeCalculation(rndOperator, firstRndNumber, secondRndNumber);

  const cliResponse = readlineSync.question(`Question: ${firstRndNumber} ${calculate.visualOperator} ${secondRndNumber}\n`);
  const isRightResponse = (calculate.result === parseInt(cliResponse, 10));

  if (isRightResponse) {
    return { isRightAnswer: true, message: 'Correct!' };
  }
  return { isRightAnswer: false, message: `'${cliResponse}' is wrong answer ;(. Correct answer was '${calculate.result}'.` };
};

export default startSecondGame;
