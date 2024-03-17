const list = document.querySelectorAll(".list");

list.forEach((item) =>
  item.addEventListener("click", function activeLink() {
    list.forEach((item) => item.classList.remove("active"));
    this.classList.add("active");
  })
);