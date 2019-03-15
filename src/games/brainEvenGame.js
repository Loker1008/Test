import { createRndNumber } from '../lib/rndFunctions';
import startGame from '..';

const gameDescription = 'Answer "yes" if number even otherwise answer "no".';

const gameData = () => {
  const num = createRndNumber();
  const getQuestion = `${num}`;
  const isRightResponse = (num % 2 === 0);
  const verificate = () => ((isRightResponse) ? 'yes' : 'no');
  return {
    rightAnswer: verificate(),
    question: getQuestion,
  };
};

export default () => {
  startGame(gameData, gameDescription);
};
