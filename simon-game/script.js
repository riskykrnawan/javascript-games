let allColours = ['blue', 'red', 'yellow', 'green'];
let gamePattern = [];
let userClickedPattern = [];

let started = false;
let level = 0;



$(document).on('keypress', function(e) {
    if (e.key == 'a' && started == false) {
        $('#level-title').html('Level ' + level);
        nextSequence();
        started = true;
    };
});


$('.btn').on('click', function(e) {
    let userChosenColour = e.target.id;
    
    makeAnimation(e.target.id);
    makeSound(e.target.id);
    
    userClickedPattern.push(userChosenColour);

    checkAnswer(userClickedPattern.length-1);
});


function nextSequence() {

    userClickedPattern = [];
    level++;
    $("#level-title").text("Level " + level);

    let randomNumber = Math.floor(Math.random() * 4);
    let randomChosenColour = allColours[randomNumber];
    gamePattern.push(randomChosenColour);


    makePattern(randomChosenColour);   
}


function makeSound(sounds) {
    let sound = new Audio('sounds/' + sounds + '.mp3');
    sound.play();
}


function makePattern(animate) {
    let activeAnimation = $('.' + animate);
    activeAnimation.css('opacity', '0');
    setTimeout(function() {
        activeAnimation.css('opacity', '1');
        makeSound(animate)
    }, 200);
   
}


function makeAnimation(animate) {
    let activeAnimation = $('.' + animate);
    activeAnimation.addClass('pressed');
    setTimeout(function() {
        activeAnimation.removeClass('pressed');
    }, 100);
}


function checkAnswer(currentLevel) {
        if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
            if (userClickedPattern.length === gamePattern.length){
                setTimeout(function () {
                  nextSequence();
                }, 1000);
              }
        } else {
            $('body').addClass('game-over');
            $('h1').html('Game Over, Press A to Restart!')
           setInterval (function() {
            $('body').removeClass('game-over'); 
           }, 200);
           startOver();

           
        }

}

function startOver() {
    level = 0;
    gamePattern = [];
    started = false;
}