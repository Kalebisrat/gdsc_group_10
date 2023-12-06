/*
var ages = 25;
console.log(ages);

function age() {
  let age1 = 24;
  let age2 = 77;
  let age3 = 54;

  console.log(age1, age2, age3);
}
age();

const name = {
  firstname: "Jonas",
  lastname: "Ali",
  age: "23",
  hasdriverlicense: "true",
};
console.log(`my name ${name.firstname},`);
*/

const mass = prompt("what is your mass ?");
const height = prompt("what is your height ?");

const BMI = mass / (height * height);
console.log("Your BMI is " + BMI);
