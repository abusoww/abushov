// Show the appropriate group form based on the selection
function showGroupForm(group) {
    const subjectFields = document.getElementById('subject-fields');
    subjectFields.innerHTML = ''; // Clear previous fields

    switch(group) {
        case 'general':
            // Buraxılış İmtahanı - General fields
            subjectFields.innerHTML = `
                <label for="az-dili-open">Azərbaycan dili (Açıq Yazılı):</label>
                <input type="number" id="az-dili-open">
                <label for="az-dili-closed">Azərbaycan dili (Qapalı):</label>
                <input type="number" id="az-dili-closed">
                
                <label for="en-dili-open">İngilis dili (Açıq Yazılı):</label>
                <input type="number" id="en-dili-open">
                <label for="en-dili-closed">İngilis dili (Qapalı):</label>
                <input type="number" id="en-dili-closed">
                
                <label for="math-open">Riyaziyyat (Açıq Yazılı):</label>
                <input type="number" id="math-open">
                <label for="math-closed">Riyaziyyat (Qapalı):</label>
                <input type="number" id="math-closed">
                <label for="math-coding">Riyaziyyat (Açıq Kodlaşma):</label>
                <input type="number" id="math-coding">
            `;
            break;
        case 'group1':
            // 1-ci Qrup fields
            subjectFields.innerHTML = `
                <label for="math-closed1">Riyaziyyat (Qapalı):</label>
                <input type="number" id="math-closed1">
                <label for="math-wrong1">Riyaziyyat (Yalnış Qapalı):</label>
                <input type="number" id="math-wrong1">
                <label for="math-open1">Riyaziyyat (Açıq Yazılı):</label>
                <input type="number" id="math-open1">
                <label for="math-coding1">Riyaziyyat (Açıq Kodlaşma):</label>
                <input type="number" id="math-coding1">
                
                <label for="physics-closed">Fizika (Qapalı):</label>
                <input type="number" id="physics-closed">
                <label for="physics-wrong">Fizika (Yalnış Qapalı):</label>
                <input type="number" id="physics-wrong">
                <label for="physics-open">Fizika (Açıq Yazılı):</label>
                <input type="number" id="physics-open">
                <label for="physics-coding">Fizika (Açıq Kodlaşma):</label>
                <input type="number" id="physics-coding">
                
                <label for="chemistry-closed">Kimya (Qapalı):</label>
                <input type="number" id="chemistry-closed">
                <label for="chemistry-wrong">Kimya (Yalnış Qapalı):</label>
                <input type="number" id="chemistry-wrong">
                <label for="chemistry-open">Kimya (Açıq Yazılı):</label>
                <input type="number" id="chemistry-open">
                <label for="chemistry-coding">Kimya (Açıq Kodlaşma):</label>
                <input type="number" id="chemistry-coding">
            `;
            break;
        // Add cases for other groups as needed...
    }

    // Display the form
    document.getElementById('exam-form').style.display = 'block';
    document.getElementById('result').style.display = 'none';
}

// Calculate the score based on the inputs
function calculateScore() {
    const azDiliOpen = parseInt(document.getElementById('az-dili-open').value) || 0;
    const azDiliClosed = parseInt(document.getElementById('az-dili-closed').value) || 0;
    const enDiliOpen = parseInt(document.getElementById('en-dili-open').value) || 0;
    const enDiliClosed = parseInt(document.getElementById('en-dili-closed').value) || 0;
    const mathOpen = parseInt(document.getElementById('math-open').value) || 0;
    const mathClosed = parseInt(document.getElementById('math-closed').value) || 0;
    const mathCoding = parseInt(document.getElementById('math-coding').value) || 0;

    const generalScore = (2.5 * (2 * azDiliOpen + azDiliClosed) + 
                          (100 / 37) * (2 * enDiliOpen + enDiliClosed) + 
                          (25 / 8) * (2 * mathOpen + mathClosed + mathCoding));

    document.getElementById('score').innerText = generalScore.toFixed(2);
    document.getElementById('result').style.display = 'block';
}
