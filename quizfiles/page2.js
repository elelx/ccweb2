// Sets the background color

const favcolor = localStorage.getItem("NextPageColor");

if (favcolor) {

    document.body.style.backgroundColor = favcolor;  


}


let answers = '';

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

    window.location.href = "page3.html"; // goes ro next page 

}


function getFinalResult(answers) {
    let resultsMap = {

// prey + hot wter  -----------------

    //rough --> cat fish + large mouth bass

        "AAAA": "../fishImages/1.jpg", //pink   
        "AABA": "../fishImages/3.jpg", //blue    

        "AACA": "../fishImages/5.jpg",  //red   
        "AADA": "../fishImages/7.jpg", //b+w      


    //smooth   --> jellyfish + clown fish
        "AAAB": "../fishImages/2.jpg", //pink
        "AABB": "../fishImages/4.jpg", //blue

        "AACB": "../fishImages/6.jpg",  //red
        "AADB": "../fishImages/8.jpg", //b+w
 
// pred + hot water ------------------------

    //rough ---> roughskin dogfish + sunfish
        "ABAA": "../fishImages/9.jpg",  //pink    
        "ABBA": "../fishImages/11.jpg", //blue 

        "ABCA": "../fishImages/13.jpg", //red    
        "ABDA": "../fishImages/15.jpg", //b+w     

    //smooth --> sharks + sword fish
        "ABAB": "../fishImages/10.jpg", //pink
        "ABBB": "../fishImages/12.jpg", //blue

        "ABCB": "../fishImages/14.jpg", //red
        "ABDB": "../fishImages/16.jpg", //b+w
 
// prey + cold water ---------------

    //rough  --> Crabs + Blobfish
        "BAAA": "../fishImages/18.png", //pink
        "BABA": "../fishImages/20.jpg", //blue

        "BACA": "../fishImages/21.jpg",  //red
        "BADA": "../fishImages/23.jpg", //b+w

    //smooth  //--> plankton + snailfish 

        "BAAB": "../fishImages/17.jpg", //pink
        "BABB": "../fishImages/19.jpg", //blue

        "BACB": "../fishImages/22.jpg", //red
        "BADB": "../fishImages/24.jpg", //b+w

 //pred + cold water --------------------

    //rough  --> orcas  + Walrus
        "BBAA": "../fishImages/25.png", //pink
        "BBBA": "../fishImages/27.jpg", //blue

        "BBCA": "../fishImages/29.jpg",  //red
        "BBDA": "../fishImages/31.jpg", //b+w


    //smooth --> seals +  giant squid

        "BBAB": "../fishImages/26.jpg", //pink
        "BBBB": "../fishImages/28.jpg", //blue

        "BBCB": "../fishImages/30.jpg",  //red
        "BBDB": "../fishImages/32.jpg", //b+w

// prey + weirdo water ---------------

    //rough --> lump sucker  +  starfish

        "CAAA": "../fishImages/33.jpg", //pink
        "CABA": "../fishImages/35.jpg", //blue

        "CACA": "../fishImages/37.jpg",  //red
        "CADA": "../fishImages/39.jpg", //b+w

    //smooth --> puffer fish  +  sardine

        "CAAB": "../fishImages/34.jpg", //pink
        "CABB": "../fishImages/36.jpg", //blue

        "CACB": "../fishImages/38.jpg",  //red
        "CADB": "../fishImages/40.jpg", //b+w

 //pred + weirdo water ---------------------
        
    //rough --> angler fish + goblin shark
        "CBAA": "../fishImages/41.jpg", //pink
        "CBBA": "../fishImages/43.jpg", //blue

        "CBCA": "../fishImages/45.jpg", //red
        "CBDA": "../fishImages/47.jpg",  //b+w


    //smooth -->  dumbo octopus + 
 
        "CBAB": "../fishImages/42.jpg", //pink
        "CBBB": "../fishImages/44.jpg", //blue

        "CBCB": "../fishImages/46.jpg",  //red
        "CBDB": "../fishImages/48.jpg",  //b+w
    };

    let key = answers[0] + answers[1] + answers[2] + answers[3] ;

    if (resultsMap[key]) {
        return resultsMap[key];
    } else {
        return "you are a bruh fish.. go back and retake it u lozer ";
    }
}
