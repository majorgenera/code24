<<<<<<< HEAD
const mainContainer = document.querySelector(".main")
const thnkuContainer = document.querySelector(".thnku")
const submitButton = document.getElementById("submit")
const rating = document.getElementById("rating")
const rates = document.querySelectorAll(".btn")

submitButton.addEventListener("click", () => {
    thnkuContainer.classList.remove("hidden")
    mainContainer.style.display = "none"
})

rates.forEach((rate) => {
    rate.addEventListener("click", () => {
        rating.innerHTML = rate.innerHTML
    })
=======
const mainContainer = document.querySelector(".main")
const thnkuContainer = document.querySelector(".thnku")
const submitButton = document.getElementById("submit")
const rating = document.getElementById("rating")
const rates = document.querySelectorAll(".btn")

submitButton.addEventListener("click", () => {
    thnkuContainer.classList.remove("hidden")
    mainContainer.style.display = "none"
})

rates.forEach((rate) => {
    rate.addEventListener("click", () => {
        rating.innerHTML = rate.innerHTML
    })
>>>>>>> dabd444bddef59517da599048bbd4efa6364474d
})