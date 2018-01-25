import readlineSync from 'readline-sync';
import { cons, car, cdr, toString } from 'hexlet-pairs';

export const welcome = (ruleOfGame) => {
  console.log('Welcome to the Brain Games!');
  console.log(ruleOfGame);
};
export const getUserName = () => {
  const name = readlineSync.question('May I have your name?');
  console.log(`Hello, ${name}`);
  return name;
};
export const getAnswer = () => readlineSync.question('Your answer:');
export const question = (whatAsking) => {
  console.log(`Question:${whatAsking}`);
  return getAnswer();
};
export const randomNumber = () => Math.floor(Math.random() * 100) + 1;
export const questionEven = (namePlayer) => {
  const numb = randomNumber;
  const answer = question(numb);
  const isEven = number => number % 2 === 0;
  const trueAnswer = (isEven(numb) ? 'yes' : 'no');
  if (answer === trueAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${trueAnswer}'.`);
  console.log(`Let's try again, ${namePlayer}!`);
  return false;
};
export const questionCalc = (namePlayer, expression) => {
  const numb1 = randomNumber;
  const numb2 = randomNumber;

}
