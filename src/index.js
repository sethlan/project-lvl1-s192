import { cons } from 'hexlet-pairs';
import readlineSync from 'readline-sync';

const welcome = (ruleOfGame) => {
  console.log('Welcome to the Brain Games!');
  if (ruleOfGame !== '') { console.log(ruleOfGame); }
};
const getUserName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  return name;
};
const getAnswer = () => readlineSync.question('Your answer:');
const question = (namePlayer, whatAsking, func, numbers) => {
  console.log(`Question:${whatAsking(numbers)}`);
  const answer = getAnswer();
  const trueAnswer = func(numbers);
  if (answer === trueAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${trueAnswer}'.`);
  console.log(`Let's try again, ${namePlayer}!`);
  return false;
};
const randomNumber = (n1, n2) => Math.floor(Math.random() * n2) + n1;
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
