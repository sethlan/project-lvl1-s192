import { car } from 'hexlet-pairs';
import games from '..';

export default () => games('Answer "yes" if number even otherwise answer "no".', 1, element =>
  car(element), element => car(element), element => car(element), numbers =>
  (car(numbers) % 2 === 0 ? 'yes' : 'no'), numbers =>
  (car(numbers) % 2 === 0 ? 'yes' : 'no'), numbers =>
  (car(numbers) % 2 === 0 ? 'yes' : 'no'), 1, 100);
