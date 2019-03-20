import { createRndNumber, createRndOperator } from '../lib/rndFunctions';
import startGame from '..';

const makeQuestionData = (firstRndNumber, secondRndNumber, operatorInt) => {
  if (operatorInt === 0) {
    return {
      operator: '+',
      result: firstRndNumber + secondRndNumber,
    };
  }
  if (operatorInt === 1) {
    return {
      operator: '-',
      result: firstRndNumber - secondRndNumber,
    };
  }

  return {
    operator: '*',
    result: firstRndNumber * secondRndNumber,
  };
};

const gameDescription = 'What is the result of the expression?';

const gameData = () => {
  const firstRndNumber = createRndNumber();
  const secondRndNumber = createRndNumber();
  const operatorInt = createRndOperator();
  const questionData = makeQuestionData(firstRndNumber, secondRndNumber, operatorInt);

  return {
    rightAnswer: String(questionData.result),
    question: `${firstRndNumber} ${questionData.operator} ${secondRndNumber}`,
  };
};

export default () => {
  startGame(gameData, gameDescription);
};
