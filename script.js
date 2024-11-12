function showGraduationForm() {
    const form = document.getElementById('graduation-form');
    form.style.display = 'block';
}

function changeValue(id, delta) {
    const input = document.getElementById(id);
    let value = parseInt(input.value);
    value += delta;
    input.value = Math.max(0, value);
}

function resetErrorMessages() {
    const errorMessages = document.querySelectorAll('.error-message');
    errorMessages.forEach(message => message.textContent = '');
}

function validateInput(id, value, min, max, errorId) {
    const errorMessage = document.getElementById(errorId);
    if (value < min || value > max) {
        errorMessage.textContent = `Xəta: Dəyər ${min} ilə ${max} arasında olmalıdır.`;
        return false;
    }
    return true;
}

function calculateScores() {
    const openMath = parseInt(document.getElementById('open-math').value);
    const closedMath = parseInt(document.getElementById('closed-math').value);
    const codingMath = parseInt(document.getElementById('coding-math').value);

    const openEnglish = parseInt(document.getElementById('open-english').value);
    const closedEnglish = parseInt(document.getElementById('closed-english').value);

    const openRussian = parseInt(document.getElementById('open-russian').value);
    const closedRussian = parseInt(document.getElementById('closed-russian').value);

    let valid = true;
    resetErrorMessages();

    // Validate inputs
    valid &= validateInput('open-math', openMath, 0, 10, 'open-math-error');
    valid &= validateInput('closed-math', closedMath, 0, 13, 'closed-math-error');
    valid &= validateInput('coding-math', codingMath, 0, 5, 'coding-math-error');
    valid &= validateInput('open-english', openEnglish, 0, 3, 'open-english-error');
    valid &= validateInput('closed-englishHere are the full files you requested for `index.html` and `script.js`. You can use this code to build your webpage for calculating graduation exam scores.

### `index.html`
This file contains the structure of the webpage, including a table for inputting scores and buttons for calculating results.

### `script.js`
This file contains the JavaScript to handle the logic for input validation, score calculation, and error handling.
