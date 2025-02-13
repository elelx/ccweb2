

console.log("hello");

let r = 3; 

let angle = 0;

let myFont;
// let x = pointArray[i].x; 
// let y = pointArray[i].y; 


//to store a vlau, store in variable
let pointArray;


const ourWord = "MOO"; //this is the stirng

function preload(){ //runs before set up
    myFont = loadFont("./Comic Sans MS 400 (1).ttf");
}

function setup() {
    createCanvas(400, 200);
    angleMode(DEGREES);

    noStroke();

    pointArray = myFont.textToPoints(
        ourWord, 
        20, 
        150, 
        135,
        { sampleFactor: 0.1 } 
    );

}




function draw(){

    background("black");


    for (let i = 0; i < pointArray.length; i++) {   

        fill("red");
        

        square(pointArray[i].x, pointArray[i].y + r*sin(angle + i*8) , 9, 2);

    }


    angle +=2; // essientally speed 
    //testing out sin

 
//     let x = frameCount;
//     let y = 30 * sin(x * 0.1) + 50;

//   // Draw the point.
    // point(x, y);

    //  let y = 30 * sin(frameCount * 0.05) + 50;


    //angle + i*10 --> chamges each point at  diff tine
}

