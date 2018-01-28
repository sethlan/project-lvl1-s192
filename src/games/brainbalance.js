import { cons, car } from 'hexlet-pairs';
import games from '..';
import readlineSync from 'readline-sync';

/*
const createArray = number => String(number).split('');
const findBig = number => String(number).reduce((a, b) => Math.max(a, b));
const findSmall = number => Math.min(String(number));
const isBalanced = (number) => {
  if (number <= 9) { return true; }
  const big = Number(findBig(number));
  const small = Number(findSmall(number));
  return (big === small || big === small + 1);
};
const balanceIt = (number) => {
  if (isBalanced(number)) { return number; }
  const big = findBig(number);
  const small = findSmall(number);
  const array = createArray(number);
  for (let i = 0; i < array.length; i += 1) {
    switch (array[i]) {
      case big:
        array[i] -= 1;
        break;
      case small:
        array[i] += 1;
        break;
      default:
        break;
    }
  }
  console.log(`${number} ${array} ${big} ${small}`);
  readlineSync.question('May I have your name? ');
  return balanceIt(array);
};
const generateQuestionAndAnswer = numbers => cons(car(numbers), (balanceIt(car(numbers))).sort());
*/
const findBig = (number) => {
  const numberAsStr = String(number);
  let find = 0;
  for (let i = 0; i < numberAsStr.length; i += 1) {
    if (numberAsStr[i] >= numberAsStr[find]) { find = i; }
  }
  return Number(numberAsStr[find]);
};
const findSmall = (number) => {
  const numberAsStr = String(number);
  let find = 0;
  for (let i = 0; i < numberAsStr.length; i += 1) {
    if (numberAsStr[i] <= numberAsStr[find]) { find = i; }
  }
  return Number(numberAsStr[find]);
};
const otherDigit = (number) => {
  const numberAsStr = String(number);
  const big = findBig(number);
  const small = findSmall(number);
  
}
const isBalanced = (number) => {
  if (number <= 9) { return true; }
  const big = findBig(number);
  const small = findSmall(number);
  return (big === small || big === small + 1);
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
const balanceIt = (number) => {
  if (isBalanced(number)) { return number; }
  const big = findBig(number);
  const small = findSmall(number);
  /*
  const big = findBig(numbAsStr);
  const small = findSmall(numbAsStr);
  let newNum = '';
  // console.log(`${numbAsStr} ${big + 1} ${small + 1}`);
  for (let count = 0; count < numbAsStr.length; count += 1) {
    // console.log(`${newNum} ${numbAsStr} ${big + 1} ${small + 1}`);
    switch (count) {
      case big:
        newNum += (Number(numbAsStr[big]) - 1);
        break;
      case small:
        newNum += (Number(numbAsStr[small]) + 1);
        break;
      default:
        newNum += (Number(numbAsStr[count]));
        break;
    }
  }
  */
  return balanceIt(`${big - 1}${small + 1}`);
};
const generateQuestionAndAnswer = numbers => cons(car(numbers), sort(balanceIt(car(numbers))));
export default () => games('Balance the given number.', generateQuestionAndAnswer);
