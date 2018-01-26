import { car, cdr } from 'hexlet-pairs';
import games from '..';

export default () => games(
  'What is the result of the expression?', 1,
  element => `${car(element)} + ${cdr(element)}`,
  element => `${car(element)} * ${cdr(element)}`,
  element => `${car(element)} - ${cdr(element)}`,
  numbers => String(car(numbers) + cdr(numbers)),
  numbers => String(car(numbers) * cdr(numbers)),
  numbers => String(car(numbers) - cdr(numbers)),
  1, 100,
);

/*
export const brainCalc = () => {
  welcome('What is the result of the expression?');
  const userName = getUserName();
  let numb1 = randomNumber();
  let numb2 = randomNumber();
  if (question(userName, `${numb1} + ${numb2}`, numbers => {
  String(car(numbers) + cdr(numbers)) }, cons(numb1, numb2))) {
    numb1 = randomNumber();
    numb2 = randomNumber();
    if (question(userName, `${numb1} * ${numb2}`, numbers => {
    String(car(numbers) * cdr(numbers)), cons(numb1, numb2))) {
      numb1 = randomNumber();
      numb2 = randomNumber();
      if (question(userName, `${numb1} - ${numb2}`, numbers => {
      String(car(numbers) - cdr(numbers)), cons(numb1, numb2))) }{
        console.log(`Congratulations, ${userName}!`);
      }
    }
  }
};
*/
