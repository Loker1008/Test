import readlineSync from 'readline-sync';
import { createRndNumber } from '../lib/rndFunctions';

const gameDescription = 'Answer "yes" if number even otherwise answer "no".';

const answerVerification = (cliResp, isRightAnswer) => {
  if ((cliResp === 'yes' && isRightAnswer) || (cliResp === 'no' && !isRightAnswer)) {
    return {
      isRightAnswer: true,
      message: 'Correct!',
    };
  }
  return {
    isRigthAnswer: false,
    message: `'${cliResp}' is wrong answer ;(. Correct answer was '${isRightAnswer ? 'yes' : 'no'}'.`,
  };
};

const start = () => {
  const rndNumber = createRndNumber();
  const cliResponse = readlineSync.question(`Question: ${rndNumber}\n`);

  const isRightResponse = (rndNumber % 2 === 0);
  return answerVerification(cliResponse, isRightResponse);
};

export { start, gameDescription, answerVerification };
