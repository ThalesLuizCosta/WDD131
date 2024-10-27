const currentYear = document.getElementById('currentYear');
        currentYear.textContent = new Date().getFullYear();

        const lastModified = document.getElementById('lastModified');
        lastModified.textContent = document.lastModified;

        const hamButton = document.querySelector('#menu');
        const navigation = document.querySelector('.navigation');

        hamButton.addEventListener('click', () => {
            navigation.classList.toggle('open'); // Alterna a classe 'open' no menu
            hamButton.classList.toggle('open'); // Alterna a classe 'open' no botão
        });