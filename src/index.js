import readlineSync from 'readline-sync';


export default function () {
  console.log('Welcome to the Brain Games!');
  console.log('--------------------------------');
  const actual = readlineSync.question('May I have your name?');
  console.log(`Hello, ${actual}!`);
}
