
let myFont;

let pointArray;

let size = 5;

const ourWord = "crash"; 

function preload(){ 
    myFont = loadFont("./Comic Sans MS 400 (1).ttf");
}

function setup(){
    createCanvas(600,600).parent(mySkethc); 

    pointArray =  myFont.textToPoints(
        ourWord, 
        170,  330, 100,
       {sampleFactor:0.2} //gibes u moer squares 1
       ); //string, x, y , fontsize

       noStroke();

}

function draw(){
    background("#ff6666");

    if (!pointArray) return; 

    for (let i = 0; i < pointArray.length; i++) { 
        
        let d = dist(mouseX, mouseY, pointArray[i].x, pointArray[i].y);//dist(x1, y1, x2, y2)

        if (d < 20) {
            size = 6; 
         fill (random(0,255), random(0, 255), random(0, 255));
            // th ecolor spasms
        } else {
            size = 3;
            fill("white");
        }
   
        circle(pointArray[i].x, pointArray[i].y, size); 
    } 
}

