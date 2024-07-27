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
