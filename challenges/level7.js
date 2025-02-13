

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
    rectMode(CENTER);

    pointArray = myFont.textToPoints(
        ourWord, 
        20, 
        150, 
        135,
        { sampleFactor: 0.2 } 
    );

    noStroke();

    //using code from last sem for help
    
}




function draw(){

    background("black");

    for (let i = 0; i < pointArray.length; i++) {   
        let posX = pointArray[i].x;
        let posY = pointArray[i].y;

        let thedist = dist (posX, posY, mouseX, mouseY);
        //dist( x1. y1, x2, y2 )

        let size  = map (thedist, 0 , 50, 40, 3, true)   // 0, 50, range 30,3is size of the og shape
        
        if(i%2 == 0){
            fill("red");
            square(pointArray[i].x, pointArray[i].y, size);

        }
        else {
            fill("yellow");
            circle(pointArray[i].x, pointArray[i].y, size);

        }

    }
   
}

