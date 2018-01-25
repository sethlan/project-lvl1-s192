import { cons, car, cdr } from 'hexlet-pairs';
import { welcome, getUserName, question, randomNumber } from './stdFunc';

export const brainGames = () => {
  welcome('');
  getUserName();
};
export const brainEven = () => {
  welcome('Answer "yes" if number even otherwise answer "no".');
  const userName = getUserName();

  let count = 1;
  while (count <= 3) {
    const number = randomNumber();
    if (question(userName, number, numbers => (numbers % 2 === 0 ? 'yes' : 'no'), number)) {
      count += 1;
    } else {
      break;
    }
  }
  if (count === 4) {
    console.log(`Congratulations, ${userName}!`);
  }
};
export const brainCalc = () => {
  welcome('What is the result of the expression?');
  const userName = getUserName();
  let numb1 = randomNumber();
  let numb2 = randomNumber();
  if (question(userName, `${numb1} + ${numb2}`, numbers => String(car(numbers) + cdr(numbers)), cons(numb1, numb2))) {
    numb1 = randomNumber();
    numb2 = randomNumber();
    if (question(userName, `${numb1} * ${numb2}`, numbers => String(car(numbers) * cdr(numbers)), cons(numb1, numb2))) {
      numb1 = randomNumber();
      numb2 = randomNumber();
      if (question(userName, `${numb1} - ${numb2}`, numbers => String(car(numbers) - cdr(numbers)), cons(numb1, numb2))) {
        console.log(`Congratulations, ${userName}!`);
      }
    }
  }
};
