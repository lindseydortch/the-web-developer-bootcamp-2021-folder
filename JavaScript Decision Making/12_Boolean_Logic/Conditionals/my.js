'use strict';

// console.log("BEFORE CONDITIONAL");
// let random = Math.random();
// if (random <= 0.5) {
//   console.log("YOUR NUMBER IS LESS THAN 0.5");
  
// } else {
//   console.log('YOUR NUMBER IS GREATER THAN 0.5');
// }
// console.log(random);
// console.log("AFTER CONDITIONAL");

// const dayOfWeek = prompt('ENTER A DAY').toLowerCase;

// if (dayOfWeek === 'monday') {
//   console.log('UGHHH I HATE MONDAYS');
// } else if (dayOfWeek === 'saturday') {
//   console.log('YAY I LOVE SATURDAYS');
// } else if (dayOfWeek === 'friday') {
//   console.log('FRIDAYS ARE DECENT, ESPECIALLY AFTER WORK');
// } else {
//   console.log('MEH');
// }

// 0-5 - Free
// 5 - 10 Child $10
// 10 - 65 adult $20 
// 65+ senior $10

// const age = 89;

// if (age < 5) {
//   console.log('You are a baby You get in for free!');
// } else if (age < 10) {
//   console.log('You are a child. You pay $10.');
// } else if (age < 65) {
//   console.log('You are an adult. You pay $20.');
// } else {
//   console.log('You are a senior. You pay $10.');
// }

// Password must be 6+ characters 
// Password cannot include space 

const password = prompt('please enter a new password');

if (password.length >= 6) {
  if (password.indexOf(' ') === -1) {
    console.log('Valid password');
  } else {
    console.log('Password cannot have spaces');
  }
  console.log('long enough password');
} else {
  console.log('password too short');
}
