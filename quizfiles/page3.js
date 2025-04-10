function evaluateQuiz() {
    // Store the answers in an array
    let answers = [];
    for (let i = 1; i <= 3; i++) {
        const selectedOption = document.querySelector(input[name="q${i}"]:checked);
        if (selectedOption) {
            answers.push(selectedOption.value); // Store the selected value (A, B, C, or D)
        } else {
            answers.push(null); // If no option selected, push null
        }
    }

    // Check if all answers are selected
    if (answers.includes(null)) {
        document.getElementById("result").textContent = "Please answer all the questions!";
        return;
    }

    // Combine answers and decide result
    const result = getFinalResult(answers);

    // Display the result
    document.getElementById("result").textContent = Your result: ${result};
}

function getFinalResult(answers) {
    // You can customize this to match different combinations of answers.
    // Here's a simple example that generates results based on the combination.

    const combinedAnswers = answers.join('');
    
    if (combinedAnswers === "ABC") {
        return "You are a Tropical Fish!";
    } else if (combinedAnswers === "ABD") {
        return "You are a Deep Sea Fish!";
    } else if (combinedAnswers === "ACC") {
        return "You are a Coral Reef Fish!";
    } else if (combinedAnswers === "ADA") {
        return "You are a Cave Dwelling Fish!";
    } else {
        return "You are a unique fish!";
    }
}


