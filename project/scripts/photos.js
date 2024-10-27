const currentYear = document.getElementById('currentyear');
currentYear.textContent = new Date().getFullYear();

const lastModified = document.getElementById('lastModified');
lastModified.textContent = (document.lastModified);

const hamButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamButton.addEventListener('click', () => {
  navigation.classList.toggle('open');
  hamButton.classList.toggle('open');
});

// Lista de fotos com informações de nome, local, data e URL da imagem
const photos = [
  {
    photoName: "Me before Mission",
    location: "Santos, Brazil",
    year: 2003,
    imageUrl: "images/Me-before-mission.jpg"
  },
  {
    photoName: "Me as a Missionary",
    location: "Salvador, Brazil",
    year: 2007,
    imageUrl: "images/Me-as-a-missionary.jpg"
  },
  {
    photoName: "Me after Mission",
    location: "Santos, Brazil",
    year: 2009,
    imageUrl: "images/Me-after-mission.jpg"
  },
  {
    photoName: "Me in Itajaí",
    location: "Itajaí, Brazil",
    year: 2011,
    imageUrl: "images/Me-in-Itajaí.jpg"
  },
  {
    photoName: "Me and my Sweetheart",
    location: "Balneário Piçarras, Brazil",
    year: 2012,
    imageUrl: "images/Me-and-my-sweetheart.jpg"
  },
  {
    photoName: "I love our Love",
    location: "Balneário Piçarras, Brazil",
    year: 2012,
    imageUrl: "images/I-love-our-love.jpg"
  },
  {
    photoName: "Our Wedding",
    location: "Balneário Piçarras, Brazil",
    year: 2015,
    imageUrl: "images/Our-wedding.jpg"
  },
  {
    photoName: "We are Pregnant",
    location: "Balneário Piçarras, Brazil",
    year: 2020,
    imageUrl: "images/We-are-pregnant.jpg"
  },
  {
    photoName: "Our little Girl",
    location: "Balneário Piçarras, Brazil",
    year: 2020,
    imageUrl: "images/Our-little-girl.jpg"
  },
  {
    photoName: "Our little Sunshine",
    location: "Paris, France",
    year: 2024,
    imageUrl: "images/Our-little-sunshine.jpg"
  },
  {
    photoName: "Me washing the dichies",
    location: "Itabuna, Brazil",
    year: 2006,
    imageUrl: "images/Me-washing-the-dichies.jpg"
  },
  {
    photoName: "Our little girl Playing",
    location: "Curitiba, Brazil",
    year: 2023,
    imageUrl: "images/Our-little-girl-playing.jpg"
  },
  // ... adicione mais fotos conforme necessário
];

// Função para filtrar fotos com base no ano e período
const filters = {
  single: () => createPhotoCard(photos.filter(photo => photo.year >= 2003 && photo.year <= 2014)),
  married: () => createPhotoCard(photos.filter(photo => photo.year >= 2015 && photo.year <= 2024)),
  father: () => createPhotoCard(photos.filter(photo => photo.year >= 2020 && photo.year <= 2024)),
  all: () => createPhotoCard(photos) // Exibe todas as fotos
};

// Função para criar os cards de fotos
function createPhotoCard(filteredPhotos) {
  const gallery = document.querySelector("#gallery");
  gallery.innerHTML = ""; // Limpar o conteúdo antes de renderizar

  filteredPhotos.forEach(photo => {
    const card = document.createElement("section");
    const name = document.createElement("h3");
    const location = document.createElement("p");
    const year = document.createElement("p");
    const img = document.createElement("img");

    // Definindo os valores do card
    name.textContent = photo.photoName;
    location.innerHTML = `<span class="label">Location: </span> ${photo.location}`;
    year.innerHTML = `<span class="label">Year: </span> ${photo.year}`;
    img.setAttribute("src", photo.imageUrl);
    img.setAttribute("alt", `${photo.photoName}`);
    img.setAttribute("loading", "lazy");
    img.setAttribute("width", "300"); // Definindo o tamanho médio das imagens

    // Adicionando elementos ao card e ao gallery
    card.append(name, location, year, img);
    gallery.appendChild(card);
  });
}

// Renderizar todas as fotos inicialmente
createPhotoCard(photos);

// Adicionando eventos de clique para cada filtro
document.querySelector("#single").addEventListener("click", filters.single);
document.querySelector("#married").addEventListener("click", filters.married);
document.querySelector("#father").addEventListener("click", filters.father);
document.querySelector("#all").addEventListener("click", filters.all);

// Atualização do ano atual e da data da última modificação
document.getElementById('currentyear').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;