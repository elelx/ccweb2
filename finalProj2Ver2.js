
let myFont;


let pointArray;

let size = 5

let backCol = "black";

const ourWord = "change"; 

function preload(){ 
    myFont = loadFont("Honk-Regular-VariableFont_MORF,SHLN.ttf");


}

function setup(){
    createCanvas(600,600).parent(mySkethc); 

    pointArray =  myFont.textToPoints(
        ourWord, 
        100,  330, 120,
       {sampleFactor:0.2} //gibes u moer squares 1
       ); //string, x, y , fontsize
       noStroke();
}


function draw(){
    background(backCol);

    if (mouseY <= 200) {
        fill("white");
        backCol = color(random(0, 255), random(0, 255), random(0, 255));
    } else {
        fill(random(0, 200), random(100, 150), random(50, 100));
    }


    for (let i = 0; i < pointArray.length; i++) {

        if (mouseX <= 300) {
            size = random(20, 30);
        } else {
            size = 3;
        }

        circle(pointArray[i].x, pointArray[i].y, size); 
    }

}



