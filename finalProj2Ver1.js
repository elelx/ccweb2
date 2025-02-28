let myFont;

let pointArray;

let size = 5;

let ourletter = "crash"; 

let x = 50; // the x of the bounce

let y = 330;//y of the bounce

let xspeed = 10; //the speeds
let yspeed = 25;

// let backCol = ("#900C3F");
let wordCol = ("#FF5733");

// let crashInwAlls;

function preload(){ 
    myFont = loadFont("RubikGlitch.ttf");
}

function setup(){
    createCanvas(600,600);

    pointArray = myFont.textToPoints(ourletter, x, y, 100, { sampleFactor: 0.2 });
   

    noStroke();
}

function draw(){
    // background("black");

    Points(pointArray);
   

    x+= xspeed;
    y+= yspeed;

    if(x>width || x<0){ //if it hits the borders --> changes bg, shape color and size
        xspeed *=-1;
    
        // backCol = color(random(0, 205), random(0, 65), random(0, 45)); //this changes the random colors everytime
        wordCol = color(random(0, 100), random(0, 165), random(0, 245));
        size = 20;
    }
 
    if(y>height || y<0){
        yspeed *=-1;
        // backCol = color(random(0, 255), random(0, 255), random(0, 255));
        wordCol = color(random(0, 100), random(0, 165), random(0, 245));
        size = 5;
    }

    pointArray = myFont.textToPoints(ourletter, x, y, 100, { sampleFactor: 0.2 });


}

function Points(points) {


    for (let i = 0; i < points.length; i++) {
        fill(wordCol); 
        circle(points[i].x, points[i].y, size);
    }

}

function keyPressed(){ //this is bascially just fake erasing the screen
    if (key =="c"){
        background("white");
    }
}
//https://www.youtube.com/watch?v=eHZXvR6NDLo refrencehd this video
