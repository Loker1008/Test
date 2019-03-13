import readlineSync from 'readline-sync';
import { createRndNumber } from '../lib/rndFunctions';

const startFirstGame = () => {
  const rndNumber = createRndNumber();
  const cliResponse = readlineSync.question(`Question: ${rndNumber}\n`);

  const isRightResponse = (rndNumber % 2 === 0);

  if ((cliResponse === 'yes' && isRightResponse) || (cliResponse === 'no' && !isRightResponse)) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${cliResponse}' is wrong answer ;(. Correct answer was '${cliResponse === 'yes' ? 'no' : 'yes'}'.`);
  return false;
};

export default startFirstGame;
