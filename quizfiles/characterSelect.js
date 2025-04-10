// store a referenct to the character dropdown select element
const characterDropdown = document.getElementById("character-dropdown");
// listen to when that value changes
characterDropdown.addEventListener("change", onDropdownChanged); //this has to have a reaction so put a new function

// store a reference to the image element that will display the character
const characterDisplayImageElement = document.getElementById("character-display"); //grabbing the ID from HTML  


// check if could find the image element
if (characterDisplayImageElement === null) console.error("could not find character display image.")

// dictionary object of options and file paths
const characterImagePathMap = {
    none: 'imgs/defaultPic.png',
    tortillo: 'imgs/tortillo.png',
    chuck: 'imgs/chuck.png',
    fin: 'imgs/fin.png',
    frend: 'imgs/frend.png',
    claude: 'imgs/claude.png',
    mo: 'imgs/mo.png'
}

// update image when a new dropdown value is selected
function onDropdownChanged() {
    let newValue = characterDropdown.value;
    const filePath = characterImagePathMap[newValue]; 


    characterDisplayImageElement.textContent = filePath; 
    document.getElementById("character-display").src = filePath;

}

