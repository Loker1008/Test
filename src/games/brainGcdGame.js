import { createRndNumber } from '../lib/rndFunctions';
import startGame from '..';

const findNOD = (firstNumber, secondNumber) => {
  if (!secondNumber) return firstNumber;
  return findNOD(secondNumber, firstNumber % secondNumber);
};

const gameDescription = 'Find the greatest common divisior of given numbers.';

const gameData = () => {
  const firstRndNumber = createRndNumber();
  const secondRndNumber = createRndNumber();
  const result = findNOD(firstRndNumber, secondRndNumber);
  const question = `${firstRndNumber} ${secondRndNumber}`;

  return {
    rightAnswer: String(result),
    question,
  };
};

export default () => {
  startGame(gameData, gameDescription);
};
