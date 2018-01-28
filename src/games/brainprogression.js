/*
import { cons, car, cdr, toString } from 'hexlet-pairs';
import games from '..';

const generateQuestionAndAnswer = (numbers) => {
  const random = Math.floor(Math.random() * 20);
  const createProgression = (number, step, count) => count === 0 ? null : cons(
    number, createProgression(number + step, count - 1)
  );


  return cons(`${car(numbers)} - ${cdr(numbers)}`, String(car(numbers) - cdr(numbers)));
};

export default () => games('What number is missing in this progression?', generateQuestionAndAnswer);
*/
