// Function to show the Graduation Exam form
function showGraduationForm() {
    document.getElementById("graduation-form").style.display = "block";
}

// Function to calculate scores based on open, closed, and coding questions
function calculateScores() {
    const rows = document.querySelectorAll("#subject-table tbody tr");
    let totalScore = 0;
    let maxPossibleScore = 0;

    rows.forEach((row) => {
        const openQuestions = parseInt(row.querySelector("td:nth-child(2) input").value) || 0;
        const closedQuestions = parseInt(row.querySelector("td:nth-child(3) input").value) || 0;
        const codingQuestions = parseInt(row.querySelector("td:nth-child(4) input").value) || 0;

        // Example scoring logic
        const score = (openQuestions * 2) + (closedQuestions * 1) + (codingQuestions * 3);
        const maxScore = 10 * 2 + 20 * 1 + 5 * 3; // Customize as needed

        totalScore += score;
        maxPossibleScore += maxScore;
    });

    // Display results
    const resultsDiv = document.querySelector(".results");
    resultsDiv.style.display = "block";
    resultsDiv.innerHTML = `
        <div class="result-item">Total Score: ${totalScore}</div>
        <div class="result-item">Max Possible Score: ${maxPossibleScore}</div>
    `;
}
