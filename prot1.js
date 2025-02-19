

console.log("hello");

let myFont;

let pointArray;

let size = 5

const ourWord = "jello"; 

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
    background("pink");

    if (!pointArray) return; // this updates the screen

    for (let i = 0; i< pointArray.length; i++){ 
 
   
         fill ("magenta");
     
         circle(pointArray[i].x, pointArray[i].y, size); 
 
     } 

     if(mouseX <= 300){
        cursor('https://avatars0.githubusercontent.com/u/1617169?s=16');
     } else {
        cursor("grab");
     }
}

function mousePressed(){
    if(mouseX <= 300){
        size = 20;
    } else {
        size =3;
        console.log("5")
    }
}

