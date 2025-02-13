

//using textopints ==? wto drw word with squares

// this code is for different sample facors : 1

//making the first 10 squares a fifferent size

console.log("hello");

let myFont;


//to store a vlau, store in variable
let pointArray;


const ourWord = "MOO"; //this is the stirng

function preload(){ //runs before set up
    myFont = loadFont("./Comic Sans MS 400 (1).ttf");
}

function setup() {
    createCanvas(400, 200);
    background("black");

    pointArray = myFont.textToPoints(
        ourWord, 
        20, 
        150, 
        135,
        { sampleFactor: 0.2 } 
    );

    noStroke();

    for (let i = 0; i < pointArray.length; i++) {   

        let x  = pointArray[i].x;
        let y  = pointArray[i].y; // 

        // map function ?
        let size = map (y , 120, width - 30 ,4, 8); 

           
       if (pointArray[i].x < width-200 ){   
        fill("red")
       }
       else {
        fill (0,255,0);

       }

       // map(value, start1, stop1, start2, stop2, [withinBounds])

       //this is oppositied
    //    let size = map (y , 120, 30 ,4, 8); //y since i wantit 2 b veritcal
        // let size = 7;

        // if (pointArray[i].y < 100) { //this makes it extrmemly chunky and not a smooth trasnstion between the sizes
        //     size = 3;
        // }

        square(x, y, size);
    }
}




function draw(){
   
}

