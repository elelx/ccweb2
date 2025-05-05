const catFactURL = "https://catfact.ninja/fact";



let theAnswer = "";


document.getElementById("answer").addEventListener("submit", function(event) {

//https://www.w3schools.com/jsref/event_preventdefault.asp 
  event.preventDefault();
  
  
  theAnswer = document.getElementById("feeling").value.trim().toLowerCase(); //value trim --> input + delete thr spaces

  document.getElementById("result").innerHTML = ""; //1 iamge + clears page

  fetch(catFactURL)
    .then(response => response.json())
    .then(handlecatFact)
    .catch(error => console.log(error));
});

function getCatImageURL(word) {
  return `https://cataas.com/cat/says/${word}?size=50&color=black`;
  
  document.getElementById("result").innerHTML = "";
}

function handlecatFact(data) {
  const fact = data.fact;
  console.log("Random Cat Fact:", fact);

  const resultDiv = document.getElementById("result");

  // Show the cat fact
  const message = document.createElement("p");
  message.textContent = `Your divination: ${fact}`;
  resultDiv.appendChild(message);

  // Show cat image with the user's feeling
  fetch(getCatImageURL(theAnswer))
    .then(response => response.blob())
    .then(showCatImage)
    .catch(error => {
      const errorMsg = document.createElement("p");
      errorMsg.textContent = "Something went wrong with the cat image.";
      resultDiv.appendChild(errorMsg);
      console.error(error);
    });
}

function showCatImage(imageBlob) {
  const resultDiv = document.getElementById("result");

  const img = document.createElement("img");
  img.src = URL.createObjectURL(imageBlob);
  resultDiv.appendChild(img);
}
