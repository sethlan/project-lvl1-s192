import { cons, car, cdr } from 'hexlet-pairs';
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
const askQuestion = (namePlayer, QuestionAndAnswer, numbers) => {
  const qa = QuestionAndAnswer(numbers);
  console.log(`Question:${car(qa)}`);
  const answer = getAnswer();
  const trueAnswer = cdr(qa);
  if (answer === trueAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${trueAnswer}'.`);
  console.log(`Let's try again, ${namePlayer}!`);
  return false;
};
const randomNumber = () => Math.floor(Math.random() * 10000);
export default (rulesOfGame, gamesQuestionAndAnswer) => {
  const quantityOfRounds = 3;
  welcome(rulesOfGame);
  const userName = getUserName();
  let count = 1;
  while (count <= quantityOfRounds && gamesQuestionAndAnswer !== '') {
    const numbers = cons(randomNumber(), randomNumber());
    if (askQuestion(userName, gamesQuestionAndAnswer, numbers)) {
      count += 1;
    } else {
      break;
    }
  }
  if (count === quantityOfRounds + 1) {
    console.log(`Congratulations, ${userName}!`);
  }
};
