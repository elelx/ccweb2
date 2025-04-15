const favcolor = localStorage.getItem("NextPageColor");

if (favcolor) {

    document.body.style.backgroundColor = favcolor;  


}


let answers2 = '';

function answer2() {
    let answers2 = [];

    // Question 1
    let qq1 = document.querySelector('input[name="qq1"]:checked'); 
    // this basc says find the input aka the name question 1 and check which they chose a or b
    if (qq1) {
        answers2.push(qq1.value); //saying if the value "a b c or d" wht ever is pciked --> goes into the results 
    } 

    // Question 2
    let qq2 = document.querySelector('input[name="qq2"]:checked');
    if (qq2) {
        answers2.push(qq2.value);
    } 

    // Question 3
    let qq3 = document.querySelector('input[name="qq3"]:checked');
    if (qq3) {
        answers2.push(qq3.value);
    } 


    // results
    let result2 = getFinalResult(answers2); // ze ansewrs r a cpmbp of arrays 

    //me local stprage
    localStorage.setItem("Results2", result2);

    window.location.href = "page4.html"; // goes ro next page 
    console.log("I got pressed");

}

function getFinalResult(answers2) {
    let resultsMap2 = {

        //A = dad
        //B = BR
        //C = NF

        //A = dad
        //B = BR
        //C = NF

        //A = BR
        //B = NF
        //C = dad

        "AAA": "do u have a kid? why do u joke like a dad", 
        "AAB": "you like to make dad jokes alot", 
        "AAC": "Are you a dad? Because it seems you like to make dad jokes alot",  

        "ABA":"brain rot? u r so brain rot, go touch grass",
        "ABB":"wow! so diverse! so... quirky!",
        "ABC":" you like to make dad jokes alot ",

        "ACA":"Are you trying to be quirky?",
        "ACB":"wow! You're humor is so .. different",
        "ACC":"you like to make dad jokes alot",


        "BAA":"you tested for brain rot? ofc u did.",
        "BAB":"You're humor is so different, you should have a stand up comedy show",
        "BAC":"you like to make dad jokes alot",

        "BBA":"Bruh you are 100% brain rot",
        "BBB":"hello hello? u make brain jokes",
        "BBC":"brain rot? ur so brain rot",

        "BCA":"brain rot? ur so brain rot",
        "BCB":"You are not funny",
        "BCC":"You should start a stand up comedy show",

        "CBA":"brain rot? ur so brain rot",
        "CBB":"You are not funny",
        "CBC":"okay....different i guess",

        "CAA":"You're actually so funny....",
        "CAB":"You are not funny",
        "CAC":"you like to make dad jokes alot",

        "CCA":"you are so so funny!! .... NOT ",
        "CCB":"You're so not funny",
        "CCC":"You are not funny",


 
    };

    let key = answers2[0] + answers2[1] + answers2[2] ;

    if (resultsMap2[key]) {
        return resultsMap2[key];
    } else {
        return "you have bruh humor...retake it man";
    }
}