import { MAIN_ARRAY_NAME } from "./constants.js";
import Storage from "./storages.js";

const id = +location.hash.slice(1);

const editHeroForm = document.querySelector("#editHeroForm");
const heroname = document.querySelector("#heroname");
const herotype = document.querySelector("#herotype");
const imageBox = document.querySelector("#imageBox");
const heroImage = document.querySelector("#heroImage");
const backButton = document.querySelector("#back");

const heroes = Storage.getAllHeroes();

const hero = heroes.find((hero) => hero.id === id);
heroname.value = hero.name;
herotype.value = hero.type;
imageBox.src = `./images/${hero.image}`;

editHeroForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const { heroname, herotype, heroImage } = e.target;

  const newHero = {
    id,
    name: heroname.value,
    type: herotype.value,
    image: heroImage?.files[0]?.name || hero.image,
  };

  const arr = heroes.map((elem) => {
    if (elem.id === id) {
      return newHero;
    }
    return elem;
  });

  Storage.saveToStorage(MAIN_ARRAY_NAME, arr);
  location.assign("admin.html");
});

heroImage.addEventListener("change", (e) => {
  if (heroImage?.files.length > 0) {
    imageBox.src = `./images/${heroImage.files[0].name}`;
  }
});

backButton.addEventListener("click", (e) => {
    history.back()
    
});
