'use strict';

// && operator 
// const password = prompt('Enter your password');

// if (password.length >= 6 && password.indexOf(' ') === -1) {
//   console.log('Valid Password');
// } else {
//   console.log('Try a different password');
// }

// || operator 
// 0- 5 free, 5-10 $10, 10-65 $20, 65+ free

// const age = -10;

// if (age >= 0 && age < 5 || age >= 65) {
//   console.log('FREE');
// } else if (age >= 5 && age < 10) {
//   console.log('$10');
// } else if (age >= 10 && age < 65 ) {
//   console.log('$20');
// } else {
//   console.log('INVALID AGE');
// }

// ! Operator 
// const firstName = prompt('enter your first name');

// if (!firstName) {
//   console.log('TRY AGAIN');
// }

const age = 45;
if (!(age >= 0 && age < 5 || age >= 65)) {
  console.log('YOU ARE NOT A BABY OR A SENIOR');
}