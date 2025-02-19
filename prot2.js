

console.log("hello");

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
    background("#99ccff");

    if (!pointArray) return; // this updates the screen

    for (let i = 0; i< pointArray.length; i++){ 
     
    let color = map(mouseX, 100, 300, 100, 200); // depends where your mouse is, the color changes
        
    fill(color);



         circle(pointArray[i].x, pointArray[i].y, size); 
 
     } 

}



