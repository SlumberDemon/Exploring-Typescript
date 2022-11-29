const RANDOM_NUMBER: number = Math.floor(Math.random() * 10) + 1;

let guesses = 3;

let guess: number;

while (guesses > 0) {
  guess = parseInt(prompt("Guess a number between 1 and 10"));
  guesses--;

  if (guess === RANDOM_NUMBER) {
    console.log("You guessed the number!");
    break;
  } else {
    console.log("Wrong guess. You have " + guesses + " guesses left");
  }
}

if (guess !== RANDOM_NUMBER) {
  console.log("Sorry, you ran out of guesses. The correct number was " + RANDOM_NUMBER);
}
