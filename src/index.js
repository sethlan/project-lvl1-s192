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
export const brainGcd = () => {
  welcome('Find the greatest common divisor of given numbers.');
  const userName = getUserName();
  let numb1 = randomNumber();
  let numb2 = randomNumber();
  // taken from https://en.wikipedia.org/wiki/Binary_GCD_algorithm
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
  if (question(userName, `${numb1} ${numb2}`, numbers => String(gcd(numbers)), cons(numb1, numb2))) {
    numb1 = randomNumber();
    numb2 = randomNumber();
    if (question(userName, `${numb1} ${numb2}`, numbers => String(gcd(numbers)), cons(numb1, numb2))) {
      numb1 = randomNumber();
      numb2 = randomNumber();
      if (question(userName, `${numb1} ${numb2}`, numbers => String(gcd(numbers)), cons(numb1, numb2))) {
        console.log(`Congratulations, ${userName}!`);
      }
    }
  }
};
