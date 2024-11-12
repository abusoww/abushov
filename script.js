function showGroup(group) {
    const groups = ['graduation', 'group1', 'group2', 'group3', 'group4'];
    groups.forEach(g => {
        const groupElement = document.getElementById(g);
        if (group === g) {
            groupElement.style.display = 'block';
        } else {
            groupElement.style.display = 'none';
        }
    });
}

// Формула для Математики
function calculateMathScore() {
    const openQuestions = document.getElementById('open-questions-math').value;
    const closedQuestions = document.getElementById('closed-questions-math').value;

    if (openQuestions === '' || closedQuestions === '') {
        alert('Пожалуйста, заполните все поля');
        return;
    }

    const score = (25 / 8) * (2 * openQuestions + closedQuestions);
    document.getElementById('math-score').textContent = `Баллы: ${score.toFixed(2)}`;
}

// Формула для Русского
function calculateRussianScore() {
    const openQuestions = document.getElementById('open-questions-russian').value;
    const closedQuestions = document.getElementById('closed-questions-russian').value;

    if (openQuestions === '' || closedQuestions === '') {
        alert('Пожалуйста, заполните все поля');
        return;
    }

    const score = 2.5 * (2 * openQuestions + closedQuestions);
    document.getElementById('russian-score').textContent = `Баллы: ${score.toFixed(2)}`;
}

// Формула для Английского
function calculateEnglishScore() {
    const openQuestions = document.getElementById('open-questions-english').value;
    const closedQuestions = document.getElementById('closed-questions-english').value;

    if (openQuestions === '' || closedQuestions === '') {
        alert('Пожалуйста, заполните все поля');
        return;
    }

    const score = (100 / 37) * (2 * openQuestions + closedQuestions);
    document.getElementById('english-score').textContent = `Баллы: ${score.toFixed(2)}`;
}
