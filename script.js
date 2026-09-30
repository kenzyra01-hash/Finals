function evaluateScore(score) {
    if (isNaN(score) || score < 0 || score > 100) {
        return "Invalid score";
    } else if (score >= 90) {
        return "Excellent";
    } else if (score >= 75) {
        return "Passed";
    } else {
        return "Failed";
    }
}

function startProgram() {
    alert("Welcome to the Score Evaluator!");

    var name = prompt("Enter your name:");

    if (name === null || name.trim() === "" || !/^[A-Za-z ]+$/.test(name)) {
        alert("Invalid input. Name must contain letters only.");
        document.getElementById("message").innerHTML = "Invalid input. Please enter your name.";
        return;
    }

    var score = prompt("Enter your score (0-100):");

    var proceed = confirm("Do you want to continue?");

    if (proceed) {
        var scoreNumber = Number(score);
        var remark = evaluateScore(scoreNumber);

        document.getElementById("displayName").innerHTML = name;
        document.getElementById("displayScore").innerHTML = score;
        document.getElementById("displayRemark").innerHTML = remark;
        document.getElementById("message").innerHTML = "Thank you for using the Score Evaluator!";
    } else {
        document.getElementById("message").innerHTML = "You cancelled the program.";
    }
}

document.getElementById("startBtn").onclick = startProgram;