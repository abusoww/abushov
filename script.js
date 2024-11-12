function showGroup(group) {
    const content = document.getElementById('content');
    content.innerHTML = ''; // Очистка содержимого

    let subjects = '';
    if (group === 'graduation') {
        subjects = 'Математика, Русский, Английский';
    } else if (group === 'group1') {
        subjects = 'Математика, Физика, Информатика';
    } else if (group === 'group2') {
        subjects = 'География, История, Математика';
    } else if (group === 'group3') {
        subjects = 'Литература, История, Русский язык';
    } else if (group === 'group4') {
        subjects = 'Биология, Химия, Физика';
    }

    content.innerHTML = `
        <h2>${group === 'graduation' ? 'Выпускной экзамен' : group.replace('group', 'Группа ')}</h2>
        <p>Предметы: ${subjects}.</p>
        <form id="scoreForm">
            <label>Правильные ответы по каждому предмету: <input type="number" id="correctAnswers" min="0" required></label><br>
            <label>Неправильные ответы по каждому предмету: <input type="number" id="wrongAnswers" min="0" required></label><br>
            <button type="button" onclick="calculateScore()">Рассчитать балл</button>
        </form>
        <div id="result"></div>
    `;
}

function calculateScore() {
    const correctAnswers = document.getElementById('correctAnswers').value;
    const wrongAnswers = document.getElementById('wrongAnswers').value;
    const result = document.getElementById('result');

    if (correctAnswers === '' || wrongAnswers === '') {
        result.innerHTML = '<p>Пожалуйста, заполните все поля.</p>';
        return;
    }

    // Примерный расчет: 4 балла за правильный ответ и -1 за неправильный
    const score = (correctAnswers * 4) - (wrongAnswers * 1);
    result.innerHTML = `<p>Ваш балл: ${score}</p>`;
}
