const currentYear = document.getElementById('currentyear');
currentYear.textContent = new Date().getFullYear();

const lastModified = document.getElementById('lastModified');
lastModified.textContent = (document.lastModified);

const postsElement = document.querySelector("#reviews");
let reviewCount = Number(window.localStorage.getItem("reviewCount")) || 1;
postsElement.textContent = reviewCount;

localStorage.setItem("reviewCount", reviewCount);