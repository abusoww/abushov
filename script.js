function showGroup(group) {
    const groups = ['graduation'];
    groups.forEach(g => {
        const groupElement = document.getElementById(g);
        if (group === g) {
            groupElement.style.display = 'block';
        } else {
            groupElement.style.display = 'none';
        }
    });
}

// Функция для увеличения значения
function increment(id) {
    let input = document.getElementById(id);
    input.value = parseInt(input.value) + 1;
}

// Функция для уменьшения значения
function decrement(id) {
    let input = document.getElementById(id);
    if (input.value > 0) {
        input.value = parseInt(input.value) - 1;
    }
}

// Расчет баллов для Математики
function calculateMathScore() {
    const openQuestions = document.getElementById('open-questions-math').value;
    const closedQuestions = document.getElementById('closed-questions-math').value;
    const codingQuestions = document.getElementById('coding-questions-math').value;

    if (openQuestions === '' || closedQuestions === '' || codingQuestions === '') {
        alert('Пожалуйста, заполните все поля для математики');
        return 0;
    }

    return (25 / 8) * (2 * openQuestions + parseInt(closedQuestions) + parseInt(codingQuestions));
}

// Расчет баллов для Русского
function calculateRussianScore() {
    const openQuestions = document.getElementById('open-questions-russian').value;
    const closedQuestions = document.getElementById('closed-questions-russian').value;

    if (openQuestions === '' || closedQuestions === '') {
        alert('Пожалуйста, заполните все поля для русского языка');
        return 0;
    }

    return 2.5 * (2 * openQuestions + parseInt(closedQuestions));
}

// Расчет баллов для Английского
function calculateEnglishScore() {
    const openQuestions = document.getElementById('open-questions-english').value;
    const closedQuestions = document.getElementById('closed-questions-english').value;

    if (openQuestions === '' || closedQuestions === '') {
        alert('Пожалуйста, заполните все поля для английского языка');
        return 0;
    }

    return (100 / 37) * (2 * openQuestions + parseInt(closedQuestions));
}

// Расчет всех баллов
function calculateAllScores() {
    const mathScore = calculateMathScore();
    const russianScore = calculateRussianScore();
    const englishScore = calculateEnglishScore();

    document.getElementById('math-score').textContent = `Баллы по математике: ${mathScore.toFixed(2)}`;
    document.getElementById('russian-score').textContent = `Баллы по русскому языку: ${russianScore.toFixed(2)}`;
    document.getElementById('english-score').textContent = `Баллы по английскому языку: ${englishScore.toFixed(2)}`;
}
