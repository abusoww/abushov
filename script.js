function changeValue(id, delta) {
    const input = document.getElementById(id);
    let value = parseInt(input.value);
    value += delta;

    // Ограничения для значений
    if (value < 0) {
        value = 0;
    } else if (value > 10) {
        value = 10;
    }

    input.value = value;
}

function calculateScores() {
    const openMath = parseInt(document.getElementById('open-math').value);
    const closedMath = parseInt(document.getElementById('closed-math').value);
    const codingMath = parseInt(document.getElementById('coding-math').value);

    const openEnglish = parseInt(document.getElementById('open-english').value);
    const closedEnglish = parseInt(document.getElementById('closed-english').value);

    const openAzerbaijani = parseInt(document.getElementById('open-azerbaijani').value);
    const closedAzerbaijani = parseInt(document.getElementById('closed-azerbaijani').value);

    // Формулы расчета баллов
    const mathScore = (25 / 8) * (2 * openMath + closedMath + codingMath);
    const englishScore = (100 / 37) * (2 * openEnglish + closedEnglish);
    const azerbaijaniScore = (100 / 37) * (2 * openAzerbaijani + closedAzerbaijani);

    // Вывод результатов
    document.getElementById('math-result').textContent = `Riyaziyyat: ${mathScore.toFixed(2)} bal`;
    document.getElementById('english-result').textContent = `İngilis dili: ${englishScore.toFixed(2)} bal`;
    document.getElementById('azerbaijani-result').textContent = `Azərbaycan dili: ${azerbaijaniScore.toFixed(2)} bal`;
}

function showGraduationForm() {
    const form = document.getElementById('graduation-form');
    form.style.display = form.style.display === 'block' ? 'none' : 'block';
}
