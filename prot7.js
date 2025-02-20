let myFont;

let pointArrays = [];


let size = 5;

let ourWord = "out";

let columns = 3; 
let rows = 6;
let spaceX = 140; 
let spaceY = 60; 

function preload() { 
    myFont = loadFont("./Comic Sans MS 400 (1).ttf");
}

function setup() {
    createCanvas(600, 600).parent(mySkethc); 
    noStroke();

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < columns; col++) { // dis for loop

            let x = col * spaceX + 80; //placement
            let y = row * spaceY + 160; 

            let points = myFont.textToPoints(ourWord, x, y, 100, { sampleFactor: 0.2 });
           
            pointArrays.push(points);
        }
    }
}

function draw() {
    background("#666699");

    for (let i = 0; i < pointArrays.length; i++) {
        let points = pointArrays[i];

        for (let j = 0; j < points.length; j++) {
            let d = dist(mouseX, mouseY, points[j].x, points[j].y);

            if (d < 20) {
                size = 6; 
                fill("white");
            } else {
                size = 3;
                fill("#1f1f2e");
            }

            circle(points[j].x, points[j].y, size);
        }
    }
}

