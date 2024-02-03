import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const inputRef = document.querySelector('#searchInput');
const btnRef = document.querySelector('button[type="submit"]');
const formRef = document.querySelector('.js-form');

btnRef.addEventListener('click', onButtonSubmit);

function onButtonSubmit(e) {
  e.preventDefault();
  if (inputRef.value === '') return;
  const data = inputRef.value;
  formRef.reset();
  getPhotoes(data)
    .then(photoes => {
      if (photoes.length === 0) {
        iziToast.error({
          title: 'Sorry',
          message:
            'There are no images matching your search query. Please try again!',
          position: 'topRight',
        });
      } else {
        console.log(photoes);
      }
    })
    .catch(error => {
      console.error('Помилка:', error);
    });
}

function getPhotoes(data) {
  const url = `https://pixabay.com/api/?key=33929638-3d09c2b606ca8b58d00360aed&q=${data}`;

  return fetch(url).then(res => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error(`Помилка: ${res.status}`);
    }
  });
}
