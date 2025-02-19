let myFont;

let pointArray;
let pointArray1;
let pointArray2;
let pointArray3;
let pointArray4;

let size = 5;
let size2 = 10;

let ourletter = "crash"; 


let x =50; // the x of the bounce


let y = 330;//y of the bounce

let xspeed = 4; //the speeds
let yspeed = 3;

function preload(){ 
    myFont = loadFont("./Comic Sans MS 400 (1).ttf");
}

function setup(){
    createCanvas(600,600).parent(mySkethc); 

    pointArray = myFont.textToPoints(ourletter, x, y, 100, { sampleFactor: 0.2 });
   

    noStroke();
}

function draw(){
    background("#900C3F");

    Points(pointArray);
   

    x+= xspeed;
    y+= yspeed;

    if(x>width || x<0){
        xspeed *=-1;
    }
 
    if(y>height || y<0){
        yspeed *=-1;
    }

    pointArray = myFont.textToPoints(ourletter, x, y, 100, { sampleFactor: 0.2 });

}

function Points(points) {


    for (let i = 0; i < points.length; i++) {
        fill("#FF5733"); 
        circle(points[i].x, points[i].y, size);
    }

}

//https://www.youtube.com/watch?v=eHZXvR6NDLo refrencehd this video
