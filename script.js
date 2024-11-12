document.getElementById('taskForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const language = document.getElementById('language').value;
    const closed = parseInt(document.getElementById('closed').value, 10);
    const open = parseInt(document.getElementById('open').value, 10);
    const openCode = parseInt(document.getElementById('openCode').value, 10);
    let message = "";

    switch (language) {
        case 'azerbaijani':
            if (closed < 20 || closed > 20) {
                message += "Qapalı tipli tapşırıqlar 20 olmalıdır. ";
            }
            if (open < 10 || open > 10) {
                message += "Açıq tipli tapşırıqlar 10 olmalıdır. ";
            }
            break;
        case 'english':
            if (closed < 23 || closed > 23) {
                message += "Closed questions should be 23. ";
            }
            if (open < 7 || open > 7) {
                message += "Open questions should be 7. ";
            }
            break;
        case 'math':
            if (closed < 13 || closed > 13) {
                message += "Closed math questions should be 13. ";
            }
            if (open < 7 || open > 7) {
                message += "Open math questions should be 7. ";
            }
            if (openCode < 5 || openCode > 5) {
                message += "Coding questions should be 5. ";
            }
            break;
    }

    if (message === "") {
        message = "Bütün tapşırıqlar düzgündür!";
    }

    document.getElementById('message').textContent = message;
});
