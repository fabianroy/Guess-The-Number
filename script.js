var randomNumber = Math.floor(Math.random() * 100) + 1;
    function checkGuess() {
        var guessInput = document.getElementById("guessInput");
        var guess = parseInt(guessInput.value);
        var message = document.getElementById("message");
        if (guess === randomNumber) {
            message.innerHTML = "Congratulations! You guessed the correct number!";
            message.style.color = "green";
            guessInput.disabled = true;
        } else if (guess < randomNumber) {
            message.innerHTML = "Too low! Try again.";
            message.style.color = "red";
        } else if (guess > randomNumber) {
            message.innerHTML = "Too high! Try again.";
            message.style.color = "red";
         }
    }
