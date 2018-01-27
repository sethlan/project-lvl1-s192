
import { cons, car } from 'hexlet-pairs';
import games from '..';

/*
const smallestNumb = (numbers) => {
  const iter = (numb, acc) => {
    if (numb <= 9) { if (numb <= acc) { return numb; } return acc; }
    if (numb % 10 <= acc) {
      return iter(Math.floor(numb / 10), numb % 10);
    }
    return iter(Math.floor(numb / 10), acc);
  };
  iter(numbers, 0);
};
const biggestNumb = (numbers) => {
  const iter = (numb, acc) => {
    if (numb <= 9) { if (numb >= acc) { return numb; } return acc; }
    if (numb % 10 >= acc) {
      return iter(Math.floor(numb / 10), numb % 10);
    }
    return iter(Math.floor(numb / 10), acc);
  };
  return iter(numbers, 0);
};
*/
const findBig = (num) => {
  const numb = String(num);
  let find = 0;
  for (let i = 0; i < numb.length; i += 1) {
    if (numb[i] >= numb[find]) { find = i; }
  }
  // console.log(`big ${find}`);
  return find;
};
const findSmall = (num) => {
  const numb = String(num);
  let find = 0;
  for (let i = 0; i < numb.length; i += 1) {
    if (numb[i] <= numb[find]) { find = i; }
  }
  // console.log(`Small ${find}`);
  return find;
};
const isBalanced = (number) => {
  if (number <= 9) { return true; }
  const numbStr = String(number);
  const big = Number(numbStr[findBig(numbStr)]);
  const small = Number(numbStr[findSmall(numbStr)]);
  // console.log(`${number} ${big} ${small}`);
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
  // console.log(`${numb} ${small} ${newNum}`);
  return numbStr[small] + sort(newNum);
};
const balanceIt = (number) => {
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
  return sort(balanceIt(newNum));
};
const balancegame = numbers => cons(car(numbers), String(balanceIt(car(numbers))));
export default () => games('Balance the given number.', 3, balancegame, 0, 9999);
