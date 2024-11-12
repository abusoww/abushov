function showGroup(group) {
    const content = document.getElementById('content');
    let groupInfo = '';

    const subjects = {
        'graduation': ['Математика', 'Русский язык', 'Английский'],
        'group1': ['Математика', 'Физика', 'Информатика'],
        'group2': ['География', 'История', 'Математика'],
        'group3': ['Литература', 'История', 'Русский язык'],
        'group4': ['Биология', 'Химия', 'Физика']
    };

    let subjectInputs = subjects[group].map(subject => {
        return `
            <div class="mb-3">
                <label for="${subject}" class="form-label">${subject}</label>
                <input type="number" class="form-control" id="${subject}" placeholder="Введите балл">
            </div>
        `;
    }).join('');

    groupInfo = `
        <h2>${group === 'graduation' ? 'Выпускной экзамен' : 'Группа ' + group.charAt(group.length - 1)}</h2>
        ${subjectInputs}
        <button class="btn btn-success" onclick="calculateScore('${group}')">Рассчитать</button>
        <p id="${group}-result"></p>
    `;

    content.innerHTML = groupInfo;
}

function calculateScore(group) {
    const subjects = {
        'graduation': ['Математика', 'Русский язык', 'Английский'],
        'group1': ['Математика', 'Физика', 'Информатика'],
        'group2': ['География', 'История', 'Математика'],
        'group3': ['Литература', 'История', 'Русский язык'],
        'group4': ['Биология', 'Химия', 'Физика']
    };

    const totalScore = subjects[group].reduce((total, subject) => {
        const score = parseFloat(document.getElementById(subject).value);
        return total + (isNaN(score) ? 0 : score);
    }, 0);

    document.getElementById(`${group}-result`).innerHTML = `Общий балл: ${totalScore}`;
}
