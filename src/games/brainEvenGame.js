import readlineSync from 'readline-sync';
import { createRndNumber } from '../lib/rndFunctions';

const startFirstGame = () => {
  let isRight;
  const rndNumber = createRndNumber();
  const cliResponse = readlineSync.question(`Question: ${rndNumber}\n`);

  isRight = (rndNumber % 2 === 0) ? isRight = true : isRight = false;

  if ((cliResponse === 'yes' && isRight) || (cliResponse === 'no' && !isRight)) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${cliResponse}' is wrong answer ;(. Correct answer was '${cliResponse === 'yes' ? 'no' : 'yes'}'.`);
  return false;
};

export default startFirstGame;
