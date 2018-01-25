import { cons } from 'hexlet-pairs';
import { welcome, getUserName, question, randomNumber } from './stdFunc';

export default (rulesOfGame, howManyTimes, whatAsking, howChecking, from, to) => {
  welcome(rulesOfGame);
  const userName = getUserName();
  let count = 1;
  while (count <= howManyTimes) {
    const numbers = cons(randomNumber(from, to), randomNumber(from, to));
    if (question(userName, whatAsking, howChecking, numbers)) {
      count += 1;
    } else {
      break;
    }
  }
  if (count === howManyTimes + 1) {
    console.log(`Congratulations, ${userName}!`);
  }
};
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
