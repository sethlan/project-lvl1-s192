import { cons, cdr, car } from 'hexlet-pairs';
import games from '..';

const gcd = (number1, number2) => {
  if (number1 === 0) { return number2; }
  if (number2 === 0) { return number1; }
  const biggest = number1 >= number2 ? number1 : number2;
  const smallest = number1 >= number2 ? number2 : number1;
  return gcd(smallest, biggest % smallest);
};
const generateQuestionAndAnswer = numbers => cons(`${car(numbers)} ${cdr(numbers)}`, String(gcd(car(numbers), cdr(numbers))));
export default () => games('Find the greatest common divisor of given numbers.', generateQuestionAndAnswer);
