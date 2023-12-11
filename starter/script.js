'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 23;
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
};


document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    // wheN there is no input
    if (!guess) {
        //document.querySelector('.message').textContent = '⛔ NO number';
        displayMessage('⛔ No number!');

        // when player wins 
    }
    else if (guess === secretNumber) {
        //document.querySelector('.message').textContent = '🎉🎉Correct Number!';
        displayMessage('🎉 Correct Number!');
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';

        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore')
                .textContent = highscore;
        }
        //When guess is wrong 
    } else if (guess !== secretNumber) {
            if (score > 1) {
                //document.querySelector('.message').textContent = guess > secretNumber ? '📈Too high!' : '📉Too Low!';
                displayMessage(guess > secretNumber ? '📈Too high' : '📉Too Low!');
                score--;
                document.querySelector('.score').textContent = score;
            } else {
                document.querySelector('.message').textContent = "You lost the game!";
                document.querySelector('.score').textContent = 0;
            }

        }
    }
    //When value is too high
    //     } else if (guess > secretNumber) {


    //         //when guess is too low
    //     } else if (guess < secretNumber) {
    //         if (score > 1) {
    //             document.querySelector('.message').textContent = '📉Too Low!';
    //             score--;
    //             document.querySelector('.score').textContent = score;
    //         }
    //     }
);

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    //document.querySelector('.message').textContent = 'Start Guessing...';
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = 0;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';

}
)