import { createRndNumber, createRndOperator } from '../lib/rndFunctions';
import startGame from '..';

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

const gameDescription = 'What is the result of the expression?';

const gameData = () => {
  const firstRndNumber = createRndNumber();
  const secondRndNumber = createRndNumber();
  const operatorInt = createRndOperator();
  const calculate = makeCalculation(operatorInt, firstRndNumber, secondRndNumber);
  const getQuestion = `${firstRndNumber} ${calculate.visualOperator} ${secondRndNumber}`;

  return {
    rightAnswer: String(calculate.result),
    question: getQuestion,
  };
};

export default () => {
  startGame(gameData, gameDescription);
};
