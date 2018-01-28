/*
import { cons, car } from 'hexlet-pairs';
import readlineSync from 'readline-sync';
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
const sort = (numb) => {
  if (numb <= 9) { return numb; }
  const numbStr = String(numb);
  const small = findSmall(numbStr);
  let newNum = '';
  for (let count = 0; count < numbStr.length; count += 1) {
    if (count !== small) {
      newNum += numbStr[count];
    }
  }
  return numbStr[small] + sort(newNum);
};
const generateQuestionAndAnswer = numbers => cons(car(numbers), sort(balanceIt(car(numbers))));
export default () => games('Balance the given number.', generateQuestionAndAnswer);
*/
