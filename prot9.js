


let myFont;

let pointArray;

let size = 5

const ourWord = "out"; 

function preload(){ 
    myFont = loadFont("./Comic Sans MS 400 (1).ttf");
}

function setup(){
    createCanvas(600,600).parent(mySkethc); 

    pointArray =  myFont.textToPoints(
        ourWord, 
        150,  330, 150,
       {sampleFactor:0.2} //gibes u moer squares 1
       ); //string, x, y , fontsize

       noStroke();

}


function draw(){
    background("black");

    if (mouseY <= 200) {
        fill("blue");
    } else {
        fill("orange");
    }

    for (let i = 0; i < pointArray.length; i++) {

        if (mouseX <= 300) {
            size = 20;
        } else {
            size = 3;
        }

        circle(pointArray[i].x, pointArray[i].y, size); 
    }


}

