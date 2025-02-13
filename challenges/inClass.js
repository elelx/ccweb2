//using textopints ==? wto drw word with squares

// this code is for different sample facors : 1

//making the first 10 squares a fifferent size

console.log("hello");

let myFont;


//to store a vlau, store in variable
let pointArray;


const ourWord = "MOO"; //this is the stirng

function preload(){ //runs before set up
    myFont = loadFont("./Comic Sans MS 400 (1).ttf");
}

function setup(){
    createCanvas(400,400).parent(mySkethc); //this will bring it up to the top, the sketch
    background(180, 90, 90);

    pointArray =  myFont.textToPoints(
        ourWord, 
        20, 
        150, 
        135,
       {sampleFactor:0.2} //gibes u moer squares 1
       ); //string, x, y , fontsize

       noStroke();

    for (let i = 0; i< pointArray.length; i++){   // for loops: starting condiiontion i = 0 this wil keep repeating itself until i is smaller than length of pointarray, we will keep running. it runs once then we add an I until it meets the i <__ condtion
       let size = 0;

        if (i < 10){
            size= 10;
        } else {
            size = 5;
        }

        fill (random(0,255), random(0, 255), random(0, 255));
    
        square(pointArray[i].x, pointArray[i].y, size); //instead of piointarray[0] you use i to see all the squares

    } // for loops: starting condiiontion i = 0 this wil keep repeating itself until i is smaller than length of pointarray, we will keep running. it runs once then we add an I until it meets the i <__ condtion

}


function draw(){
    // //this this is too glitch and draw
    // pointArray =  myFont.textToPoints(
    //     ourWord, 
    //     20, 
    //     150, 
    //     135,
    //    {sampleFactor:0.2} //gibes u moer squares 1
    //    ); //string, x, y , fontsize

    //    noStroke();

    // for (let i = 0; i< pointArray.length; i++){   // for loops: starting condiiontion i = 0 this wil keep repeating itself until i is smaller than length of pointarray, we will keep running. it runs once then we add an I until it meets the i <__ condtion
    //    let size = 0;

    //     if (i < 10){
    //         size= 10;
    //     } else {
    //         size = 5;
    //     }

    //     fill (random(0,255), random(0, 255), random(0, 255));
    
    //     square(pointArray[i].x, pointArray[i].y, 5); //instead of piointarray[0] you use i to see all the squares

    // }
}

