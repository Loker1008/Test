import { createMinMaxRnd } from '../lib/rndFunctions';
import startGame from '..';

const MIN = 100;
const MAX = 10000;

const isBalanced = (maxNumIndex, minNumIndex) => (maxNumIndex <= minNumIndex + 1);

const makeBalance = (arr) => {
  const maxNum = Math.max.apply(null, arr);
  const minNum = Math.min.apply(null, arr);

  const balancedArray = arr.map((element, index, array) => {
    const maxIndex = array.indexOf(maxNum);
    const minIndex = array.indexOf(minNum);
    if (index === maxIndex) return element - 1;
    if (index === minIndex) return element + 1;
    return element;
  });

  if (!isBalanced(maxNum, minNum)) { return makeBalance(balancedArray); }
  return balancedArray;
};

const gameDescription = 'Balance the given number.';

const gameData = () => {
  const rndNum = createMinMaxRnd(MIN, MAX);
  const numberArray = String(rndNum).split('').map(element => Number(element));

  const result = makeBalance(numberArray).sort().join('');
  const question = `${rndNum}`;

  return {
    rightAnswer: String(result),
    question,
  };
};

export default () => {
  startGame(gameData, gameDescription);
};
