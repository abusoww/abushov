function showGroup(group) {
    const content = document.getElementById('content');
    content.innerHTML = ''; // Очистка содержимого

    if (group === 'graduation') {
        content.innerHTML = '<h2>Выпускной экзамен</h2><p>Предметы: Математика, Русский, Английский.</p>';
    } else if (group === 'group1') {
        content.innerHTML = '<h2>I группа</h2><p>Предметы: Математика, Физика, Информатика.</p>';
    } else if (group === 'group2') {
        content.innerHTML = '<h2>II группа</h2><p>Предметы: География, История, Математика.</p>';
    } else if (group === 'group3') {
        content.innerHTML = '<h2>III группа</h2><p>Предметы: Литература, История, Русский язык.</p>';
    } else if (group === 'group4') {
        content.innerHTML = '<h2>IV группа</h2><p>Предметы: Биология, Химия, Физика.</p>';
    }
}
