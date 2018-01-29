import { cons, car } from 'hexlet-pairs';
import games from '..';

const randomNumber = () => Math.floor(Math.random() * 100);
const generateMember = (firstMember, diff, whatPlace) => firstMember + (diff * whatPlace);
const generateQuestionAndAnswer = () => {
  const numbers = cons(randomNumber(), randomNumber());
  const generateProgressionWithMiss = (firstMember, diff, whatPlaceSkip, quantity) => {
    const iter = (step) => {
      if (step === quantity) { return generateMember(firstMember, diff, step); }
      if (step === whatPlaceSkip) { return `... ${iter(step + 1)}`; }
      return `${generateMember(firstMember, diff, step)} ${iter(step + 1)}`;
    };
    return iter(1);
  };
  const length = 10;
  const randomStep = Math.floor(Math.random() * 100);
  const randomPlace = 1 + Math.floor(Math.random() * length);
  return cons(
    generateProgressionWithMiss(car(numbers), randomStep, randomPlace, length),
    String(generateMember(car(numbers), randomStep, randomPlace)),
  );
};
export default () => games('What number is missing in this progression?', generateQuestionAndAnswer);
