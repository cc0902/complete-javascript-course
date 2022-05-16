let country = 'Japan';
let continent = 'Asia';
let population = 21;

console.log(country);
console.log(continent);
console.log(population);

let isIsland = false;
let language;

console.log(isIsland);
console.log(population);
console.log(country);
console.log(language);

language = 'Japanese';

let half_country = population / 2;

console.log(population + 1);

let finland_pop = 6;
let average_pop = 33;

if (finland_pop > population) {
    console.log(true)
} else {
    console.log(false);
}

if (population < average_pop) {
    console.log(true);
} else {
    console.log(false);
}

let description;

description = country + ' is in ' + continent + ', and its ' + population + ' million people speak ' + language;
console.log(description);

// Coding Challenge #1

/*
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀
*/

const markMass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.95;

let markBMI = markMass / (markHeight * markHeight);
let johnBMI = johnMass / (johnHeight * johnHeight);

let markHigherBMI = markBMI > johnBMI;

const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037

const jonas = "I'm " + firstName + ", a " + (year - birthYear) + " year old " + job + "!";
console.log(jonas);

const jonasNew = `I'm ${firstName}, a ${year - birthYear} year old ${job}!`;
console.log(jonasNew);



/////////

descriptionNew = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
console.log(descriptionNew);

console.log(`String with
multiple
lines`);

let populationGreater = population > 33;

if (populationGreater) {
    console.log(`${country}'s population is above average`);
} {
    const difference = (33 - population);
    console.log(`${country}'s population is ${difference} million below average`);
}

// Coding Challenge #2

/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement 😉

GOOD LUCK 😀
*/

if (markHigherBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's!`);
} {
    console.log(`John's BMI (${johnBMI}) is higher than Mark's!`);
}