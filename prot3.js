
let myFont;

let pointArray;

let size = 4;

const ourWord = "jello"; 

function preload(){ 
    myFont = loadFont("./Comic Sans MS 400 (1).ttf");
}

function setup(){
    createCanvas(600,600).parent(mySkethc); 

    pointArray =  myFont.textToPoints(
        ourWord, 
        100,  330, 200,
       {sampleFactor:0.2} //gibes u moer squares 1
       ); //string, x, y , fontsize

       noStroke();

}

function draw(){
    background("#99ff99");

    if (!pointArray) return; 

    for (let i = 0; i < pointArray.length; i++) { 
        
        let d = dist(mouseX, mouseY, pointArray[i].x, pointArray[i].y);//dist(x1, y1, x2, y2)

        if (d < 20) {
            fill(255); // th ecolor is white when hovered
        } else {
            fill("#00cc66"); // the color is greeb when the moude not tocuhing points
        }
   
        circle(pointArray[i].x, pointArray[i].y, size); 
    } 
}