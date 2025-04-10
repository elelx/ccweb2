// Sets the background color

const favcolor = localStorage.getItem("NextPageColor");

if (favcolor) {

    document.body.style.backgroundColor = favcolor;  


}


function answer() {
    let answers = [];

    // Question 1
    let q1 = document.querySelector('input[name="q1"]:checked'); // this basc says find the input aka the name question 1 and check which they chose a or b
    if (q1) {
        answers.push(q1.value); //saying if the value "a b c or d" wht ever is pciked --> goes into the results 
    } 

    // Question 2
    let q2 = document.querySelector('input[name="q2"]:checked');
    if (q2) {
        answers.push(q2.value);
    } 

    // Question 3
    let q3 = document.querySelector('input[name="q3"]:checked');
    if (q3) {
        answers.push(q3.value);
    } 

    let q4 = document.querySelector('input[name="q4"]:checked');
    if (q4) {
        answers.push(q4.value);
    } 


    // results
    let result = getFinalResult(answers); // ze ansewrs r a cpmbp of arrays 

    //me local stprage
    localStorage.setItem("Results", result);


    //shows in the text id -
    document.getElementById("result").textContent = "You are aaaa : " + result;
}


function getFinalResult(answers) {
    let resultsMap = {
        "ABCA": "You are a Tropical Fish!",
        "ABDB": "You are a Deep Sea Fish!",
        "ABBA": "You are a Coral Reef Fish!",
        "BAAB": "You are a Cave Dwelling Fish!"
    };

    let key = answers[0] + answers[1] + answers[2] + answers[3] ;

    if (resultsMap[key]) {
        return resultsMap[key];
    } else {
        return "you are a bruh fish";
    }
}
