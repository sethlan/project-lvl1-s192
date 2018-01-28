import { cons, car } from 'hexlet-pairs';
import games from '..';

const generateQuestionAndAnswer = (numbers) => {
  const printProgression = (number, step, count, whatPlaceSkip) => {
    if (count === 0) { return ''; }
    if (count === (11 - whatPlaceSkip)) { return `.... ${printProgression(number + step, step, count - 1, whatPlaceSkip)}`; }
    return `${number} ${printProgression(number + step, step, count - 1, whatPlaceSkip)}`;
  };
  const quantityOfMembers = 10;
  const randomStep = Math.floor(Math.random() * 100);
  const randomPlace = Math.floor(Math.random() * 10);
  return cons(
    printProgression(car(numbers), randomStep, quantityOfMembers, randomPlace),
    String(car(numbers) + (randomStep * (randomPlace - 1))),
  );
};
export default () => games('What number is missing in this progression?', generateQuestionAndAnswer);
