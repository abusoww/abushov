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

function calculateGraduationScore() {
    const openQuestions = document.getElementById('open-questions').value;
    const closedQuestions = document.getElementById('closed-questions').value;

    if (openQuestions === '' || closedQuestions === '') {
        alert('Пожалуйста, заполните все поля');
        return;
    }

    const score = 2.5 * (2 * openQuestions + closedQuestions);
    document.getElementById('graduation-score').textContent = `Баллы: ${score.toFixed(2)}`;
}
