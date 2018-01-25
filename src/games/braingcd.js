import { cdr, car } from 'hexlet-pairs';
import games from '..';

const gcd = (numbers) => {
  const iter = (number1, number2) => {
    if (number1 === 0) { return number2; }
    if (number2 === 0) { return number1; }
    if (number1 % 2 === 0 && number2 % 2 === 0) { return 2 * iter(number1 / 2, number2 / 2); }
    if (number1 % 2 === 0 && number2 % 2 !== 0) { return iter(number1 / 2, number2); }
    if (number1 % 2 !== 0 && number2 % 2 === 0) { return iter(number2 / 2, number1); }
    const biggest = number1 >= number2 ? number1 : number2;
    const smallest = number1 >= number2 ? number2 : number1;
    return iter((biggest - smallest) / 2, smallest);
  };
  return iter(car(numbers), cdr(numbers));
};
export default () => games('Find the greatest common divisor of given numbers.', 3, element => `${car(element)} ${cdr(element)}`, numbers => String(gcd(numbers)), 1, 100);
