// Задание 2 - видео плеер
// Выполняй это задание в файлах 02-video.html и 02-video.js. Разбей его на несколько подзадач:

// Ознакомься с документацией библиотеки Vimeo плеера.
// Добавь библиотеку как зависимость проекта через npm.
// Инициализируй плеер в файле скрипта как это описано в секции pre-existing player, но учти что у тебя плеер добавлен как npm пакет, а не через CDN.
// Разбери документацию метода on() и начни отслеживать событие timeupdate - обновление времени воспроизведения.
// Сохраняй время воспроизведения в локальное хранилище. Пусть ключом для хранилища будет строка "videoplayer-current-time".
// При перезагрузке страницы воспользуйся методом setCurrentTime() для того чтобы возобновить воспроизведение с сохраненной позиции.
// Добавь в проект бибилотеку lodash.throttle и сделай так, чтобы время воспроизведения обновлялось в хранилище не чаще чем раз в секунду.

// инициализация библиотек
import Player from '@vimeo/player';//импортируем библиотеку
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player'); //обращаемся к DOM-элементу через id
const player = new Player(iframe); 
const LOCALSTORAGE_KEY = 'videoplayer-current-time'; //ключ для хранения данных
console.log(player);

// отслеживаем событие timeupdate
player.on('timeupdate', throttle(onPlay, 1000))//вызываем функцию не чаще чем один раз в 1000 миллисекунд
        console.log('played the video!');

//Сохраняем время воспроизведения в локальное хранилище с ключом для хранилища videoplayer-current-time
function onPlay({ seconds }) {
  localStorage.setItem(LOCALSTORAGE_KEY, seconds);//добавим запись в локальное хранилище
}

// возобновим воспроизведение с сохраненной позиции
player.setCurrentTime(localStorage.getItem(LOCALSTORAGE_KEY));//читаем данные из локального хранилища

