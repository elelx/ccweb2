const catFacts = "https://catfact.ninja/fact";



let theAnswer = "";


document.getElementById("answer").addEventListener("submit", function(event) {

//https://www.w3schools.com/jsref/event_preventdefault.asp 
  event.preventDefault();
  
  
  theAnswer = document.getElementById("feeling").value.trim().toLowerCase(); //value trim --> input + delete thr spaces

  document.getElementById("result").innerHTML = ""; //1 iamge + clears page

  fetch(catFacts)
    .then(response => response.json())
    .then(handlecatFact)
    .catch(error => console.log(error));
});

function getCatImage(word) {
  return `https://cataas.com/cat/says/${word}?size=50&color=black`;

  document.getElementById("result").innerHTML = "";
}

function handlecatFact(data) {
  const fact = data.fact;



  const results = document.getElementById("result");

        //showing the catfact 
  const message = document.createElement("p");
  message.textContent = `heres a interesting cat fact for you,  ${fact}`;


  results.appendChild(message);


  fetch(getCatImage(theAnswer))
    .then(response => response.blob())
    .then(showCatImage)
    .catch(error => console.log(error));

}

function showCatImage(imageBlob) {


  const results = document.getElementById("result");
  const img = document.createElement("img");

  
  img.src = URL.createObjectURL(imageBlob);
  results.appendChild(img);
}
