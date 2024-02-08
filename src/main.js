import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const inputRef = document.querySelector('#searchInput');
const btnRef = document.querySelector('button[type="submit"]');
const formRef = document.querySelector('.js-form');
const containerRef = document.querySelector('.form-container');
const loaderRef = document.querySelector('.loader');

btnRef.addEventListener('click', onButtonSubmit);

function onButtonSubmit(e) {
  e.preventDefault();
  if (inputRef.value === '') return;
  loaderRef.classList.add('is-shown');
  const data = inputRef.value;
  formRef.reset();
  getPhotos(data)
    .then(photos => {
      if (photos.hits.length === 0) {
        iziToast.error({
          title: 'Sorry',
          message:
            'There are no images matching your search query. Please try again!',
          position: 'topRight',
        });
      } else {
        loaderRef.classList.remove('is-shown');
        renderPhotos(photos.hits);
        lightbox.refresh();
      }
    })
    .catch(error => {
      console.error('Помилка:', error);
    });
}

function getPhotos(data) {
  const url = `https://pixabay.com/api/?key=33929638-3d09c2b606ca8b58d00360aed&q=${data}&image_type=photo?orientation=horizontal?safesearch=true`;

  return fetch(url).then(res => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error(`Помилка: ${res.status}`);
    }
  });
}

function photoTemplate(photo) {
  return `
  <li class="gallery">
    <a href="${photo.largeImageURL}">
    <img src="${photo.webformatURL}" alt="${photo.tags}">
    <div class="card-body">
      <p class="card-text">Likes: ${photo.likes}</p>
      <p class="card-text">Views: ${photo.views}</p>
      <p class="card-text">Comments: ${photo.comments}</p>
      <p class="card-text">Downloads: ${photo.downloads}</p>
    </div>
    </a>
  </li>`;
}

function renderPhotos(photos) {
  containerRef.innerHTML = '';
  const markup = photos.map(photo => photoTemplate(photo)).join('');
  containerRef.innerHTML = markup;
  let lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
  });
}
