const items = document.querySelectorAll(".container-item");
const audioBox = document.querySelector("#audio-click");
const palitra = document.querySelector("#palitra");
const palitraText = document.querySelector(".palitra-text");

items.forEach((item) => {
  const bg = item.dataset.color;
  item.style.backgroundColor = bg;

  item.addEventListener("click", (e) => {
    const color = e.currentTarget.dataset.color;
    navigator.clipboard.writeText(color);
    audioBox.play()
    palitra.style.cssText = `background-color: ${color};
    opacity: 1;
    `;
    palitraText.style.cssText = `opacity: 1;`;
    palitra.classList.add("palitra-text_active");

    setTimeout(() => {
      palitra.style.cssText = `background-color: transparent;
          opacity: 0;
          `;
      palitraText.style.cssText = `opacity: 0;`;
      palitra.classList.remove("palitra-text_active");
    }, 1000);
  });
});
