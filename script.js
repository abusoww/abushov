document.getElementById("inputForm").addEventListener("submit", function(event) {
    // Prevent form submission
    event.preventDefault();

    // Get the values from input fields
    const azerValue = parseInt(document.getElementById("azer").value, 10);
    const englishValue = parseInt(document.getElementById("english").value, 10);
    const mathValue = parseInt(document.getElementById("math").value, 10);

    // Set valid ranges
    const ranges = {
        azer: [20, 30],
        english: [23, 30],
        math: [13, 20]
    };

    // Validation flag
    let isValid = true;

    // Check if values are within the specified ranges
    if (azerValue < ranges.azer[0] || azerValue > ranges.azer[1]) {
        alert("Azarbaycan dili should be between " + ranges.azer[0] + " and " + ranges.azer[1]);
        isValid = false;
    }

    if (englishValue < ranges.english[0] || englishValue > ranges.english[1]) {
        alert("İngilis dili should be between " + ranges.english[0] + " and " + ranges.english[1]);
        isValid = false;
    }

    if (mathValue < ranges.math[0] || mathValue > ranges.math[1]) {
        alert("Riyaziyyat should be between " + ranges.math[0] + " and " + ranges.math[1]);
        isValid = false;
    }

    // If all values are valid, show a success message
    if (isValid) {
        alert("All values are valid! Form submitted successfully.");
        // You can add additional code to process the form data here if needed
    }
});
