const noButton = document.getElementById('noButton');
const yesButton = document.getElementById('yesButton');

let noSize = 1;
let yesSize = 1;
let clickCount = 0;

const noTexts = ["NO", "Seriously?", "Dude, I swear to god", "Last chance..."];

// "NO" button click behavior
noButton.addEventListener('click', () => {
    if (clickCount < noTexts.length) {
        noButton.textContent = noTexts[clickCount]; // Update text
        noSize -= 0.15;
        yesSize += 0.15;

        // Scale buttons while increasing margin to push them apart
        noButton.style.transform = `scale(${noSize})`;
        yesButton.style.transform = `scale(${yesSize})`;

        // Add margin to push them apart when growing
        noButton.style.marginRight = `${clickCount * 10}px`;
        yesButton.style.marginLeft = `${clickCount * 10}px`;

        clickCount++;
    } else {
        // Turn "NO" into another "YES" button
        noButton.textContent = "YES";
        noButton.style.backgroundColor = "green";
        noButton.style.transform = "scale(1)";
        noButton.onclick = () => window.location.href = "landing.html";
    }
});

// "YES" button click behavior
yesButton.addEventListener('click', () => {
    window.location.href = "landing.html";
});
