import { createMinMaxRnd } from '../lib/rndFunctions';
import startGame from '..';

const makeElement = (progArr, progressionNum) => {
  const num = progArr[progArr.length - 1] + progressionNum;
  return num;
};

const createProgElements = (array, progressionStep) => {
  const element = makeElement(array, progressionStep);
  const newArr = [...array, element];
  if (newArr.length !== 10) {
    return createProgElements(newArr, progressionStep);
  }
  return newArr;
};

const hideElementProgression = (array) => {
  const hideIndex = createMinMaxRnd(1, 10);
  const questionArray = array.map((element, index) => {
    if (index === hideIndex) {
      return '..';
    }
    return element;
  });

  return {
    element: array[hideIndex],
    questionArray,
  };
};

const gameDescription = 'What number is missing in this progression?';

const gameData = () => {
  const firstProgressionElement = [createMinMaxRnd(1, 10)];
  const progressionStep = createMinMaxRnd(1, 10);

  const progression = createProgElements(firstProgressionElement, progressionStep);
  const questionData = hideElementProgression(progression);

  return {
    rightAnswer: String(questionData.element),
    question: questionData.questionArray,
  };
};

export default () => {
  startGame(gameData, gameDescription);
};
