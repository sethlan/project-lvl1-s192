import { car, cons } from 'hexlet-pairs';
import games from '..';

const isPrime = (number) => {
  if (number === 1) { return false; }
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) { return false; }
  }
  return true;
};
const generateQuestionAndAnswer = element => cons(`Is this number prime? ${car(element)}`, isPrime(car(element)) ? 'yes' : 'no');
export default () => games('', generateQuestionAndAnswer);
