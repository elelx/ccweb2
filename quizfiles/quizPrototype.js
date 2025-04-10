let favcolor = ''; //  variable to store my color



// i made 4 diff event listner for each colored pic image 

document.getElementById("Pink").addEventListener("click", function() {
    // this is basically saying, if hthe picture with the Id of Pink is clicked then this will happen

    favcolor = "pink"; // Set the selected color
    saveColor(); // the function to save and navigate to the next page
});

document.getElementById("green").addEventListener("click", function() {

    favcolor = "#8bf885";
    saveColor(); 
});


document.getElementById("yellow").addEventListener("click", function() {

    favcolor = "#f8e685"; 
    saveColor(); 
});


document.getElementById("blue").addEventListener("click", function() {

    favcolor = "#a6e6f7"; 
    saveColor(); 
});


// save the  color for next page

function saveColor() {
    if (favcolor) {
        localStorage.setItem("NextPageColor", favcolor); //save to localStorage
        window.location.href = "page2.html"; // goes ro next page 
    }
}