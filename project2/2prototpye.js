let capture;
let tracker; 
let positions;
let hasInitialized = false;

//alien filter
let earsImage;  
let zeepzorp;

//randompictures
let images = [];

//pokemon
let currentImage;
let picture;//takpic

//buttons
let clearbutton;
let savePic;

let cuteFont;
let secondFont;

// let backpic;

let pigeonHead;
let pigeonpic;
let showPigeon = false;

function preload() {
  //font ----------
  cuteFont = loadFont("../MAROLA__.TTF");
  secondFont = loadFont("../AD_Nautilus.ttf")

  //backgorund ----------
  backpic = loadImage('bgtest.png');

  //photos---------

  earsImage = loadImage('ears.png');
  pigeonpic =loadImage('seagull .png');

  images.push(loadImage('bulbsa.png')); 
  images.push(loadImage('crab.png')); 
  images.push(loadImage('gobou.png')); 
  images.push(loadImage('mankey.png')); 
  images.push(loadImage('miaouss.png')); 
  images.push(loadImage('pika.png')); 
  images.push(loadImage('qwilfish.png')); 
  images.push(loadImage('ramoloss.png')); 
  images.push(loadImage('rattatac.png')); 



  //audio---------
  zeepzorp =loadSound('green alien cat says yaer aegh erya.mp3');
}

function setup() {
  //canvas
  savePic = createCanvas(windowWidth, windowHeight); //the variable --> let me savecanvas as image

  capture = createCapture(VIDEO, {flipped:true}, onCaptureCreated);
  capture.hide();

  //    for centering

  tracker = new clm.tracker();
  tracker.init(); //initialize

  //button for pokemon --------------------------------------
  button = createButton("what pokemon?");
  button.position(400, 100);
  button.mousePressed(takePictureforPokemon);
 
    // Button to clear the screen
    clearbutton = createButton("x");
    clearbutton.position(350, 100);
    clearbutton.mousePressed(clearScreen); //the press will trig. button --> clear the screen

// hides x button till the thingy shows 
    clearbutton.hide();


    //save pic
    savePic = createButton('let me save this whole screen!');
    savePic.mousePressed(takePic);
    savePic.position(windowWidth / 2 - savePic.width / 2, 640); //beczu oringnallty its at the top left corner so this helps it be at centerceneter 

//button for pigeon head
    let pigeonButton = createButton("pigeon head"); 
    pigeonButton.position(950, 100);
    pigeonButton.mousePressed(togglePigeonHead);

}

function onCaptureCreated(){
  capture.size = (windowWidth, windowHeight); 

  tracker.start(capture.elt); 
  hasInitialized = true;
}

function togglePigeonHead() {
  showPigeon = !showPigeon; // Toggle pigeon head on/off
}

function draw() {
  
  if(!hasInitialized) return;
  fill('green');
  background(backpic); 
  
  //aesthtics----------

  push();
  fill(0, 100, 100);
  textAlign(CENTER, CENTER);
  textSize(50);
  textFont(cuteFont);
  text("Camera Carnival", width / 2, 100);
  pop();

  push();
  fill(100, 100, 100);
  textFont(secondFont);
  textSize(35);
  text("open your mouth ", 1130, 320);
  text("to become an alien", 1120, 380);

  text("or have a", 1200, 70)
  text("seagull on your", 1200, 100);
  text("head", 1200, 140);

  pop();

  image(capture, width / 2 - capture.width / 2, height / 2 - capture.height / 2);
  

    // this is if the pokemon buton is pressed, this is when the picture of u n the pokemon appears
  if(picture){
    image(picture, 40, 150, capture.width/2, capture.height/2);
    image(currentImage,40, 400, capture.width/2, capture.height/2); //pokemon
    
    push();

    textFont(cuteFont);
    textSize(35);

    text("you look like", 70, 130);
    pop();
  }

 

  positions = tracker.getCurrentPosition();

  if(!positions) return;

  drawMouth();
  // drawPigeonHead();

  if (showPigeon) {
    drawPigeonHead(); // Ensures it stays visible while toggled on
}
}

function drawPigeonHead() {

  const topxPos = capture.width - positions[0][0];
  const topyPos = positions[0][1];

  // const botxPos = capture.width - positions[41][0];
  // const botyPos = positions[41][1];
  // const Size = 400;

  image(pigeonpic, topxPos, topyPos, 600, 300);
}

function takePictureforPokemon() {
  // Take pic of the live vid
  picture = capture.get();

  //  a random image from the array
  let randomIndex = floor(random(images.length)); 

  currentImage = images[randomIndex]; // the random image

  clearbutton.show();
}


function clearScreen(){
  picture = null;//clears
  currentImage = null; //reset image
  clearbutton.hide();
  clear();
}


function drawMouth() {
  const topxPos = capture.width - positions[60][0];  // Top of mouth
  const topyPos = positions[60][1];
  
  const botxPos = capture.width - positions[57][0];  // Bottom of mouth
  const botyPos = positions[57][1];
  
  const distance = dist(topxPos, topyPos, botxPos, botyPos);
  const mouthDistance = 30;
  const mappedSize = map(distance, 0, 16, 5, 40);
  
  if (mappedSize > mouthDistance) {

    if(!zeepzorp.isPlaying()){
    zeepzorp.play();
    }

    push(); //this is so only my live feed is green :3
    tint('green');
    image(capture, width / 2 - capture.width / 2, height / 2 - capture.height / 2);

    pop();
    
    drawHead();

} else {
    zeepzorp.pause();
    noTint();

}
}


function drawHead() {
  const videoX = width / 2 - capture.width / 2;
const videoY = height / 2 - capture.height / 2;

const topxPos = videoX + (capture.width - positions[33][0]); // Nose x
const topyPos = videoY + positions[33][1]; // Nose y

const headY = videoY + positions[17][1]; // Jaw y

const Size = 200; // Ear image size

image(earsImage, topxPos - Size / 2, headY - Size, Size, Size);

}

function takePic(){
  saveCanvas('MyBeautifulPicture', 'jpg'); // 2nd is the file name
}


//do if mapped is > distnace ( like nose or ehebrow) --> you are this pokemon different Pokémon image when a user smiles or makes a funny face. 