// User loads page

// Have function/event listener for when "Start Quiz" button is clicked
    // Starts timer countdown from 75
    // Runs through questions/arrays


// function/event listener for when answer button is clicked
    // If correct:
        // +20 points
        // display "Correct!" to user
    // If incorrect:
        // -15 seconds on
        // no points
        // display "Incorrect!" to user (use <hr> above display text)
    // Cycles to next question

// Quiz ends when:
    // All quesitions are answered
    // Timer runs out
// when quiz ends - user enters intials
    // function/event listener for submit button
    // when submit button clicked display highscores (store local data)


// Function/event lisetener for when highscore button is clicked in nav bar (same function as submit)
    // When high score button clicked display highscores




// questions
// question 1 "Commonly used data types DO NOT include _______."
    // answer 1 "alerts" i[2]
// question 2 "The condition in an if/else statement is enclosed within _______."
    // answer 2 "parentheses" i[0]
// question 3 "Arrays in JavaScript can be used to store _______."
    // answer 3 "all of the above" i[3]
// question 4 "String values must be enclosed within _______ when being assigned to variables."
    // answer 4 "quotes" i[2]
// question 5 "A very useful tool used during development and debugging for printing content to the browser console is _______."
    // answer 5 "console.log" i[3]

// Variables
    // Quiz question arrays
var quest1 = ["strings", "booleans", "alerts", "numbers"];
var quest2 = ["parentheses", "curly brackets", "quotes", "square brackets"];
var quest3 = ["other arrays", "booleans", "numbers and strings", "all of the above"];
var quest4 = ["commas", "curly brackets", "quotes", "parentheses"];
var quest5 = ["JavaScript", "terminal/bash", "for loops", "console.log"];


var timeEl = document.querySelector("#time");

var secondsLeft = 75;
var timerInterval = 0;
var score = 0;


// Functions


// For when the Start Quiz button is clicked
function start() {
   var timerInterval = setInterval(function() {
      secondsLeft--;
      document.getElementById("secondsLeft").innerHTML = secondsLeft;  
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
        gameOver();
      }
    }, 
    1000);
};
// For when the timer runs out
function gameOver() {
    clearInterval(timerInterval);
    var gameOverScreen = '<h2>"All done!"</h2>'
};

// For when the correct answer button is clicked
// function correct(){
//     score: +20;
// };
// // For when an incorrect answer button is clicked
// function incorrect(){
//     timerInterval: -10;
// };
// // For when either correct or incorrect button is clicked, cycle to next question
// function next(){
//    
// }

// };
// // For when either:
//     // Highscores link is clicked
//     // Submit score button is clicked
// function highscores(){

// };



// Event Listeners
document.getElementById("startBtn").addEventListener("click", start);