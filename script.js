function showGraduationForm() {
    document.getElementById('graduation-form').style.display = 'block';
}

function calculateScores() {
    const openMath = parseInt(document.getElementById('open-math').value);
    const closedMath = parseInt(document.getElementById('closed-math').value);
    const codingMath = parseInt(document.getElementById('coding-math').value);

    const openEnglish = parseInt(document.getElementById('open-english').value);
    const closedEnglish = parseInt(document.getElementById('closed-english').value);

    const openRussian = parseInt(document.getElementById('open-russian').value);
    const closedRussian = parseInt(document.getElementById('closed-russian').value);

    const mathScore = (25 / 8) * (2 * openMath + closedMath + codingMath);
    const englishScore = (100 / 37) * (2 * openEnglish + closedEnglish);
    const russianScore = 2.5 * (2 * openRussian + closedRussian);

    document.getElementById('math-result').textContent = `Математика: ${mathScore.toFixed(2)} баллов`;
    document.getElementById('english-result').textContent = `Английский: ${englishScore.toFixed(2)} баллов`;
    document.getElementById('russian-result').textContent = `Русский: ${russianScore.toFixed(2)} баллов`;

    document.getElementById('results').style.display = 'block';
}

function changeValue(id, delta) {
    const input = document.getElementById(id);
    let value = parseInt(input.value);
    value += delta;
    if (value < 0) value = 0;
    input.value = value;
}
