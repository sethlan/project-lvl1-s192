import { cons, car, cdr } from 'hexlet-pairs';
import games from '..';

const generateQuestionAndAnswer = (numbers) => {
  const random = Math.floor(Math.random() * 3);
  if (random === 0) { return cons(`${car(numbers)} * ${cdr(numbers)}`, String(car(numbers) * cdr(numbers))); }
  if (random === 1) { return cons(`${car(numbers)} + ${cdr(numbers)}`, String(car(numbers) + cdr(numbers))); }
  return cons(`${car(numbers)} - ${cdr(numbers)}`, String(car(numbers) - cdr(numbers)));
};

export default () => games('What is the result of the expression?', generateQuestionAndAnswer);
