let listBox = document.querySelector(".list-box");
let navList = document.querySelector(".nav-list");
let navListMd = document.querySelector(".nav-list-md");
listBox.addEventListener("click", () => {
  if (navList.classList.contains("nav-list-md")) {
    navList.classList.remove("nav-list-md");
    navList.classList.add("nav-list");
    listBox.children[0].innerHTML = `<div><i class="fa-solid fa-bars"></i></div>`;
  } else {
    navList.classList.remove("nav-list");
    navList.classList.add("nav-list-md");
    listBox.children[0].innerHTML = "x";
  }
});


// Get the elements
const thumbnail = document.getElementsByClassName('pop-img');
const popup = document.getElementById('popup');
const popupImage = document.getElementById('popup-image');
const close = document.querySelector('.close');
console.log(thumbnail);

// When the user clicks on the thumbnail, open the popup
[...thumbnail].forEach(element => {
  element.onclick = function() {
    popup.style.display = 'block';
    popupImage.src = this.src; // Set the popup image source to the clicked image source
};
});

// When the user clicks on the close button, close the popup
close.onclick = function() {
    popup.style.display = 'none';
};

// When the user clicks anywhere outside the popup, close the popup
window.onclick = function(event) {
    if (event.target === popup) {
        popup.style.display = 'none';
    }
};