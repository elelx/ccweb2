const catFactURL = "https://catfact.ninja/fact";
let userFeeling = "";

document.getElementById("divinationForm").addEventListener("submit", function(event) {
  event.preventDefault();
  
  userFeeling = document.getElementById("feeling").value.trim().toLowerCase();

  document.getElementById("result").innerHTML = "";

  fetch(catFactURL)
    .then(response => response.json())
    .then(handleCatFact)
    .catch(error => console.log(error));
});

function getCatImageURL(word) {
  return `https://cataas.com/cat/says/${word}?size=50&color=black`;
}

function handleCatFact(data) {
  const fact = data.fact;
  console.log("Random Cat Fact:", fact);

  const resultDiv = document.getElementById("result");

  const message = document.createElement("p");
  message.textContent = `Your divination: ${fact}`;
  resultDiv.appendChild(message);

  fetch(getCatImageURL(userFeeling))
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
