// Display the current year in the footer
let d = new Date();
document.getElementById("currentYear").innerHTML = `&copy;${d.getFullYear()}`;

// Display the last modified date of the document
document.querySelector('#lastModified').textContent = `Last Modification: ${document.lastModified}`;

// Carousel logic
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-images img');
const captionElement = document.querySelector('.caption');
const captions = [
    'Photo 1 - My picture before my mission - 2003', 
    'Photo 2 - Me as a missionary in 2007', 
    'Photo 3 - Me after my mission - 2008',
    'Photo 4 - I just arrived to live in Santa Catarina in 2011',
    'Photo 5 - Me when I started dating the woman of my life in 2012',
    'Photo 6 - When I asked her to marry me in 2013',
    'Photo 7 - When We Got Married in 2015',
    'Photo 8 - We are waiting for our little angel to be born in 2020',
    'Photo 9 - Our little angel after being born in October 2020',
    'Photo 10 - Now our little flower with 3 years old - 2024'
];

// Function to show the current slide and update the caption
function showSlide(index) {
    slides[currentSlide].classList.remove('active');
    currentSlide = (index + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
    captionElement.textContent = captions[currentSlide];
}

// Event listener for the "Next" button
document.querySelector('.next').addEventListener('click', () => {
    showSlide(currentSlide + 1);
});

// Event listener for the "Previous" button
document.querySelector('.prev').addEventListener('click', () => {
    showSlide(currentSlide - 1);
});

// Initialize the carousel with the first image visible
showSlide(currentSlide);

// Get elements for the hamburger menu
const menuIcon = document.getElementById('menu-icon');
const navMenu = document.getElementById('nav-menu');

// Toggle the menu when the hamburger icon is clicked
menuIcon.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});
