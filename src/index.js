import { welcome,getUserName,questionEven } from './stdFunc';

export const brainEven = () => {
  welcome('Answer "yes" if number even otherwise answer "no".');
  const userName = getUserName();
  let count = 1;
  while (count <= 3) {
  // for (let i = 1; i <= 3; i += 1) {
    if (questionEven(userName)) {
      count += 1;
    } else {
      break;
    }
  }
  if (count === 4) {
    console.log(`Congratulations, ${userName}!`);
  }
};
export const brainGames = () => {
  welcome();
  getUserName();
};
export const brainCalc = () => {
  welcome('What is the result of the expression?');
  const userName = getUserName();
};
