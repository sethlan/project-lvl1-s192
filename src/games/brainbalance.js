/*
import { car } from 'hexlet-pairs';
import games from '..';

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
const isBalanced = number => (biggestNumb(number) === smallestNumb(number)) ||
 (biggestNumb(number) === smallestNumb(number) + 1);
const balanceIt = (number) => {
  if (isBalanced(number)) { return number; }
  const numbStr = String(number);

}
export default () => games(

)
*/
