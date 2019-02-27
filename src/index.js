import readlineSync from 'readline-sync';


export function askQuestion(){
console.log('May I have your name?');
const actual = readlineSync.question('Hello, ');
}