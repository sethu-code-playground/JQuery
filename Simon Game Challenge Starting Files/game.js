alert("JSloaded");

var buttonColors = ["red", "blue", "green", "yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var gameStarted = true;

$(".btn").on("click",function(event) {
    // console.log(this);
    var userChosenColor = $(this).attr("id"); 
   /*From the MDN docs, "Arrow functions differ in their handling of this: they inherit this from the parent scope at the time they are defined".
    This made the first attempt at using "this" wrong but not the second implementation. Just something I thought I'd share. So adding this when arrow function is used will not work
    if arrow function is used use event.target.id*/
    // console.log(userChosenColor);
    userClickedPattern.push(userChosenColor);
    // console.log(userClickedPattern);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userClickedPattern.length - 1);
});

function nextSequence() {
    level++;
    $("h1").text("Level " + level);
    gameStarted = false; 
    var randomNumber = Math.floor((Math.random() * 4));
    // console.log(randomNumber);

    var randomChosenColor = buttonColors[randomNumber];
    // console.log(randomChosenColor);

    gamePattern.push(randomChosenColor);
    console.log(gamePattern);

    $("#" + randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(randomChosenColor);
    
    
}

function playSound(name){
    var audio = new Audio("./sounds/" + name + ".mp3");
    audio.play();
}

function animatePress(currentColor){
    $("#" + currentColor).addClass("pressed");
    setTimeout(() =>{
        $("#" + currentColor).removeClass("pressed");
    }, 100);
}

$(document).keydown(function (e) {
    if(gameStarted){
        nextSequence();
    }
   
});

function checkAnswer(currentLevel){
    if(userClickedPattern[currentLevel] === gamePattern[currentLevel]){
        console.log("success");
        if(userClickedPattern.length === gamePattern.length){
            setTimeout(() =>{
                nextSequence();
            }, 1000);
            userClickedPattern = [];
        }
    }else{
        playSound("wrong");
        console.log("wrong");
        $("body").addClass("game-over");
        setTimeout(()=>{
            $("body").removeClass("game-over");
        }, 200);
        $("h1").text("Game Over, Press Any Key to Restart!");
        startOver();
    }
}

function startOver(){
    level = 0;
    gamePattern = [];
    gameStarted = true;

}






// for(var i = 0; i < 20; i++){
//     var pattern = nextSequence();    
//     var originalColor = $("#" + pattern[i]).css("background-color");
//     var sound = $('<embed autoplay="true" height="0" width="0" />');
//     sound.attr('src', "./sounds/" + pattern[i] + ".mp3");
//     $('body').append(sound);
//     $("#" + pattern[i]).css("background-color", "black");

//     setTimeout(() => {
//         $("#" + pattern[i]).css("background-color",);
//     }, 200);
//     // var pattern = nextSequence();
// }