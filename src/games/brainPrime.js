import { createMinMaxRnd } from '../lib/rndFunctions';
import startGame from '..';

const gameDescription = 'What number is missing in this progression?';

const MIN = 1;
const MAX = 100;

const isPrime = (num, counter) => {
  if (counter <= 1) {
    return true;
  }
  if (num % counter === 0) {
    return false;
  }
  return isPrime(num, counter - 1);
};


const gameData = () => {
  const num = createMinMaxRnd(MIN, MAX);
  const counter = num - 1;
  const answer = isPrime(num, counter);

  return {
    rightAnswer: answer ? 'yes' : 'no',
    question: `Is this number prime? ${num}`,
  };
};

export default () => {
  startGame(gameData, gameDescription);
};
