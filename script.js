'use strict';

let score = 20;
const secretNumber = Math.trunc(Math.random() * 20) + 1;
let highScore = document.querySelector(".highscore").textContent;

function checkNumber() {
    const guess = Number(document.querySelector('.guess').value)
    document.querySelector('.guess').value = guess
    // console.log(document.querySelector('.guess').value)
    console.log(secretNumber)
    if (!guess) {
        document.querySelector('.message').textContent = "🎯 No number entered!!!";
    }
    else if (guess < secretNumber) {
        document.querySelector('.message').textContent = "📈 Too Low!!!!";
        score -= 1;
        document.querySelector('.score').textContent = score;
    }
    else if (guess > secretNumber) {
        document.querySelector('.message').textContent = "📉 Too High!!!!";
        score -= 1;
        document.querySelector('.score').textContent = score;
    }
    else if (guess == secretNumber) {
        document.querySelector('.message').textContent = "Correct Answer!!!";
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNumber
        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    }

};

function resetGame() {
    document.querySelector('.score').textContent = 20;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.guess').value = " ";
    document.querySelector('.number').textContent = "?";
    document.querySelector('body').style.backgroundColor = '#333';
    document.querySelector('.number').style.width = '15rem';
};



document.querySelector('.check').addEventListener('click', checkNumber);
document.querySelector('.again').addEventListener('click', resetGame);




