import { cons } from 'hexlet-pairs';
import games from '..';

const findBig = array => array.reduce((acc, element) => (acc > element ? acc : element));
const findSmall = array => array.reduce((acc, element) => (acc < element ? acc : element));
const randomArray = () => {
  const randomLength = Math.floor(Math.random() * 4);
  const array = [];
  for (let i = 0; i <= randomLength; i += 1) {
    array[i] = Math.floor(Math.random() * 8) + 1;
  }
  return array;
};
const isBalanced = (array) => {
  if (array.length === 1) { return true; }
  const big = findBig(array);
  const small = findSmall(array);
  return (big === small || big === small + 1);
};
const balanceIt = (array) => {
  if (isBalanced(array)) { return array; }
  const big = findBig(array);
  const small = findSmall(array);
  const newArray = array;
  newArray[array.indexOf(big)] -= 1;
  newArray[array.indexOf(small)] += 1;
  return balanceIt(array);
};
const generateQuestionAndAnswer = () => {
  const array = randomArray();
  return cons(array.join(''), balanceIt(array).sort().join(''));
};
export default () => games('Balance the given number.', generateQuestionAndAnswer);
