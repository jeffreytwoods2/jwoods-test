let menuInput = document.getElementById("menu-input")
let hamburger = document.getElementById("hamburger")
let dropdownContent = document.querySelector(".dropdown-content")

document.addEventListener("click", (e) => {
    if (e.target !== menuInput && e.target !== hamburger) {
        menuInput.checked = false
    }
})