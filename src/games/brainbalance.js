/*
import { cons, car } from 'hexlet-pairs';
import games from '..';

const createArray = (number) => {
  const numberAsStr = String(number);
  const array = [];
  for (let i = 0; i < numberAsStr.length; i += 1) {
    array[i] = numberAsStr[i];
  }
  return array;
};
const findBig = number => Math.max(createArray(number));
const findSmall = number => Math.min(createArray(number));
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
  return balanceIt(array);
};
const generateQuestionAndAnswer = numbers => cons(car(numbers), (balanceIt(car(numbers))).sort());
export default () => games('Balance the given number.', generateQuestionAndAnswer);
/*  const numb = String(num);
  let find = 0;
  for (let i = 0; i < numb.length; i += 1) {
    if (numb[i] >= numb[find]) { find = i; }
  }
  // console.log(`big ${find}`);
  return find;
};
*/
/* {
  const numb = String(num);
  let find = 0;
  for (let i = 0; i < numb.length; i += 1) {
    if (numb[i] <= numb[find]) { find = i; }
  }
  // console.log(`Small ${find}`);
  return find;
};
*/
/*
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
  // console.log(`${numb} ${small} ${newNum}`);
  return numbStr[small] + sort(newNum);
};
*/
/* const balanceIt = (number) => {
  if (isBalanced(number)) { return number; }
  const numbAsStr = String(number);
  let newNum = 0;
  const big = findBig(numbAsStr);
  const small = findSmall(numbAsStr);
  // console.log(`${numbAsStr} ${big + 1} ${small + 1}`);
  for (let count = 0; count < numbAsStr.length; count += 1) {
    // console.log(`${newNum} ${numbAsStr} ${big + 1} ${small + 1}`);
    switch (count) {
      case big:
        newNum += (Number(numbAsStr[big]) - 1) * (10 ** (numbAsStr.length - count - 1));
        break;
      case small:
        newNum += (Number(numbAsStr[small]) + 1) * (10 ** (numbAsStr.length - count - 1));
        break;
      default:
        newNum += (Number(numbAsStr[count])) * (10 ** (numbAsStr.length - count - 1));
        break;
    }
  }
  return balanceIt(newNum);
};
*/
