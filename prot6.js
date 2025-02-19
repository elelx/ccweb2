
let myFont;

let pointArray;
let size = 5;

let ourWord = "crash"; 

function preload(){ 
    myFont = loadFont("./Comic Sans MS 400 (1).ttf");
}
function setup(){
    createCanvas(600,600).parent(mySkethc); 
    angleMode(DEGREES);

    pointArray = myFont.textToPoints(
        ourWord, 
        -50, 10, 
        100,
        { sampleFactor: 0.2 }
    );

    noStroke();
}


function draw(){
    background("#ff6666");

    let angle = map(mouseX, 0, width, 0 , 360);

    translate(width/2, height/2);
    rotate(angle);

    if (!pointArray) return; 

    for (let i = 0; i < pointArray.length; i++) { 
        fill("white")
        circle(pointArray[i].x, pointArray[i].y, size); 


        
    } 
}

