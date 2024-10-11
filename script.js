document.getElementById("checkButton").addEventListener("click", function() {
    const attended = parseInt(document.getElementById("attended").value);
    const total = parseInt(document.getElementById("total").value);
    const examDays = parseInt(document.getElementById("examDays").value);
    const resultDiv = document.getElementById("result");

    // Reset the result
    resultDiv.textContent = "";

    if (isNaN(attended) || isNaN(total) || isNaN(examDays) || total <= 0) {
        resultDiv.textContent = "Please enter valid numbers.";
        return;
    }

    const currentPercentage = (attended / total) * 100;
    const requiredClasses = Math.ceil((0.85 * total - attended) / (1 - 0.85));

    let result;

    if (currentPercentage >= 85) {
        result = "Your attendance is sufficient (>= 85%). You can bunk the class.";
    } else if (requiredClasses <= examDays) {
        result = `Your current attendance is ${currentPercentage.toFixed(2)}%. You need to attend ${requiredClasses} more class(es) to reach 85%.`;
    } else {
        result = `Your current attendance is ${currentPercentage.toFixed(2)}%. You need to attend ${requiredClasses} more class(es) to reach 85%, but you only have ${examDays} days left before the exams.`;
    }

    resultDiv.textContent = result;
});
