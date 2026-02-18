let randomNumber = Math.floor(Math.random() * 10) + 1;
let userGuess;

console.log(randomNumber)
let attempts = 0;

while (userGuess != randomNumber) {
    userGuess = prompt("guess the number")
    userGuess = Number(userGuess)
    attempts++; 

    if (userGuess == randomNumber) {
        alert(`Congratulations, you've guessed it in ${attempts} attempts!`);
        break
    }
    else if (userGuess === 999) {
        break
    }
    else if (userGuess > randomNumber) {
        alert("Too high");
        continue;
    }
    else if (userGuess < randomNumber) {
        alert("Too low");
        continue;
    }
    else {
        alert("Invalid Input")
    }
}
// Prompt user for a number between 1 and 10, or type 999 to exit.
// Create while loop that continues for as long as the user guesses are incorrect.
// Loop should count the number of guesses.
// Loop should exit if user enters 999 and not display "Too high!"
// If the guess is too low, the user should be promped "Too low!" and be able to guess again.
// If the guess is too high, the user should be promped 'Too high!" and be able to guess again.
// If anything else is entered, the user should be prompted that their input is invalid and 
// to guess again.

// If the guess is correct, the user should be alerted of their win and 
// be told the number of guesses they made.