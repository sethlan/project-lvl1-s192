import { car, cons } from 'hexlet-pairs';
import games from '..';

const even = element => cons(car(element), car(element) % 2 === 0 ? 'yes' : 'no');
export default () => games('Answer "yes" if number even otherwise answer "no".', 3, even, 1, 100);
