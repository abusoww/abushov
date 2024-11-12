document.getElementById("score-form").addEventListener("submit", function(event) {
    event.preventDefault();

    let subject1 = parseInt(document.getElementById("subject1").value);
    let subject2 = parseInt(document.getElementById("subject2").value);
    let subject3 = parseInt(document.getElementById("subject3").value);
    let subject4 = parseInt(document.getElementById("subject4").value);

    if (checkRange(subject1) && checkRange(subject2) && checkRange(subject3) && checkRange(subject4)) {
        let total = subject1 + subject2 + subject3 + subject4;
        let average = total / 4;
        document.getElementById("result").innerHTML = `Total: ${total}, Average: ${average}`;
    }
});

function checkRange(value) {
    if (value < 0 || value > 100) {
        alert("Please enter a value between 0 and 100.");
        return false;
    }
    return true;
}
