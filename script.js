// Get references to the buttons
const noButton = document.getElementById('noButton');
const yesButton = document.getElementById('yesButton');

// Initial size values for buttons
let noSize = 1;
let yesSize = 1;

// Counter for how many times the buttons have been clicked
let clickCount = 0;

// Function to handle the click behavior for the "NO" button
noButton.addEventListener('click', () => {
    // Update the text of the "NO" button with each click
    const phrases = ['NO', 'NOPE', 'NOT TODAY', 'NEVER', 'NO WAY'];
    noButton.textContent = phrases[clickCount % phrases.length];

    // Resize the buttons
    if (clickCount < 3) {
        noSize -= 0.1; // Decrease the "NO" button size
        yesSize += 0.1; // Increase the "YES" button size
        noButton.style.transform = `scale(${noSize})`;
        yesButton.style.transform = `scale(${yesSize})`;
        clickCount++;
    }
});
