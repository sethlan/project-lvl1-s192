#!/usr/bin/env node
import getUserName, { questionEven } from '..';

console.log('Welcome to the Brain Games!');
console.log('Answer "yes" if number even otherwise answer "no".');
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
