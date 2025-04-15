const button = document.getElementById("startButton"); //store button  

//to track the hover button ---------------------------------------------------

let runawyTracker = 0; //vars bascially trcking hw many rimes i hovered

const finalTrack = 5; 

//background -----------------------------

const favcolor = localStorage.getItem("NextPageColor");

if (favcolor) {

    document.body.style.backgroundColor = favcolor;  //grabbing the saved option 
}

//run away button ---------------------------------------------

button.addEventListener("mouseover", function() { //bascially ^ says " if mouse is over the thing then do this .. function is what should happen "

    if(runawyTracker<finalTrack){
        runawyTracker ++; //add 1


// so button doesnt go off screen -------------

    //offsetW = w of buton  offsetH = H of button  mathrandom = 0 - 1 #
     const x = Math.random() * (window.innerWidth - button.offsetWidth);
     const y = Math.random() * (window.innerHeight - button.offsetHeight);  
    

 //button movement ------------------ ---------
 
     button.style.position = "absolute"; 
    //posoiton/absoulite = where to move this using cords
     
    //need this to mooooooveee thy butoon -- > x + y is random how far side / height  
     button.style.left = x + "px";
     button.style.top = y + "px";

    }


    if (runawyTracker === finalTrack) { //this is to change the photo by using the img after the final hover
      const img = button.querySelector("img");
      img.src = "../tesphotos/shrimp3.png";
    }      

});

// this is to change the page -----------------

button.addEventListener("click", function() {
    if (runawyTracker >= finalTrack) {
        
        window.location.href = "quizPrototype.html";
    }
  });


// the  local storage  for resukts 

const savedResult = localStorage.getItem("Results");
const savedResult2 = localStorage.getItem("Results2");


  if (savedResult) {
    const container = document.getElementById("FishResults");

      const img = document.createElement("img");
      img.src = savedResult;
      img.alt = "Your fish result";
      img.width = 300;


      img.onload = () => {
      container.appendChild(img);
       };  

      }
  

  if(savedResult2){
    const container = document.getElementById("HumorResults");
    container.textContent = savedResult2; 


  }


