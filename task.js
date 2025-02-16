// const burgerprice = 500;

// if (burgerprice >= 500) {
//     console.log('Free coke');
// }
// else {
//     console.log('Coke: 30tk');
// }

const weight = 70; // kg
let height = 5.8; // feet
height = height / 3.28; // meters = 3.28 feet
const bmi = weight / (height * height);

if (bmi < 18.5) { console.log('Underweight'); }

else if (bmi >= 18.5 && bmi < 25) { console.log('Normal weight'); }

else if (bmi >= 25 && bmi < 30) { console.log('Overweight'); }

else { console.log('Obese'); }