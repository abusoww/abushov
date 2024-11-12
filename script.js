function increment(id) {
    let input = document.getElementById(id);
    input.value = parseInt(input.value) + 1;
}

function decrement(id) {
    let input = document.getElementById(id);
    if (parseInt(input.value) > 0) {
        input.value = parseInt(input.value) - 1;
    }
}

function calculateScore() {
    let openMath = parseInt(document.getElementById('open-questions-math').value);
    let closedMath = parseInt(document.getElementById('closed-questions-math').value);
    let codingMath = parseInt(document.getElementById('coding-questions-math').value);
    
    let openRussian = parseInt(document.getElementById('open-questions-russian').value);
    let closedRussian = parseInt(document.getElementById('closed-questions-russian').value);

    let openEnglish = parseInt(document.getElementById('open-questions-english').value);
    let closedEnglish = parseInt(document.getElementById('closed-questions-english').value);

    // Математика
    let mathScore = (25 / 8) * (2 * openMath + closedMath + codingMath);

    // Русский язык
    let russianScore = 2.5 * (2 * openRussian + closedRussian);

    // Английский язык
    let englishScore = (100 / 37) * (2 * openEnglish + closedEnglish);

    let totalScore = mathScore + russianScore + englishScore;

    alert("Ваши баллы: " + totalScore);
}
