// Sets the background color

const favcolor = localStorage.getItem("NextPageColor");

if (favcolor) {

    document.body.style.backgroundColor = favcolor;  


}


function answer() {
    let answers = [];

    // Question 1
    let q1 = document.querySelector('input[name="q1"]:checked'); 
    // this basc says find the input aka the name question 1 and check which they chose a or b
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

// prey + hot wter  -----------------

    //rough 

        "AAAA": "1", //pink   
        "AABA": "3", //blue    

        "AACA": "5",  //red   
        "AADA": "7", //b+w      


    //smooth   --> jellyfish
        "AAAB": "2", //pink
        "AABB": "4", //blue

        "AACB": "6",  //red
        "AADB": "8", //b+w
 
// pred + hot water ------------------------

    //rough
        "ABAA": "9",  //pink    
        "ABBA": "11", //blue 

        "ABCA": "13", //red    
        "ABDA": "15", //b+w     

    //smooth --> sharks
        "ABAB": "10", //pink
        "ABBB": "12", //blue

        "ABCB": "14", //red
        "ABDB": "16", //b+w
 
// prey + cold water ---------------

    //rough
        "BAAA": "17", //pink
        "BABA": "19", //blue

        "BACA": "21",  //red
        "BADA": "23", //b+w

    //smooth 
        "BAAB": "18", //pink
        "BABB": "20", //blue

        "BACB": "22", //red
        "BADB": "24", //b+w

 //pred + cold water --------------------
    //rough  -->
    
        "BBAA": "25", //pink
        "BBBA": "27", //blue

        "BBCA": "29",  //red
        "BBDA": "31", //b+w



    //smooth --> seals 

        "BBAB": "26", //pink
        "BBBB": "28", //blue

        "BBCB": "30",  //red
        "BBDB": "32", //b+w

// prey + weirdo water ---------------

    //rough

        "CAAA": "33", //pink
        "CABA": "35", //blue

        "CACA": "37",  //red
        "CADA": "39", //b+w

    //smooth
        "CAAB": "34", //pink
        "CABB": "36", //blue

        "CACB": "38",  //red
        "CADB": "40", //b+w

 //pred + weirdo water ---------------------
        
    //rough
        "CBAA": "41", //pink
        "CBBA": "43", //blue

        "CBCA": "45", //red
        "CBDA": "47",  //b+w


    //smooth

        "CBAB": "42", //pink
        "CBBB": "44", //blue

        "CBCB": "46",  //red
        "CBDB": "48",  //b+w
    };

    let key = answers[0] + answers[1] + answers[2] + answers[3] ;

    if (resultsMap[key]) {
        return resultsMap[key];
    } else {
        return "you are a bruh fish";
    }
}
