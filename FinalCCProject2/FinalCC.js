//connect API
const catFacts = "https://catfact.ninja/fact";

const sound = document.getElementById('mySound');

let theAnswer = "";



//buttons


document.getElementById("answer").addEventListener("submit", function(event) {
  sound.play();

//https://www.w3schools.com/jsref/event_preventdefault.asp 
  event.preventDefault();
  
  
  theAnswer = document.getElementById("confession").value.trim().toLowerCase(); //value trim --> input + delete thr spaces

  //NEED ANSWER OR IAMGE WONT SHOW
  if (!theAnswer) {
    alert("Please type something first!");
    return;
  }

  document.getElementById("result").innerHTML = ""; //1 iamge + clears page


//API
  fetch(catFacts)
    .then(response => response.json())
    .then(handlecatFact)
    .catch(error => console.log(error));
});

//API
function getCatImage(word) {
  // you "confession" on the image
  return `https://cataas.com/cat/says/${word}?size=20&color=black`;

}

//cat facts + imsge API 
function handlecatFact(data) {
  //FACTS_______________________________
  const fact = data.fact;
  const results = document.getElementById("result");

  const message = document.createElement("p");
  message.textContent = `HERE IS A CAT FACT:  ${fact}`;

  //needed help this is so i can css it
  message.id = "catFact"; 

  results.appendChild(message);

// CAT IMGES --------------------______________-

  const existingImg = document.getElementById("catImage");

  const img = document.createElement("img");

  
  img.id = "catImage";

  //confesssion
  img.src = getCatImage(theAnswer);


  results.appendChild(img);
}


