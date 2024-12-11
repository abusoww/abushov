const groups = [
    { name: '1-ci Qrup', subjects: ['Azərbaycan dili', 'Riyaziyyat', 'Fizika', 'Kimya', 'Biologiya'] },
    { name: '2-ci Qrup', subjects: ['Azərbaycan dili', 'Riyaziyyat', 'Tarix', 'Coğrafiya', 'Ədəbiyyat'] },
    { name: '3-cü Qrup', subjects: ['Azərbaycan dili', 'Riyaziyyat', 'Tarix', 'Ədəbiyyat', 'Xarici dil'] },
    { name: '4-cü Qrup', subjects: ['Azərbaycan dili', 'Riyaziyyat', 'Tarix', 'Coğrafiya', 'Xarici dil'] },
    { name: 'Buraxılış İmtahanı', subjects: ['Azərbaycan dili', 'Riyaziyyat', 'Xarici dil'] },
];

let activeGroup = null;
let results = null;

function init() {
    createStars();
    const groupButtons = document.getElementById('groupButtons');
    groups.forEach(group => {
        const button = document.createElement('button');
        button.textContent = group.name;
        button.className = 'button';
        button.addEventListener('click', () => handleGroupClick(group.name));
        groupButtons.appendChild(button);
    });

    document.getElementById('calculateButton').addEventListener('click', calculateScores);
    document.getElementById('recalculateButton').addEventListener('click', resetForm);
    document.getElementById('downloadButton').addEventListener('click', downloadResults);
}

function createStars() {
    const starsContainer = document.getElementById('stars');
    for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.width = `${Math.random() * 3}px`;
        star.style.height = star.style.width;
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDelay = `${Math.random() * 5}s`;
        starsContainer.appendChild(star);
    }
}

function handleGroupClick(groupName) {
    activeGroup = groups.find(g => g.name === groupName);
    document.getElementById('activeGroupTitle').textContent = activeGroup.name;
    generateForm();
    document.getElementById('examForm').style.display = 'block';
    document.getElementById('results').style.display = 'none';
    
    // Update active button
    document.querySelectorAll('#groupButtons .button').forEach(button => {
        button.classList.toggle('active', button.textContent === groupName);
    });
}

function generateForm() {
    const form = document.getElementById('scoreForm');
    form.innerHTML = '';
    activeGroup.subjects.forEach(subject => {
        const subjectDiv = document.createElement('div');
        subjectDiv.className = 'subject';
        subjectDiv.innerHTML = `
            <h3>${subject}</h3>
            <div class="input-group">
                <label>
                    Doğru:
                    <input type="number" name="${subject}-correct" min="0">
                </label>
                <label>
                    Yanlış:
                    <input type="number" name="${subject}-incorrect" min="0">
                </label>
                <label>
                    Açıq:
                    <input type="number" name="${subject}-open" min="0">
                </label>
                <label>
                    Qapalı:
                    <input type="number" name="${subject}-closed" min="0">
                </label>
            </div>
        `;
        form.appendChild(subjectDiv);
    });
}

function calculateScores() {
    results = {};
    activeGroup.subjects.forEach(subject => {
        const correct = parseInt(document.querySelector(`[name="${subject}-correct"]`).value) || 0;
        const incorrect = parseInt(document.querySelector(`[name="${subject}-incorrect"]`).value) || 0;
        const open = parseInt(document.querySelector(`[name="${subject}-open"]`).value) || 0;
        const closed = parseInt(document.querySelector(`[name="${subject}-closed"]`).value) || 0;

        const score = Math.max(0, Math.min(100, correct * 2 + incorrect * -0.5 + open * 3 + closed * 1));
        results[subject] = score;
    });

    displayResults();
}

function displayResults() {
    const tableBody = document.querySelector('#resultsTable tbody');
    tableBody.innerHTML = '';
    let totalScore = 0;

    for (const [subject, score] of Object.entries(results)) {
        const row = tableBody.insertRow();
        row.insertCell(0).textContent = subject;
        row.insertCell(1).textContent = score.toFixed(2);
        totalScore += score;
    }

    const totalRow = tableBody.insertRow();
    totalRow.className = 'total';
    totalRow.insertCell(0).textContent = 'Ümumi bal';
    totalRow.insertCell(1).textContent = totalScore.toFixed(2);

    document.getElementById('examForm').style.display = 'none';
    document.getElementById('results').style.display = 'block';
}

function resetForm() {
    document.getElementById('examForm').style.display = 'block';
    document.getElementById('results').style.display = 'none';
}

function downloadResults() {
    if (results) {
        const resultsText = Object.entries(results)
            .map(([subject, score]) => `${subject}: ${score.toFixed(2)}`)
            .join('\n');
        const blob = new Blob([resultsText], { type: 'text/plain' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'imtahan_neticeleri.txt';
        a.click();
        URL.revokeObjectURL(url);
    }
}

document.addEventListener('DOMContentLoaded', init);
