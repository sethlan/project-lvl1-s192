import { cons, car } from 'hexlet-pairs';
import readlineSync from 'readline-sync';
import games from '..';

const createArray = number => String(number).split('');
const createNumber = (array) => {
  let numb = '';
  for (let i = 0; i < array.length; i += 1) {
    numb += array[i];
  }
  return Number(numb);
};
const findBig = number => (number <= 9 ? number : Math.max(
  number % 10,
  findBig(Math.floor(number / 10)),
));
const findIndexOfBig = (array) => {
  let find = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] >= array[find]) { find = i; }
  }
  return find;
};
const findIndexOfSmall = (array) => {
  let find = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] <= array[find]) { find = i; }
  }
  return find;
};

const findSmall = number => (number <= 9 ? number : Math.min(
  number % 10,
  findSmall(Math.floor(number / 10)),
));
const isBalanced = (number) => {
  if (number <= 9) { return true; }
  const big = findBig(number);
  const small = findSmall(number);
  // console.log(`${big} ${small} `);
  return (big === small || big === small + 1);
};
const balanceIt = (number) => {
  // console.log(`${number}`);
  // readlineSync.question('Begin ');
  if (isBalanced(number)) { return number; }
  // console.log(`${number}`);
  // readlineSync.question('May I have your name? ');
  const big = findBig(number);
  const small = findSmall(number);
  const numberAsArray = createArray(number);
  numberAsArray[findIndexOfBig(numberAsArray)] = Number(numberAsArray[findIndexOfBig(numberAsArray)]) - 1;
  numberAsArray[findIndexOfSmall(numberAsArray)] = Number(numberAsArray[findIndexOfSmall(numberAsArray)]) + 1;
  // console.log(`${number} ${numberAsArray} ${big} ${small} ${findIndexOfBig(numberAsArray)} ${findIndexOfSmall(numberAsArray)}`);
  // readlineSync.question(' ');
  return balanceIt(createNumber(numberAsArray));
};
const sort = (number) => {
  if (number <= 9) { return number; }
  const numberAsArray = createArray(number);
  numberAsArray.sort();
  return String(createNumber(numberAsArray));
};
const generateQuestionAndAnswer = numbers => cons(car(numbers), sort(balanceIt(car(numbers))));
export default () => games('Balance the given number.', generateQuestionAndAnswer);
