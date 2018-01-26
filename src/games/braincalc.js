import { cons, car, cdr } from 'hexlet-pairs';
import games from '..';

const randomOperation = (numbers) => {
  // const random = Math.floor(Math.random() * 2);
  if (car(numbers) * cdr(numbers) < 200) { return cons('*', car(numbers) * cdr(numbers)); }
  if (car(numbers) * cdr(numbers) < 500) { return cons('+', car(numbers) + cdr(numbers)); }
  return cons('-', car(numbers) - cdr(numbers));
};

export default () => games(
  'What is the result of the expression?', 3,
  element => `${car(element)} ${car(randomOperation(element))} ${cdr(element)}`,
  element => String(cdr(randomOperation(element))), 1, 100,
);
