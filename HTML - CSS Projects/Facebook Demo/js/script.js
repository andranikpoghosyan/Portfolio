"use strict"

const f = document.querySelector("form")
const password = document.getElementById("password")
const repassword = document.getElementById("repeatpassword")
const p2 = document.getElementById("error")

f.addEventListener("click", (e) => {
    delClass()
    const { tagName } = e.target
    if (tagName === "INPUT") {
        e.target.classList.add("active")
    }
})

function delClass() {
    const inp = document.querySelector("input.active")
    inp?.classList.remove("active")
}

f.addEventListener("submit", (e) => {
    e.preventDefault()
    const value = password.value
    const hasUpperCase = /^[A-Z]/.test(value)
    const hasNumber = /\d/.test(value)
    const isValidLength = value.length > 8
    const p = document.getElementsByTagName("p")[0]
    const value1 = value.toString().split("")
    const value2 = repassword.value.toString().split("")

    if (hasUpperCase && hasNumber && isValidLength) {
        p.insertAdjacentHTML("beforebegin", "<i class='fa-solid fa-check'></i>")
        p?.classList.remove("hidden")
        p.textContent = "Correct Password"
        if (JSON.stringify(value1) === JSON.stringify(value2)) {
            p2.textContent = "Passwords are the same"
            p2.classList.add("show")
        }
    } else {
        p.textContent = "Invalid Password 😭"
        p.classList.add("wrong")
        p?.classList.remove("hidden")
        p2.textContent = "Please Type Agein"
        p2.classList.remove("show")
        p2.classList.add("del")
    }
})


