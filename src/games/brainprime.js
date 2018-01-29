import { cons } from 'hexlet-pairs';
import games from '..';

const randomNumber = () => Math.floor(Math.random() * 100);
const isPrime = (number) => {
  if (number === 1) { return false; }
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) { return false; }
  }
  return true;
};
const generateQuestionAndAnswer = () => {
  const number = randomNumber();
  return cons(number, isPrime(number) ? 'yes' : 'no');
};
export default () => games('Is this number prime? ', generateQuestionAndAnswer);
