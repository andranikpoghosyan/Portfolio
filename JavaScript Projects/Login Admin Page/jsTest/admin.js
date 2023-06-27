import Storage from "./storages.js";

if (!Storage.getFromStorage("isAdmin")) {
  location.href = "login.html";
}

const table = document.getElementsByTagName("table")[0];

function displayHeroes() {
  const heroes = Storage.getAllHeroes();
  const tbody = document.getElementsByTagName("tbody")[0];

  tbody.innerHTML = "";

  heroes.forEach((hero) => {
    tbody.innerHTML += `
    <tr>
    <td>${hero.id}</td>
    <td>${hero.name}</td>
    <td>${hero.type}</td>
    <td>
    <img src='./images/${hero.image}' alt="" />
    </td>
    <td>
    <a href="edit.html#${hero.id}">
    <i class="fa-solid fa-pencil"></i>
    </a>
    </td>

    <td>

    <button class="delete" data-heroid='${hero.id}'>
    <i class="fa-solid fa-trash-can"></i>

    </button>
    
    </td>
    
    </tr>`;
  });
}

displayHeroes();

const notification = document.querySelector("#notification");

table.addEventListener("click", (e) => {
  const { tagName } = e.target.parentElement;

  if (tagName === "BUTTON") {
    const id = e.target.parentElement.dataset.heroid;
    Storage.deleteHeroById(id);

    function hide() {
      notification.style.cssText = `
      transition: .4s`;
      notification.textContent = "";
    }

    function show() {
      notification.style.cssText = `visibility: visible;
      scale: 1;
      background-color: green;
      transition: .4s`;
      notification.textContent = `The user (id: ${id}) is successfully deleted.`;
    }

    setTimeout(show, 500);

    setInterval(hide, 3000);

    displayHeroes();
  }
});
