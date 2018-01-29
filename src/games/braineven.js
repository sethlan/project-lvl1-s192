import { cons } from 'hexlet-pairs';
import games from '..';

const randomNumber = () => Math.floor(Math.random() * 100);
const generateQuestionAndAnswer = () => {
  const number = randomNumber();
  return cons(number, number % 2 === 0 ? 'yes' : 'no');
};
export default () => games('Answer "yes" if number even otherwise answer "no".', generateQuestionAndAnswer);
