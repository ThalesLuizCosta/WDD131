document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.getElementById("menu");
    const navigation = document.querySelector('.navigation');

    menuButton.addEventListener('click', function() {
        navigation.classList.toggle('open'); // Alterna a classe 'open' para mostrar ou esconder a navegação
    });
});

const currentYear = document.getElementById('currentYear');
currentYear.textContent = new Date().getFullYear();

const lastModified = document.getElementById('lastModified');
lastModified.textContent = (document.lastModified);

const selectElement = document.querySelector("#productName");
const form = document.querySelector("form");

let counter = getCount() || 0;

form.addEventListener("submit", () => {
    counter = counter + 1;
    setCount(counter)
})

function setCount(counter) {
    localStorage.setItem("reviewCount", counter)
}
function getCount() {
    return JSON.parse(localStorage.getItem('reviewCount'))
}