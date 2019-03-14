import readlineSync from 'readline-sync';
import { createRndNumber } from '../lib/rndFunctions';

const startFirstGame = () => {
  const rndNumber = createRndNumber();
  const cliResponse = readlineSync.question(`Question: ${rndNumber}\n`);

  const isRightResponse = (rndNumber % 2 === 0);

  if ((cliResponse === 'yes' && isRightResponse) || (cliResponse === 'no' && !isRightResponse)) {
    return { isRightAnswer: true, message: 'Correct!' };
  }
  return { isRigthAnswer: false, message: `'${cliResponse}' is wrong answer ;(. Correct answer was '${cliResponse === 'yes' ? 'no' : 'yes'}'.` };
};

export default startFirstGame;
