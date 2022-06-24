// I need a way to store my Wins, Ties and Losses
var wins = 0;
var ties = 0;
var losses = 0;

// I need a way to store Rock Paper and Scissor - ARRAY
var options = ["R", "P", "S"];

// I need to create a play function to start the application
var playGame = function () {
  // I want a way for users to give me a choice
  var userChoice = window.prompt("Please enter R, P, or S:");

  // I want to check if the user cancels and I probably want to end the program
  if (!userChoice) {
    return;
  }

  // I want to make sure I convert to Uppercase to match what is in my array
  userChoice = userChoice.toUpperCase();

  // I want to get a random selection from my options array
  var index = Math.floor(Math.random() * options.length);
  var computerChoice = options[index];

  window.alert("The computer chose " + computerChoice);

  // We want to check for the if the user and the computer choices are an exact match
  if (userChoice === computerChoice) {
    ties++;
    window.alert("Its a tie!!");
  } else if (
    (userChoice === "R" && computerChoice === "S") || 
    (userChoice === "P" && computerChoice === "R") || 
    (userChoice === "S" && computerChoice === "P")
  ) {
    wins++;
    window.alert("You win!!");
  } else {
    losses++;
    window.alert("You lost!");
  }

  window.alert("Stats:\nWins: " + wins + "\nLosses: " + losses + "\nTies: " + ties
  );

//   Ask the player to play again
var playAgain = window.confirm("Play again?")

// If the player confirm they want to play again
if(playAgain){
    playGame()
}
};

playGame();
