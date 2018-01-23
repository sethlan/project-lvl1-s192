import readlineSync from 'readline-sync'
const username = () => {
	const name = readlineSync.question('May I have your name?');
	console.log(`Hello, ${name}`);
}
export default username;
