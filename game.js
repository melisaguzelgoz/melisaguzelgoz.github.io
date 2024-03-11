// Define a list of words
const words = ['apple', 'banana', 'orange', 'grape', 'kiwi'];

// Select a random word
let word = words[Math.floor(Math.random() * words.length)];

// Track guessed letters
let guessedLetters = [];

// Initialize word display
let wordDisplay = '';
for (let i = 0; i < word.length; i++) {
  wordDisplay += '_ ';
}
document.getElementById('word-display').textContent = wordDisplay;

// Event listener for guessing
document.getElementById('guess-button').addEventListener('click', function() {
  let guess = document.getElementById('guess-input').value.toLowerCase();

  // Check if the guessed letter is valid
  if (!guess.match(/[a-z]/)) {
    document.getElementById('message').textContent = 'Please enter a valid letter!';
    return;
  }

  // Check if the letter has already been guessed
  if (guessedLetters.includes(guess)) {
    document.getElementById('message').textContent = 'You already guessed that letter!';
    return;
  }

  // Add guessed letter to the list
  guessedLetters.push(guess);

  // Check if the guessed letter is in the word
  if (word.includes(guess)) {
    // Update word display with correctly guessed letters
    let newWordDisplay = '';
    for (let i = 0; i < word.length; i++) {
      if (guessedLetters.includes(word[i])) {
        newWordDisplay += word[i] + ' ';
      } else {
        newWordDisplay += '_ ';
      }
    }
    document.getElementById('word-display').textContent = newWordDisplay;

    // Check if the word has been fully guessed
    if (!newWordDisplay.includes('_')) {
      document.getElementById('message').textContent = 'Congratulations! You guessed the word!';
      document.getElementById('guess-input').disabled = true;
      document.getElementById('guess-button').disabled = true;
    }
  } else {
    // Decrease remaining attempts and display message
    document.getElementById('message').textContent = 'Incorrect guess. Try again!';
  }
});
