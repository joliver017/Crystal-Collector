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
$(document).ready(function() {
  $("#currentNumber").text(randomNumber);
});

// Function for each click on a crystal to add their random value to the total score
// winLose function is called each time to cross-reference the total and random number
$("#crystal_1").on("click", function() {
  totalScore = totalScore + value_1;
  console.log("total score = " + totalScore);
  $("#totalScore").text(totalScore);

  winLose();
});

$("#crystal_2").on("click", function() {
  totalScore = totalScore + value_2;
  console.log("total score = " + totalScore);
  $("#totalScore").text(totalScore);

  winLose();
});

$("#crystal_3").on("click", function() {
  totalScore = totalScore + value_3;
  console.log("total score = " + totalScore);
  $("#totalScore").text(totalScore);

  winLose();
});

$("#crystal_4").on("click", function() {
  totalScore = totalScore + value_4;
  console.log("total score = " + totalScore);
  $("#totalScore").text(totalScore);

  winLose();
});

// This function is called on each click of a crystal to check if the total score matches the random number
// Win or lose, the game resets and keeps track of wins and losses
function winLose() {
  if (totalScore === randomNumber) {
    alert("you win");
    totalWins++;
    $("#totalWins").text(totalWins);

    randomNumber = Math.floor(Math.random() * 102) + 19;
    $("#currentNumber").text(randomNumber);
    totalScore = 0;
    $("#totalScore").text(totalScore);

    value_1 = Math.floor(Math.random() * 12) + 1;
    value_2 = Math.floor(Math.random() * 12) + 1;
    value_3 = Math.floor(Math.random() * 12) + 1;
    value_4 = Math.floor(Math.random() * 12) + 1;
  } 
  
  else if (totalScore > randomNumber) {
    alert("you lose");
    totalLosses++;
    $("#totalLosses").text(totalLosses);

    randomNumber = Math.floor(Math.random() * 102) + 19;
    $("#currentNumber").text(randomNumber);
    totalScore = 0;
    $("#totalScore").text(totalScore);

    value_1 = Math.floor(Math.random() * 12) + 1;
    value_2 = Math.floor(Math.random() * 12) + 1;
    value_3 = Math.floor(Math.random() * 12) + 1;
    value_4 = Math.floor(Math.random() * 12) + 1;
  }
};
