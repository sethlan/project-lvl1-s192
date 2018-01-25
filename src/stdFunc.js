import readlineSync from 'readline-sync';

export const welcome = (ruleOfGame) => {
  console.log('Welcome to the Brain Games!');
  if (ruleOfGame !== '') { console.log(ruleOfGame); }
};
export const getUserName = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}`);
  return name;
};
export const getAnswer = () => readlineSync.question('Your answer:');
export const question = (namePlayer, whatAsking, func, numbers) => {
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
export const randomNumber = (n1, n2) => Math.floor(Math.random() * n2) + n1;
