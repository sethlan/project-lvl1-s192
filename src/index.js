import readlineSync from 'readline-sync';

const getUserName = () => {
  const name = readlineSync.question('May I have your name?');
  console.log(`Hello, ${name}`);
  return name;
};
export default getUserName;
export const questionEven = (namePlayer) => {
  const randomNumber = Math.floor(Math.random() * 10) + 1;
  console.log(`Question:${randomNumber}`);
  const answer = readlineSync.question('Your answer:');
  const isEven = number => number % 2 === 0;
  const trueAnswer = (isEven(randomNumber) ? 'yes' : 'no');
  if (answer === trueAnswer) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${trueAnswer}'.`);
  console.log(`Let's try again, ${namePlayer}!`);
  return false;
};
