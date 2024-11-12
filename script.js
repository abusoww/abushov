function increment(id) {
    var input = document.getElementById(id);
    input.value = parseInt(input.value) + 1;
}

function decrement(id) {
    var input = document.getElementById(id);
    if (input.value > 0) {
        input.value = parseInt(input.value) - 1;
    }
}

function calculateScores() {
    var mathOpen = parseInt(document.getElementById('math_open').value);
    var mathClosed = parseInt(document.getElementById('math_closed').value);
    var mathCoded = parseInt(document.getElementById('math_coded').value);
    var russianOpen = parseInt(document.getElementById('russian_open').value);
    var russianClosed = parseInt(document.getElementById('russian_closed').value);
    var englishOpen = parseInt(document.getElementById('english_open').value);
    var englishClosed = parseInt(document.getElementById('english_closed').value);

    // Формулы для расчета баллов
    var mathScore = (25 / 8) * (2 * mathOpen + mathClosed + mathCoded);
    var russianScore = 2.5 * (2 * russianOpen + russianClosed);
    var englishScore = (100 / 37) * (2 * englishOpen + englishClosed);

    // Вывод результатов
    var result = "Математика: " + mathScore.toFixed(2) + "<br>" +
                 "Русский язык: " + russianScore.toFixed(2) + "<br>" +
                 "Английский язык: " + englishScore.toFixed(2);

    document.getElementById("result").innerHTML = result;
}
