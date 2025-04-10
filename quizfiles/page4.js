const button = document.getElementById("startButton"); //i store me button in varibale

//buttons 
let runawyTracker = 0; //vars bascially trcking hw many rimes i hovered

const finalTrack = 5; //bascially after 5 times it triggers me final action


const favcolor = localStorage.getItem("NextPageColor");

if (favcolor) {

    document.body.style.backgroundColor = favcolor;  


}


button.addEventListener("mouseover", function() {
             //bascially ^ says " if mouse is over the thing then do this .. function is what should happen "

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

});

// this is to change the page -----------------

button.addEventListener("click", function() {
    if (runawyTracker >= finalTrack) {

        window.location.href = "quizPrototype.html";
    }
  });


  // me local sotry for resukts 
  let savedResult = localStorage.getItem("QuizResult");
if (savedResult) {
    document.getElementById("result").textContent = "Your result: " + savedResult;
}

