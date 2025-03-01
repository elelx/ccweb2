
let myFont;

// let pointArray;
// let size = 5;

// let ourletter = "crash"; 

// // let x = 50; // the x of the bounce
// let y = 330;//y of the bounce

// let xspeed = 10; //the speeds
// let yspeed = 25;

// let backCol = ("#900C3F");

let crashInwAlls;


let wordCol = ("#FF5733");

function preload(){ 
    myFont = loadFont("RubikGlitch.ttf");
}

function setup(){
    createCanvas(600,600);
    crashInwAlls = new CrashInwAlls("crash", 50, 330, 10, 25, 5); 
    noStroke();
}

function draw(){
    // background("black");
    crashInwAlls.update(); //fot they calss
    crashInwAlls.display(); //to shwo
}

class CrashInwAlls {
    constructor(text, x, y, xspeed, yspeed, size) {
        this.text = text;
        this.x = x;

        this.y = y;
        this.xspeed = xspeed;

        this.yspeed = yspeed;
        this.size = size;
        this.wordCol = color("#FF5733");
        
        this.updatethePoints();
    }

    updatethePoints() {
        this.pointArray = myFont.textToPoints(this.text, this.x, this.y, 100, { sampleFactor: 0.2 });
    }

    update() {
        this.x += this.xspeed;
        this.y += this.yspeed;

        if (this.x > width || this.x < 0) { // If it hits the borders --> changes color and size
            this.xspeed *= -1;

          //this.wordCol = color("red");

            this.wordCol = color(random(0, 100), random(0, 165), random(0, 245));
            this.size = 20;
        }

        if (this.y > height || this.y < 0) {
            this.yspeed *= -1;


            this.wordCol = color(random(0, 100), random(0, 165), random(0, 245));
            this.size = 5;
        }
        this.updatethePoints();
    }

    display() {
        for (let i = 0; i < this.pointArray.length; i++) {
            fill(this.wordCol);
            circle(this.pointArray[i].x, this.pointArray[i].y, this.size);
        }
    }
}

function keyPressed() { // This is basically just fake erasing the screen
    if (key == "c") {
        background("white");
    }
}
//https://www.youtube.com/watch?v=eHZXvR6NDLo referenced this video
