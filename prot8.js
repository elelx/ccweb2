
let myFont;

let pointArray;
let pointArray2;
let pointArray3;
let pointArray4;
let pointArray5;
let pointArray6;
let pointArray7;
let pointArray8;
let pointArray9;



let size1 = 4;


let letter1 = "o"; 
let letter2 = "u";
let letter3 = "t";

let letter4 = "o";
let letter5 = "u";
let letter6 = "t";

let letter7 = "o";
let letter8 = "u";
let letter9 = "t";


function preload(){ 
    myFont = loadFont("./Comic Sans MS 400 (1).ttf");
}

function setup(){
    createCanvas(600,600).parent(mySkethc); 

    pointArray =  myFont.textToPoints(
        letter1, 
        100,  330, 200,
       {sampleFactor:0.2} //gibes u moer squares 1
       ); //string, x, y , fontsize


       pointArray2 =  myFont.textToPoints(
        letter2, 
        200,  430, 150,
       {sampleFactor:0.2} //gibes u moer squares 1
       ); //string, x, y , fontsize

       pointArray3 =  myFont.textToPoints(
        letter3, 
        300,  330, 250,
       {sampleFactor:0.2} //gibes u moer squares 1
       ); //string, x, y , fontsize

       pointArray4 =  myFont.textToPoints(
        letter4, 
        400,  500, 50,
       {sampleFactor:0.2} //gibes u moer squares 1
       ); //string, x, y , fontsize

       pointArray5 =  myFont.textToPoints(
        letter5, 
        10,  600, 100,
       {sampleFactor:0.2} //gibes u moer squares 1
       ); //string, x, y , fontsize
       pointArray6 =  myFont.textToPoints(
        letter6, 
        40,  200, 250,
       {sampleFactor:0.2} //gibes u moer squares 1
       ); //string, x, y , fontsize

       pointArray7 =  myFont.textToPoints(
        letter7, 
        490,  600, 250,
       {sampleFactor:0.2} //gibes u moer squares 1
       ); //string, x, y , fontsize

       pointArray8 =  myFont.textToPoints(
        letter8, 
        500,  200, 200,
       {sampleFactor:0.2} //gibes u moer squares 1
       ); //string, x, y , fontsize

       pointArray9 =  myFont.textToPoints(
        letter9, 
        50,  300, 50,
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
   
        circle(pointArray[i].x, pointArray[i].y, size1); 
    } 


    if (!pointArray2) return; 

    for (let i = 0; i < pointArray2.length; i++) { 
        
        let d = dist(mouseX, mouseY, pointArray2[i].x, pointArray2[i].y);//dist(x1, y1, x2, y2)

        if (d < 20) {
            fill(255); // th ecolor is white when hovered
        } else {
            fill("#00cc66"); // the color is greeb when the moude not tocuhing points
        }
   
        circle(pointArray2[i].x, pointArray2[i].y, size1); 
    
    } 



    if (!pointArray3) return; 

    for (let i = 0; i < pointArray3.length; i++) { 
        
        let d = dist(mouseX, mouseY, pointArray3[i].x, pointArray3[i].y);//dist(x1, y1, x2, y2)

        if (d < 50) {
            size1 = 10; 
        } else {
            size1 =4; // the color is greeb when the moude not tocuhing points
        }
   
        circle(pointArray3[i].x, pointArray3[i].y, size1); 
    } 

    if (!pointArray4) return; 

    for (let i = 0; i < pointArray4.length; i++) { 
        
        let d = dist(mouseX, mouseY, pointArray4[i].x, pointArray4[i].y);//dist(x1, y1, x2, y2)

        if (d < 50) {
            size1 = 10; 
        } else {
            size1 =4; // the color is greeb when the moude not tocuhing points
        }
   
        circle(pointArray4[i].x, pointArray4[i].y, size1); 
    } 

    if (!pointArray5) return; 

    for (let i = 0; i < pointArray5.length; i++) { 
        
        let d = dist(mouseX, mouseY, pointArray5[i].x, pointArray5[i].y);//dist(x1, y1, x2, y2)

        if (d < 50) {
            size1 = 10; 
        } else {
            size1 =4; // the color is greeb when the moude not tocuhing points
        }
   
        circle(pointArray5[i].x, pointArray5[i].y, size1);

    } 

    if (!pointArray3) return; 

    for (let i = 0; i < pointArray6.length; i++) { 
        
        let d = dist(mouseX, mouseY, pointArray6[i].x, pointArray6[i].y);//dist(x1, y1, x2, y2)

        if (d < 50) {
            size1 = 10; 
        } else {
            size1 =4; // the color is greeb when the moude not tocuhing points
        }
   
        circle(pointArray6[i].x, pointArray6[i].y, size1); 
    } 

    for (let i = 0; i < pointArray7.length; i++) { 
        
        let d = dist(mouseX, mouseY, pointArray7[i].x, pointArray7[i].y);//dist(x1, y1, x2, y2)

        if (d < 50) {
            size1 = 10; 
        } else {
            size1 =4; // the color is greeb when the moude not tocuhing points
        }
   
        circle(pointArray7[i].x, pointArray7[i].y, size1); 
    } 

    for (let i = 0; i < pointArray8.length; i++) { 
        
        let d = dist(mouseX, mouseY, pointArray8[i].x, pointArray8[i].y);//dist(x1, y1, x2, y2)

        if (d < 50) {
            size1 = 10; 
        } else {
            size1 =4; // the color is greeb when the moude not tocuhing points
        }
   
        circle(pointArray8[i].x, pointArray8[i].y, size1); 
    } 

    for (let i = 0; i < pointArray9.length; i++) { 
        
        let d = dist(mouseX, mouseY, pointArray9[i].x, pointArray9[i].y);//dist(x1, y1, x2, y2)

        if (d < 50) {
            size1 = 10; 
        } else {
            size1 =4; // the color is greeb when the moude not tocuhing points
        }
   
        circle(pointArray9[i].x, pointArray9[i].y, size1); 
    } 
}