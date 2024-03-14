# Guess the Number Project

This project is a simple "Guess the Number" game implemented in React.

## Description

The "Guess the Number" game allows users to guess a randomly generated number within a specified range. After each guess, the game provides feedback on whether the guess is too high or too low until the user correctly guesses the number.

## Bugs

1. **After Win Background Color Not Changing**: Upon winning the game, the background color is supposed to change to green, indicating a correct guess. However, this functionality is currently not working.

2. **After Win, Restart Button Appears Even if Attempts Remaining**: When the user wins the game, the restart button should only appear if there are no remaining attempts left. However, it is currently displayed regardless of the remaining attempts.

3. **Incorrect Message Displayed After Guessing High**: When the user guesses a number higher than the secret number, the message displayed to the user is incorrect.

4. **Static Guess for Secret Number**: The secret number is currently static and not dynamically generated using `Math.random()`. This makes the game predictable and less engaging for the user.

5. **UI Incorrectly Displaying Remaining Attempts**: Although the logic for calculating the remaining attempts is correct, the UI is displaying the wrong value for the remaining attempts.

6. **Empty Input Value Accepted**: Currently, an empty input value is accepted as a valid guess, which it shouldn't be.

