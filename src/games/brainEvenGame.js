import { createRndNumber } from '../lib/rndFunctions';
import startGame from '..';

const gameDescription = 'Answer "yes" if number even otherwise answer "no".';
const gameData = () => {
  const num = createRndNumber();
  const isRightResponse = (num % 2 === 0) ? 'yes' : 'no';
  return {
    rightAnswer: isRightResponse,
    question: String(num),
  };
};

export default () => {
  startGame(gameData, gameDescription);
};
