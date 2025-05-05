const catFactURL = "https://catfact.ninja/fact";



let userFeeling = "";

// When the form is submitted
document.getElementById("divinationForm").addEventListener("submit", function(event) {


    
  event.preventDefault();
  
  // Get user's input
  userFeeling = document.getElementById("feeling").value.trim().toLowerCase();

  // Clear old result
  document.getElementById("result").innerHTML = "";

  // Start the magic!
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

  // Show the cat fact
  const message = document.createElement("p");
  message.textContent = `Your divination: ${fact}`;
  resultDiv.appendChild(message);

  // Show cat image with the user's feeling
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
