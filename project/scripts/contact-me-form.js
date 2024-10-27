const currentYear = document.getElementById('currentyear');
currentYear.textContent = new Date().getFullYear();

const lastModified = document.getElementById('lastModified');
lastModified.textContent = (document.lastModified);

const selectElement = document.querySelector("#productName");
const form = document.querySelector("form");

products.forEach(option => {
    let newOption = document.createElement("option");
    newOption.value = option.id;
    newOption.text = option.name;

    selectElement.appendChild(newOption);
});

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