function showExamForm(examType) {
    const formContainer = document.getElementById('exam-form');
    formContainer.style.display = 'block';
    document.getElementById('result').style.display = 'none';  // Hide result on new form load

    // You can customize the form for each exam type if needed, like adding more fields for specific exams
}

function calculateScore() {
    const correctOpen = parseInt(document.getElementById('correct-open').value);
    const correctClosed = parseInt(document.getElementById('correct-closed').value);
    const incorrectClosed = parseInt(document.getElementById('incorrect-closed').value);

    // Example for calculating score for "Azərbaycan Dili" (you can add similar logic for other subjects)
    const score = (2.5 * (2 * correctOpen + correctClosed)).toFixed(2);

    document.getElementById('score').innerText = score;
    document.getElementById('result').style.display = 'block';
}
