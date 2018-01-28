import { car, cons } from 'hexlet-pairs';
import games from '..';

const isPrime = (number) => {
  if (number === 1 || number === 2) { return true; }
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) { return false; }
  }
  return true;
};
const generateQuestionAndAnswer = element => cons(car(element), isPrime(car(element)) ? 'yes' : 'no');
export default () => games('Is this number prime?', generateQuestionAndAnswer);
