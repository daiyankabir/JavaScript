const age = 18;

// function to check if a person is eligible for voting

// function isEligibleToVote(age) {
//     if (age >= 18) {
//         return true;
//     } else {
//         return false;
//     }
// }


/**
 * Ternary --> condition ? true : false
 */
//Simple Ternary
// age >= 18 ? console.log('Eligible to vote') : console.log('Not eligible to vote');

let price = 1500;
const isLeader = true;

// if (isLeader) {
//     price = 0;
// } else {
//     price = price + 100;
// }
// console.log(price);

// price = isLeader ? price = 0 : price = price + 100;

// console.log(price);


//Semi advance Ternary
isLeader ? price > 1000 ? price = price / 2 : price = 0 : price = price + 1000;

console.log(price);