// Задание 1 - библиотека SimpleLightbox
// 1.Добавь библиотеку SimpleLightbox как зависимость проекта используя npm.
// 2. Используй свой JavaScript код из предыдущей домашней работы, но выполни рефакторинг с учетом того, 
// что библиотека была установлена через npm.
// Для того чтобы подключить CSS код библиотеки в проект, необходимо добавить еще один импорт, кроме того который описан в документации.

// // Описан в документации
// import SimpleLightbox from "simplelightbox";
// // Дополнительный импорт стилей
// import "simplelightbox/dist/simple-lightbox.min.css";

import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryContainer = document.querySelector('.gallery');
const cardsMarcup = createGalleryCardsMarkup(galleryItems);
//рэндерим разметку в html 
galleryContainer.insertAdjacentHTML('beforeend', cardsMarcup);
//Реализация делегирования на div.gallery
galleryContainer.addEventListener('click', onGalleryContainerClick);
//создаём разметку
function createGalleryCardsMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<div class="gallery__item">
            <a class="gallery__link" href = "${original}" >
                <img
                    loading="lazy"
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
             </a>
        </div > `;
    })
    .join('');
}
//используем библиотеку simplelightbox для открытия модалки
let gallery = new SimpleLightbox('.gallery a');

function onGalleryContainerClick(evt) {
    evt.preventDefault();
    const isGalleryImage = evt.target.classList.contains('gallery__image');  
    if (!isGalleryImage) {
        return;
    }
//получение url большого изображения
    const urlEl = evt.target.dataset.source;       
   //закроем модалку при нажатии клавиши ESC   
function onEscKeyPress(event) {
  const ESC_KEY_CODE = 'Escape'; 
  if (event.code === ESC_KEY_CODE) { 
  instance.close(() => window.removeEventListener('keydown', onEscKeyPress));
       return;
  }
    return;
}
}

