import readlineSync from 'readline-sync';

export const welcome = (ruleOfGame) => {
  console.log('Welcome to the Brain Games!');
  if (ruleOfGame !== '') { console.log(ruleOfGame); }
};
export const getUserName = () => {
  const name = readlineSync.question('May I have your name?');
  console.log(`Hello, ${name}`);
  return name;
};
export const getAnswer = () => readlineSync.question('Your answer:');
export const question = (namePlayer, whatAsking, func, numbers) => {
  console.log(`Question:${whatAsking}`);
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
export const randomNumber = () => Math.floor(Math.random() * 100) + 1;
/*
export const repetion = (howManyTimes, namePlayer, whatAsking, func, numbers) => {
  let count = 1;
  while (count <= howManyTimes) {
  // for (let i = 1; i <= 3; i += 1) {
    if (question(namePlayer, whatAsking, func, numbers)) {
      count += 1;
    } else {
      break;
    }
  }
  if (count === howManyTimes + 1) {
    console.log(`Congratulations, ${namePlayer}!`);
  }
};
/*
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
};
*/
