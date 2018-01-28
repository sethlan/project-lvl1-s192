/*
import { cons, car } from 'hexlet-pairs';
import games from '..';

const findBig = number => (number < 10 ? number : Math.max(
  number % 10,
  findBig(Math.floor(number / 10)),
));
const findSmall = number => (number < 10 ? number : Math.min(
  number % 10,
  findBig(Math.floor(number / 10)),
));
const isBalanced = (number) => {
  if (number <= 9) { return true; }
  const big = findBig(number);
  const small = findSmall(number);
  return (big === small || big === small + 1);
};
const balanceIt = (number) => {
  if (isBalanced(number)) { return number; }
  const big = findBig(number);
  const small = findSmall(number);
  return balanceIt(`${big - 1}${small + 1}`);
};
const sort = (number) => {
  if (number <= 9) { return number; }
  const small = findSmall(number);
  return `${small}${sort(s)}`;
};
const generateQuestionAndAnswer = numbers => cons(car(numbers), sort(balanceIt(car(numbers))));
export default () => games('Balance the given number.', generateQuestionAndAnswer);
*/
