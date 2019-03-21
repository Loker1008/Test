import { createRndNumber, createRndOperator } from '../lib/rndFunctions';
import startGame from '..';

const gameDescription = 'What is the result of the expression?';

const makeQuestionData = () => {
  const firstRndNumber = createRndNumber();
  const secondRndNumber = createRndNumber();
  const operatorInt = createRndOperator();
  if (operatorInt === 0) {
    return {
      question: `${firstRndNumber} + ${secondRndNumber}`,
      result: firstRndNumber + secondRndNumber,
    };
  }
  if (operatorInt === 1) {
    return {
      question: `${firstRndNumber} - ${secondRndNumber}`,
      result: firstRndNumber - secondRndNumber,
    };
  }

  return {
    question: `${firstRndNumber} * ${secondRndNumber}`,
    result: firstRndNumber * secondRndNumber,
  };
};
const gameData = () => {
  const questionData = makeQuestionData();

  return {
    rightAnswer: String(questionData.result),
    question: questionData.question,
  };
};

export default () => {
  startGame(gameData, gameDescription);
};
