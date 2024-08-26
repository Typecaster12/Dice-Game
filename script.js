//logic
//game-screen
let score = 0;
var selectedNumber = null;
let reset_score = document.querySelector('.reset');

//dice click function
let show_score = document.querySelector('.game-heading');
let dice = document.getElementById('dice');

//home screen
let play_btn = document.querySelector('.play-btn');
let home_screen = document.querySelector('.home-screen');
let game_screen = document.querySelector('.game-screen');

play_btn.addEventListener('click', () => {
    home_screen.style.display = 'none';
    game_screen.style.display = 'block';

    //the timer functionality;
    let time = 0;
    let show_seconds = document.querySelector('.seconds');
    let interval = setInterval(() => {
        time = time + 1;
        show_seconds.innerText = time;

        //on reset the time also resets,
        reset_score.addEventListener('click', () => {
            time = 0;
            show_seconds.innerText = time;
        });

        //game over;
        if (time === 100) {
            alert(`Game over, Your Score = ${score}`);
            clearInterval(interval);
            home_screen.style.display = 'flex';
            game_screen.style.display = 'none';
            time = 0;
            score = 0;
            show_seconds.innerText = time;
            show_score.innerText = score;
        }
    }, 1000);
});

//function to choose number;
function chooseNumber(number) {
    selectedNumber = number;

    let show_number = document.getElementById('selectedNumber');
    show_number.textContent = number;

    //after choosing number image is clickable;
    dice.style.pointerEvents = 'auto';
}

//for random number;
function getRandomNumber() {
    return Math.floor(Math.random() * 6) + 1;
}

//to change the dice's image;
function changeImage() {
    //do nothing if number is not selected;
    if (selectedNumber === null) {
        return;
    }

    const randomNumber = getRandomNumber();
    dice.src = `images/dice/dice_${randomNumber}.png`;


    if (selectedNumber == randomNumber) {
        score++;
        show_score.innerText = score;

    } else {
        score--;
        show_score.innerText = score;
    }

    //disable the image again untill new number is not selected.
    dice.style.pointerEvents = 'none';
}

//to reset the score
reset_score.addEventListener('click', () => {
    score = 0;
    show_score.innerText = score;
});


//to show and hide the rules
let box = document.querySelector('.rule-box');
let show_rules = document.querySelector('.rules');
let hide_rules = document.querySelector('.close');
show_rules.addEventListener('click', () => {
    box.style.display = 'flex';
});

hide_rules.addEventListener('click', () => {
    box.style.display = 'none';
});

