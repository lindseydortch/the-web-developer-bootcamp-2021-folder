'use strict';

//WHILE LOOPS
// let count = 0;
// while (count < 10) {
//   console.log(count);
//   count++
// }

// while (!gameOver) {
//   //Player 1
//   //Player 2
// }

// const SECRET = 'BabyHippo';

// let guess = prompt('enter the secret code....')

// while(guess !== SECRET) {
//   guess = prompt('enter the secret code...');
// }

// console.log('CONGRATS YOU GOT THE SECRET');

// BREAK KEYWORD

//While loops
// let input = prompt('Hey, say something')
// while (true) {
//   input = prompt(input);
//   if (input.toLowerCase() === 'stop copying me') {
//     break;
//   }
// }
// console.log('OKAY YOU WIN');

// for (let i = 0; i < 1000; i++) {
//   console.log(i);
//   if(i === 100) break;
// }

let maximum = parseInt(prompt('enter the maximum number'));
while (!maximum) {
  maximum = parseInt(prompt('please enter a valid number'));
}

const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum);

let guess = prompt('enter your first guess!');
let attempts = 1;

while (parseInt(guess) !== targetNum) {
  if(guess === 'q') break;
  attempts++
  if (guess > targetNum) {
    guess = prompt('Too high! Enter a new guess:');
  } else {
    guess = prompt('Too low! Enter a new guess:');
  }
}

if(guess === 'q') {
  console.log('Ok, you quit');
} else {
  console.log(`YOU GOT IT! It took you ${attempts} guesses`);
}
