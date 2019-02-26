#!/usr/bin/env node
"use strict";

var _readlineSync = _interopRequireDefault(require("readline-sync"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

console.log("Welcome to the Mihailov Games=))");
console.log("What number is missing in this progression?");
console.log("");

var name = _readlineSync.default.question('May I have your name?');

console.log('Hello, ' + name);

var firstQuestion = _readlineSync.default.question('Question: 14 .. 18 20 22 24 26 28');

console.log('Your answer,.. ' + firstQuestion);
firstQuestion == 16 ? console.log('Correct') : console.log('Incorrect');

var secondQuestion = _readlineSync.default.question('Question: 5 6 7 8 9 .. 11 12');

console.log('Your answer, ' + secondQuestion);
firstQuestion == 10 ? console.log('Correct') : console.log('Incorrect');

var thirdQuestion = _readlineSync.default.question('Question: 12 15 18 21 .. 27 30 33');

console.log('Your answer, ' + thirdQuestion);
firstQuestion == 24 ? console.log('Correct') : console.log('Incorrect');
console.log('Congratulations, ' + name);
console.log('Test12332');