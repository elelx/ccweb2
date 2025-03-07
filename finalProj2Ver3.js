let myFont;

let pointArrays = [];


let size = 5;

let ourWord = "light";

let columns = 3; 
let rows = 6;
let spaceX = 140; 
let spaceY = 60; 

let color = "black"

backgroundColor = "black";

function preload() { 
    myFont = loadFont("./Comic Sans MS 400 (1).ttf");
}

function setup() {
    createCanvas(600, 600);
    noStroke();

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < columns; col++) { // dis for loop

            let x = col * spaceX + 60; //placement
            let y = row * spaceY + 160; 

            pointArrays.push( new textToPoints(ourWord, x, y, 60));
           

        }
    }
}

function draw() {
    background(backgroundColor);

    for (let i = 0; i < pointArrays.length; i++) {
        let points = pointArrays[i];

        points.display();
        // for (let j = 0; j < points.length; j++) {
        //     let d = dist(mouseX, mouseY, points[j].x, points[j].y);

        //     if (d < 50) {
        //         size = random(3,5); 
        //         fill("white");
        //     } else {
        //         size = random(3, 8);
        //          fill(color);
        //     }

        //     if(key === "w"){
        //         fill("pink");
        //     }
         

        //     circle(points[j].x, points[j].y, size);
        // }
    }
}

class textToPoints{
    constructor(word, x, y, size){
        this.points = myFont.textToPoints(word, x, y, size, { sampleFactor: 0.2 });
    }

    display() {
        for (let pt of this.points) {
            let d = dist(mouseX, mouseY, pt.x, pt.y);

            if (d < 50) {
                fill("white");
                size = random(3,5);
            } else {
                fill(color);
                size = random(3, 8);
            }

            if (key === "w") {
                fill("pink");
            }

            circle(pt.x, pt.y, size);
        }
    }

}

function keyPressed(){
    if (key === "w"){
        backgroundColor = ("white");
        // color = ("grey");

    }
    if(key ==="d"){
        backgroundColor = ("black");
    }
}



