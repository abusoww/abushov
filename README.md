<!DOCTYPE html>
<html lang="az">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>İmtahan Ballarını Hesablama</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <h1>İmtahan Ballarını Hesablama</h1>
        <p class="description">Doğru, yanlış, açıq və qapalı suallar haqqında məlumat daxil edərək ballarınızı hesablaya bilərsiniz.</p>
        
        <div id="groupButtons"></div>
        
        <div id="examForm" style="display: none;">
            <h2 id="activeGroupTitle"></h2>
            <form id="scoreForm">
                <!-- Form will be dynamically generated here -->
            </form>
            <button id="calculateButton">Hesabla</button>
        </div>
        
        <div id="results" style="display: none;">
            <h2>Nəticələr</h2>
            <table id="resultsTable">
                <thead>
                    <tr>
                        <th>Fənn</th>
                        <th>Bal</th>
                    </tr>
                </thead>
                <tbody>
                    <!-- Results will be dynamically inserted here -->
                </tbody>
            </table>
            <button id="recalculateButton">Yenidən hesabla</button>
            <button id="downloadButton">Nəticələri yüklə</button>
        </div>
    </div>
    <script src="script.js"></script>
</body>
</html>

