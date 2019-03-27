import { createMinMaxRnd } from '../lib/rndFunctions';
import startGame from '..';

const gameDescription = 'Is this number prime?';

const MIN = 1;
const MAX = 100;

const isPrime = (num, counter) => {
  if (counter <= 1) {
    return true;
  }
  return num % counter === 0 ? false : isPrime(num, counter - 1);
};

const gameData = () => {
  const num = createMinMaxRnd(MIN, MAX);
  const counter = Math.floor(num / 2);
  const answer = isPrime(num, counter);

  return {
    rightAnswer: answer ? 'yes' : 'no',
    question: `Is this number prime? ${num}`,
  };
};

export default () => {
  startGame(gameData, gameDescription);
};
