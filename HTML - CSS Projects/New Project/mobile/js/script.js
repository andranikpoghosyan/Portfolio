"use strict";

const burger = document.querySelector(".burger");
const mainav = document.getElementById("mainav");
const main = document.getElementsByTagName("main")[0];
const closeBtn = document.querySelector(".fa-xmark");

burger.addEventListener("click", () => {
  if (mainav.classList.contains("hidden")) {
    mainav.classList.remove("hidden");
    mainav.classList.add("visible");
    main.style.cssText = `opacity: 0.6`;
  } else {
    mainav.classList.remove("visible");
    mainav.classList.add("hidden");
  }
});

closeBtn.addEventListener("click", () => {
  if (mainav.className.includes("visible")) {
    mainav.classList.remove("visible");
    mainav.classList.add("hidden");
    main.style.cssText = `opacity: 1`;
  }
});

document.body.addEventListener("click", (e) => {
  if (e.target.localName === "main") {
    mainav.classList.remove("visible");
    mainav.classList.add("hidden");
    main.style.cssText = `opacity: 1`;
  }
  console.dir(e.target.localName);
});
