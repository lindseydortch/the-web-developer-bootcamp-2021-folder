'use strict';

let die1 = Math.floor(Math.random() * 6) + 1;

//FUNCTIONS WITHOUT ARGUMENTS
// function singSong() {
//   console.log('Do');
//   console.log('Re');
//   console.log('Mi');
// }

// singSong();
// singSong();
// singSong();
// singSong();

// FUNCTIONS PASSING ONE ARGUMENT
// function greet(firstName) {
//   // console.log(`First Name is: ${firstName}`);
//   console.log(`Hey there, ${firstName}`);
// }

// greet('Elvis');

// FUNCTIONS PASSING MULTIPLE ARGUMENTS
// function greet(firstName, lastName) {
//   console.log(`Hey there, ${firstName} ${lastName[0]}`);
// }

// greet('Clooney', 'George');

// // repeat('hi', 3) hihihi
// function repeat(str, numTimes) {
//   let result = '';
//   for(let i = 0; i < numTimes; i++ ) {
//     result += str;
//   }
//   console.log(result);
// }

// repeat('$', 5);

// function add(x, y) {
//   if (typeof x !== 'number' || typeof y !== 'number') return false;
//   return x + y;
// }

// function capitalize(str) {
//   let strUpper = `${str[0].toUpperCase()}`;
//   let strRemove = str.slice(1);
//   console.log(strUpper);
//   console.log(strRemove);
//   //console.log(strUpper);
//   return `${strUpper}${strRemove}`;
// }
// console.log(capitalize('eat'), capitalize('treat'));


// function sumArray(arr) {
//   let total = 0;
//   for (let i = 0; i < arr.length; i++) {
//     total += arr[i];
    
// }
// return total;
// }

// sumArray([2,3,4,5]);

// const dayOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

// let day = dayOfWeek.slice();

// //console.log(day);

// function returnDay(num) {
//     if (num < 1 || num > 7) {
//         return null; 
//     } else {
//       for(let i = 0; i < day.length; i++) {
//         return day[num - 1]; 
//       }
//     } 
// }

// console.log(returnDay(1));
// console.log(returnDay(8));
// console.log(returnDay(6));
