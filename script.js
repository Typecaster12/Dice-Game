//logic
//home screen
let play_btn = document.querySelector('.play-btn');
let home_screen = document.querySelector('.home-screen');
let game_screen = document.querySelector('.game-screen');

play_btn.addEventListener('click', () => {
    home_screen.style.display = 'none';
    game_screen.style.display = 'block';
});


//game-screen
let score = 0;
var selectedNumber = null;

//dice click function
let show_score = document.querySelector('.game-heading');
let dice = document.getElementById('dice');

function chooseNumber(number) {
    selectedNumber = number;

    let show_number = document.getElementById('selectedNumber');
    show_number.textContent = number;

    //after choosing number image is clickable;
    dice.style.pointerEvents = 'auto';
}


function getRandomNumber() {
    return Math.floor(Math.random() * 6) + 1;
}

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

let reset_score = document.querySelector('.reset');
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
})