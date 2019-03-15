import { createRndNumber, createRndOperator } from '../lib/rndFunctions';

const makeCalculation = (operatorInt, firstNumber, secondNumber) => {
  switch (operatorInt) {
    case 0:
      return { visualOperator: '+', result: firstNumber + secondNumber };
    case 1:
      return { visualOperator: '-', result: firstNumber - secondNumber };

    default:
      return { visualOperator: '*', result: firstNumber * secondNumber };
  }
};

const gameDescription = 'What is the result of the expression?';

const start = () => {
  const firstRndNumber = createRndNumber();
  const secondRndNumber = createRndNumber();
  const operatorInt = createRndOperator();
  const calculate = makeCalculation(operatorInt, firstRndNumber, secondRndNumber);
  const getQuestion = () => `Question: ${firstRndNumber} ${calculate.visualOperator} ${secondRndNumber}\n`;
  const goodMessage = 'Correct!';
  const badMessage = `is wrong answer ;(. Correct answer was '${calculate.result}'.`;

  return {
    goodMess: goodMessage,
    badMess: badMessage,
    rightAnswer: String(calculate.result),
    question: getQuestion(),
  };
};

export { start, gameDescription };
