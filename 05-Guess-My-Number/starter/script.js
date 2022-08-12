'use strict';

/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number! 🥳';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let score = 20;
let highscore = document.querySelector('.highscore').textContent;
let actualNumber = Math.floor((Math.random() * 20) + 1);

console.log(actualNumber);

document.querySelector('.check').addEventListener(
    'click', function () {
        const guessInput = document.querySelector('.guess').value;
        score--;

        if (guessInput == actualNumber) {
            document.querySelector('.message').textContent = 'Correct Number! 🥳';
            document.querySelector('.number').textContent = actualNumber;
            document.querySelector('.score').textContent = score;

            if (score > highscore) {
                document.querySelector('.highscore').textContent = score;
            } else {
                console.log(`Score not lower, score: ${score} & ${highscore}`);
            }

        } else if (!guessInput) {
            document.querySelector('.message').textContent = 'No Number!';

        } else if (guessInput > 20 || guessInput < 1) {
            document.querySelector('.message').textContent = 'Please choose a number between 1 and 20';

        } else {
            document.querySelector('.message').textContent = 'Incorrect Number! 😞';
            document.querySelector('.score').textContent = score;
        }

    }
)

document.querySelector('.again').addEventListener(
    'click', function () {
        score = 20;
        document.querySelector('.score').textContent = score;
        highscore = document.querySelector('.highscore').textContent;
        actualNumber = Math.floor((Math.random() * 20) + 1);

        console.log(actualNumber);
    }
)
