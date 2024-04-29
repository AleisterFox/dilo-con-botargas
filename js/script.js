const menu = document.querySelectorAll(".menu");
const burguerButton = document.querySelector(".menu__button");
const searchBar = document.querySelector(".search");
const bodyMain = document.querySelector("main");
const profileBar = document.querySelector(".profile");
const profileBar2 = document.querySelector(".profile2");
const profileMenu = document.querySelector(".profile-menu");
const profileMenu2 = document.querySelector(".profile-menu2");

burguerButton.addEventListener("click", () => {
  if (this.innerWidth < 769) {
    menu.forEach((list) => {
      if (list.style.display != "flex") {
        list.style.display = "flex";
        list.style.animation = "showMenu 0.5s linear";
        burguerButton.classList.remove("fa-bars");
        burguerButton.classList.add("fa-x");
      } else {
        list.style.animation = "hideMenu 0.5s linear";
        setTimeout(() => {
          list.style.display = "none";
        }, 490);
        burguerButton.classList.remove("fa-x");
        burguerButton.classList.add("fa-bars");
      }
    });
  }
});


