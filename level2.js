

console.log("hello");

let myFont;

let pointArray;

const ourWord = "MOO"; 
let color = 255; 


function preload(){ 
    myFont = loadFont("./Comic Sans MS 400 (1).ttf");
}

//def map function 
function setup(){
    createCanvas(400,200).parent(mySkethc); 
    background("black");

    pointArray =  myFont.textToPoints(
        ourWord,  20,  150, 135,{sampleFactor:0.2} ); 

       noStroke();

    for (let i = 0; i< pointArray.length; i++){   // for loops: starting condiiontion i = 0 this wil keep repeating itself until i is smaller than length of pointarray, we will keep running. it runs once then we add an I until it meets the i <__ condtion
       let size = 5;


       color -= 1;
   

        fill(255, 0 , 0, color);

        square(pointArray[i].x, pointArray[i].y, size); //instead of piointarray[0] you use i to see all the squares

    } 

}


function draw(){
    
}

