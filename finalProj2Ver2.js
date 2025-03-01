
let myFont;


let pointArray;

let size = 5

let backCol = "black";

const ourWord = "change"; 

function preload(){ 
    myFont = loadFont("Honk-Regular-VariableFont_MORF,SHLN.ttf");


}

function setup(){
    createCanvas(600,600);

    pointArray =  new TextToPoints( ourWord,  100,  330, 120 );//gibes u moer squares 1 ); //string, x, y , fontsize
       noStroke();
}


function draw(){
    background(backCol);

        pointArray.display();

    // if (mouseY <= 200) {
    //     fill(random(0, 200), random(100, 150), random(50, 100));


    //     // backCol = color(random(0, 255), random(0, 255), random(0, 255));
    // } else {
    //     fill("white");

    //     backCol = color(random(0, 255), random(0, 255), random(0, 255));

    // }


    // for (let i = 0; i < pointArray.length; i++) {

    //     if (mouseX <= 300) {
    //         size = random(20, 30);
    //     } else {
    //         size = 3;
    //     }

    //     circle(pointArray[i].x, pointArray[i].y, size); 
    // }

}

class TextToPoints{
    constructor(word, x, y, wordsize){
        this.word = word;
        this.x = x;
        this.y = y;
        this.wordsize = wordsize;

        this.updatePoints();
    }
    updatePoints(){
        this.pointArray = myFont.textToPoints(this.word, this.x, this.y, this.wordsize, { sampleFactor: 0.2 });
    }

    display(){
        if (mouseY <= 200) {
            fill(random(0, 200), random(100, 150), random(50, 100));   
        
             } else {
                fill("white");
    
                backCol = color(random(0, 255), random(0, 255), random(0, 255));

         }

         for (let i = 0; i < this.pointArray.length; i++) {

                 if (mouseX <= 300) {
                     size = random(20, 30);
                 } else {
                     size = 3;
                 }
        
                 circle(this.pointArray[i].x, this.pointArray[i].y, size); 
             }

    }
}

