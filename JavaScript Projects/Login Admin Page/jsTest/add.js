import Storage from "./storages.js";

const addHeroForm = document.querySelector("#addHeroForm");

addHeroForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const { heroname, herotype, heroImage } = e.target;

  const hero = {
    id: Date.now(),
    name: heroname.value,
    type: herotype.value,
    image: heroImage?.files[0]?.name,
  };
  Storage.saveHero(hero);
  location.href = "admin.html";
});
