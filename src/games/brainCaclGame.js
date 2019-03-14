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

const answerVerification = (cliResp, isRightAnswer, calc) => {
  if (isRightAnswer) {
    return { isRightAnswer: true, message: 'Correct!' };
  }
  return { isRightAnswer: false, message: `'${cliResp}' is wrong answer ;(. Correct answer was '${calc.result}'.` };
};

const gameDescription = 'What is the result of the expression?';

const start = () => {
  const firstRndNumber = createRndNumber();
  const secondRndNumber = createRndNumber();
  const operatorInt = createRndOperator();
  const calculate = makeCalculation(operatorInt, firstRndNumber, secondRndNumber);

  const cliResponse = readlineSync.question(`Question: ${firstRndNumber} ${calculate.visualOperator} ${secondRndNumber}\n`);
  const isRightResponse = (calculate.result === parseInt(cliResponse, 10));

  return answerVerification(cliResponse, isRightResponse, calculate);
};

export { start, gameDescription };
