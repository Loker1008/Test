import { createRndNumber } from '../lib/rndFunctions';

const gameDescription = 'Answer "yes" if number even otherwise answer "no".';

const start = () => {
  const getRndNum = createRndNumber();
  const getQuestion = () => `Question: ${getRndNum}\n`;
  const isRightResponse = (getRndNum % 2 === 0);
  const goodMessage = 'Correct!';
  const verificate = () => ((isRightResponse) ? 'yes' : 'no');
  const badMessage = `'is wrong answer ;(. Correct answer was '${verificate() ? 'yes' : 'no'}'.`;
  return {
    goodMess: goodMessage,
    badMess: badMessage,
    rightAnswer: verificate(),
    question: getQuestion(),
  };
};

export { start, gameDescription };
