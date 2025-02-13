

console.log("hello");

let myFont;

let pointArray;


const ourWord = "MOO"; 

function preload(){ 
    myFont = loadFont("./Comic Sans MS 400 (1).ttf");
}

function setup(){
    createCanvas(400,200).parent(mySkethc); //this will bring it up to the top, the sketch
    background("black");

    pointArray =  myFont.textToPoints(
        ourWord, 
        20, 
        150, 
        135,
       {sampleFactor:0.2} //gibes u moer squares 1
       ); //string, x, y , fontsize

       noStroke();

    for (let i = 0; i< pointArray.length; i++){   
       let size = 5;
        
       if (pointArray[i].x < width-200 ){  //i will not lie... i totally guess for this one I was trying to do the transparent instead 
        fill("red")
       }
       else {
        fill (0,255,0);

       }
    
        square(pointArray[i].x, pointArray[i].y, size); 

    } 

}

function draw(){
    
}

