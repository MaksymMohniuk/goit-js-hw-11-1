import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const inputRef = document.querySelector('#searchInput');
const btnRef = document.querySelector('button[type="submit"]');
const formRef = document.querySelector('.js-form');
const containerRef = document.querySelector('.form-container');

btnRef.addEventListener('click', onButtonSubmit);

function onButtonSubmit(e) {
  e.preventDefault();
  if (inputRef.value === '') return;
  const data = inputRef.value;
  formRef.reset();
  getPhotoes(data)
    .then(photoes => {
      if (photoes.hits.length === 0) {
        iziToast.error({
          title: 'Sorry',
          message:
            'There are no images matching your search query. Please try again!',
          position: 'topRight',
        });
      } else {
        renderPhotoes(photoes.hits);
      }
    })
    .catch(error => {
      console.error('Помилка:', error);
    });
}

function getPhotoes(data) {
  const url = `https://pixabay.com/api/?key=33929638-3d09c2b606ca8b58d00360aed&q=${data}&?image_type:photo?orientation:horizontal?safesearch:true`;

  return fetch(url).then(res => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error(`Помилка: ${res.status}`);
    }
  });
}

function photoeTemplate(photoe) {
  return `
  <div class="gallery">
    <a href="images/image1.jpg"><img src="${photoe.webformatURL}" alt="${photoe.tags}" title=""/></a>
    <a href="images/image2.jpg"><img src="${photoe.largeImageURL}" alt="${photoe.tags}" title="Beautiful Image"/></a>
    <img src="${photoe.webformatURL}" alt="${photoe.tags}">
    <div class="card-body">
      <p class="card-text">Likes: ${photoe.likes}</p>
      <p class="card-text">Views: ${photoe.views}</p>
      <p class="card-text">Comments: ${photoe.comments}</p>
      <p class="card-text">Downloads: ${photoe.downloads}</p>
    </div>
  </div>`;
}

function renderPhotoes(photoes) {
  containerRef.innerHTML = '';
  const markup = photoes.map(photoe => photoeTemplate(photoe)).join('');
  containerRef.innerHTML = markup;
}

let lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

lightbox.refresh();
