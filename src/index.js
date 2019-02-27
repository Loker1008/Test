import readlineSync from 'readline-sync';


export function askQuest(){
console.log('May I have your name? John');
const actual = readlineSync.question('Hello, ');
}