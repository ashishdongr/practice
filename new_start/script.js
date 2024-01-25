function displayGreeting() {
    alert('Hello! You clicked the button.');
}

// Get the button element by its id
var greetButton = document.getElementById('greetButton');

// Attach a click event listener to the button
greetButton.addEventListener('click', displayGreeting);
