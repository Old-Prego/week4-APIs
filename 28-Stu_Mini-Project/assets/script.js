// TODO: Start game button
// TODO: Create blanks based on words
    // TODO: Make list of words
    // TODO: When assigning word to page, split word into array
// TODO: Figure out how to tie user typing to blank checking
    // TODO: Use checks on keypress events
    // TODO: Loop through array of letters on current word to find any matches



// TODO: Countdown Function

// TODO: Keypress Event

// TODO: Split word into array function

// TODO: Reveal letter

// TODO: Whole word completed

// TODO: On success or failure, log score to local storage

// TODO: On start game, display word as blanks, reset timer

// TODO: BONUS: Reset score

// TODO: Split word into letters array, take length of array and add
// TODO: underscores per letter to the span. Then when someone guesses a correct
// TODO: letter, it loops through looking for matches and replaces underscores with
// TODO: the correctly guessed letter

// TODO: Instead of displaying underscores, display the letters individually, but hide 
// TODO: via CSS

var guessDiv = document.querySelector("#word");

var words = ["object","variable","javascript","cascading","react","github"];

var wordChoice = Math.floor(Math.random() * words.length);

var answerWord = words[wordChoice];

var letters = answerWord.split('');

var guess = [];

var i;

for (i = 0; i < letters.length; i++) {
    guess.push("_");
}

guessDiv.textContent = guess;

console.log(letters);

function keyPress(event) {
    for (i = 0; i < letters.length; i++){
        if(event.key == letters[i]){
            guess[i] = letters[i];
        }
        var x;
        for (x = 0; x < guess.length; x++){
            if(guess[x] !== "_"){

            }
        }
    }
    guessDiv.textContent = guess;
}

document.addEventListener("keydown",keyPress)


function countdown() {
    var timeLeft = 60;
    // Use the `setInterval()` method to call a function to be executed every 1000 milliseconds
    var timeInterval = setInterval(function () {
      // As long as the `timeLeft` is greater than 1
      if (timeLeft > 1) {
        // Set the `textContent` of `timerEl` to show the remaining seconds
        timerEl.textContent = timeLeft + ' seconds remaining';
        // Decrement `timeLeft` by 1
        timeLeft--;
      } else if (timeLeft === 1) {
        // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
        timerEl.textContent = timeLeft + ' second remaining';
        timeLeft--;
      } else {
        // Once `timeLeft` gets to 0, set `timerEl` to an empty string
        timerEl.textContent = '';
        // Use `clearInterval()` to stop the timer
        clearInterval(timeInterval);
        // Call the `displayMessage()` function
        window.alert("Game Over!");
      }
    }, 1000);
  }