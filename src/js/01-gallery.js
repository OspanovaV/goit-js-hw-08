// Задание 1 - библиотека SimpleLightbox
// 1.Добавь библиотеку SimpleLightbox как зависимость проекта используя npm.
// 2. Используй свой JavaScript код из предыдущей домашней работы, но выполни рефакторинг с учетом того, 
// что библиотека была установлена через npm.
// Для того чтобы подключить CSS код библиотеки в проект, необходимо добавить еще один импорт, кроме того который описан в документации.

// // Описан в документации
// import SimpleLightbox from "simplelightbox";
// // Дополнительный импорт стилей
// import "simplelightbox/dist/simple-lightbox.min.css";

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
// import SimpleLightbox from "simplelightbox/dist/simple-lightbox.esm";
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryContainer = document.querySelector('.gallery');//получим ссылку к контейнеру куда будем складывать карточки
const cardsMarcup = createGalleryCardsMarkup(galleryItems);//вызываем массив(colors) обьектов (хранит результат вызова функции всей разметки)

//рэндерим разметку в html 
galleryContainer.insertAdjacentHTML('beforeend', cardsMarcup);//добавляет в html созданную разметку

//Реализация делегирования на div.gallery
galleryContainer.addEventListener('click', onGalleryContainerClick);//вешаем слушателя на большой контейнер и выполняем функцию

//создаём разметку
function createGalleryCardsMarkup(galleryItems) {//функция принимает массив
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

function onGalleryContainerClick(evt) {
    evt.preventDefault();//запретить при клике по умолчанию перенаправление на другую страницу
    const isGalleryImage = evt.target.classList.contains('gallery__image');//содержит элемент с классом
    //проверка куда кликнули
  
    if (!isGalleryImage) {//если элемент по которому кликнули не содержит isGalleryImage
        return;//выходим и ничего не делаем
    }
    const urlEl = evt.target.dataset.source; //получение url большого изображения
    
//используем библиотеку SimpleLightbox для открытия модалки
    let gallery = new SimpleLightbox('.gallery a');
gallery.on('show.simplelightbox', function () {

});

}


console.log(galleryItems);
