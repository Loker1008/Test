import { createRndNumber, createRndOperator } from '../lib/rndFunctions';
import startGame from '..';

const makeCalculation = () => {
  const firstRndNumber = createRndNumber();
  const secondRndNumber = createRndNumber();
  const operatorInt = createRndOperator();

  switch (operatorInt) {
    case 0:
      return {
        getQuestion: `${firstRndNumber} + ${secondRndNumber}`,
        result: firstRndNumber + secondRndNumber,
      };
    case 1:
      return {
        getQuestion: `${firstRndNumber} - ${secondRndNumber}`,
        result: firstRndNumber - secondRndNumber,
      };

    default:
      return {
        getQuestion: `${firstRndNumber} + ${secondRndNumber}`,
        result: firstRndNumber * secondRndNumber,
      };
  }
};

const gameDescription = 'What is the result of the expression?';

const gameData = () => {
  const questionData = makeCalculation();
  const { getQuestion } = questionData;

  return {
    rightAnswer: String(questionData.result),
    question: getQuestion,
  };
};

export default () => {
  startGame(gameData, gameDescription);
};
