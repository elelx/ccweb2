

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

function setup() {
    createCanvas(400, 200);
    background("black");
    rectMode(CENTER);

    pointArray = myFont.textToPoints(
        ourWord, 
        20, 
        150, 
        135,
        { sampleFactor: 0.2 } 
    );

    noStroke();

    for (let i = 0; i < pointArray.length; i++) {   

        let size  =3;
        if(i%2 == 0){
            fill("red");
            square(pointArray[i].x, pointArray[i].y, size);

        }
        else {
            fill("yellow");
            circle(pointArray[i].x, pointArray[i].y, size);

        }
        // map function ?

    }
}




function draw(){
   
}

