"use strict";

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
  const { scrollY } = window;
  if (scrollY > 200) {
    header.classList.add("positionheader");
  } else {
    header.classList.remove("positionheader");
  }
});

console.log(window.scrollY);
