const bar = document.querySelector("#bar")
const body = document.querySelector("body")
const moon = document.querySelector("#moon")

const menu = document.querySelector("#menu")

bar.addEventListener("click", () => {
    menu.classList.toggle("hidden")
})
moon.addEventListener("click", () => {
    body.classList.toggle("dark")
})