let capture;
let tracker; 
let positions;
let hasInitialized = false;


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


function preload() {
  earsImage = loadImage('ears.png');

  images.push(loadImage('bulbsa.png')); 
  images.push(loadImage('crab.png')); 
  images.push(loadImage('gobou.png')); 
  images.push(loadImage('hippopotas.png')); 
  images.push(loadImage('mankey.png')); 
  images.push(loadImage('miaouss.png')); 
  images.push(loadImage('pika.png')); 
  images.push(loadImage('qwilfish.png')); 
  images.push(loadImage('ramoloss.png')); 
  images.push(loadImage('rattatac.png')); 
  images.push(loadImage('salameche.png')); 
  images.push(loadImage('smogo.png')); 
  images.push(loadImage('snor.png')); 


  //audio---------
  zeepzorp =loadSound('green alien cat says yaer aegh erya.mp3');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  createCanvas(640, 480);

  capture = createCapture(VIDEO, {flipped:true}, onCaptureCreated);
  capture.hide();
  
  tracker = new clm.tracker();
  tracker.init(); //initialize

  //button--------------------------------------
  button = createButton("what pokemon?");
  button.position(20, 20);
  button.mousePressed(takePicture);
 
    // Button to clear the screen
    clearbutton = createButton("x");
    clearbutton.position(300, 20);

    clearbutton.mousePressed(clearScreen); //the press will trig. button --> clear the screen

    clearbutton.hide();


    //save pic
    savePic = createButton('snap a pic !');
    savePic.mousePressed(takePic);
    savePic.position(width/2, 640);


}

function onCaptureCreated(){
  capture.size(capture.width, capture.height); 

  tracker.start(capture.elt); 
  hasInitialized = true;
}

function takePicture() {
  // Take pic of the live vid
  picture = capture.get();

  // Choose a random image 
  let randomIndex = floor(random(images.length)); 

  currentImage = images[randomIndex]; // the random image

  clearbutton.show();
}


function draw() {
  
  if(!hasInitialized) return;
  fill(255);
  
  background(0);

  image(capture, 0,0);

  //this is if u take a pic then your pokemon will be on top of the picture you took, on the side ony you
  if(picture){
    push();
    image(picture, 0, 50, capture.width/2, capture.height/2);//this take pics of live feed of ur face , can // this if js wan pokemon (maybe mmayybe)
    image(currentImage,0,50, capture.width/2, capture.height/2); 


    text("this is your pokemon", 100, 50);
    textSize(400);

pop();
  }

  positions = tracker.getCurrentPosition();

  if(!positions) return;

  drawHead();
  drawMouth();
}

function clearScreen(){
  picture = null;//clears
  currentImage = null; //reset 
  clearbutton.hide();
  clear();
}

function drawHead() {
  const topxPos = capture.width - positions[33][0]; //nose tip x
  const topyPos = positions[33][1];  //nose y

  const headY = positions[17][1];  //i use chin 

  // where the for ear image is at
  const distance = dist(topxPos, topyPos, positions[17][0], positions[17][1]); 

 // size range for ear image is at --> not so gltuchy

  const mappedSize = map(distance, 0, 100, 50, 100);  

  const Size = 200;  //  size 

  // align bottom of ears to head
  image(earsImage, topxPos - Size / 2, headY - Size, Size, Size);

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

    textAlign(CENTER, CENTER);
    textSize(10);
    // text("😱", botxPos, botyPos);


    if(!zeepzorp.isPlaying()){
    zeepzorp.play();
    tint('green');

    }
} else {
    zeepzorp.pause();
    noTint();

}

}

function takePic(){
  saveCanvas('MyBeautifulPicture', 'jpg'); // 2nd is the file name
}

//do if mapped is > distnace ( like nose or ehebrow) --> you are this pokemon different Pokémon image when a user smiles or makes a funny face. 
//https://www.pokekalos.fr/jeux/mobile/rumblerush/pokedex/index.html poke web pics