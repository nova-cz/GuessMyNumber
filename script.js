

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;

const displayMessage = (message) => {
    document.querySelector('.message').textContent = message;
}
function initialize(){
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    displayMessage( 'Start guessing...');
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.guess').value = '';
    
}

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    //! When there is no input
    if (!guess) {
        displayMessage('No number!!');
    //when playe wins
    } else if (guess === secretNumber) {
        displayMessage('Correct numumber!!');
        document.querySelector('.number').textContent = secretNumber;

        //Manipulate css style with javascript
        document.querySelector('body').style.backgroundColor = '#60b347';

        document.querySelector('.number').style.width = '30rem';

    //!When the answer is wrong
    } else if (guess != secretNumber) {
        
        //! when guess is to high
        if (score > 1) {
            displayMessage(guess > secretNumber ? 'Too high!!' : 'Too low!!')
            
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('Tou lost the game!!');
            document.querySelector('.score').textContent = 0;
        }
    } 
})

document.querySelector('.again').addEventListener('click', function(){
    initialize();
})

