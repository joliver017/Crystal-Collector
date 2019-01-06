var randomNumber = Math.floor(Math.random() * 102) + 19;
var totalScore = 0;
var totalWins = 0;
var totalLosses = 0;


var value_1 = Math.floor(Math.random() * 12) + 1;
var value_2 = Math.floor(Math.random() * 12) + 1;
var value_3 = Math.floor(Math.random() * 12) + 1;
var value_4 = Math.floor(Math.random() * 12) + 1;

console.log("random number = " + randomNumber);
console.log(value_1);
console.log(value_2);
console.log(value_3);
console.log(value_4);

// This randomly selects and writes a random number when doc is ready
$( document ).ready(function() {
$("#currentNumber").text(randomNumber);
});

$("#crystal_1").on("click", function() {
    totalScore = totalScore + value_1;
    console.log("total score = " + totalScore);
    $("#totalScore").text(totalScore);

    if (totalScore === randomNumber){
        alert("you win");
    }
    else if (totalScore > randomNumber){
        alert("you lose");
    }
});

$("#crystal_2").on("click", function() {
    totalScore = totalScore + value_2;
    console.log("total score = " + totalScore);
    $("#totalScore").text(totalScore);

    if (totalScore === randomNumber){
        alert("you win");
    }
    else if (totalScore > randomNumber){
        alert("you lose");
    }
});

$("#crystal_3").on("click", function() {
    totalScore = totalScore + value_3;
    console.log("total score = " + totalScore);
    $("#totalScore").text(totalScore);

    if (totalScore === randomNumber){
        alert("you win");
    }
    else if (totalScore > randomNumber){
        alert("you lose");
    }
});

$("#crystal_4").on("click", function() {
    totalScore = totalScore + value_4;
    console.log("total score = " + totalScore);
    $("#totalScore").text(totalScore);

    if (totalScore === randomNumber){
        alert("you win");
    }
    else if (totalScore > randomNumber){
        alert("you lose");
    }
});