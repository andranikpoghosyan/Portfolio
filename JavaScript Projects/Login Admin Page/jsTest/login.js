import Storage from "./storages.js";

const auth = {
  username: "admin",
  password: "admin",
};

const myForm = document.querySelector("#myForm");

myForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const { login, password } = e.target;

  if (auth.username === login.value && auth.password === password.value) {
    Storage.saveToStorage("isAdmin", true);
    location.href = "admin.html";
  } else {
    alert("invalid username or password");
  }
});
