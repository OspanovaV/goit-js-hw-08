
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player'); 
const player = new Player(iframe); 
const LOCALSTORAGE_KEY = 'videoplayer-current-time'; 
console.log(player);

player.on('timeupdate', throttle(onPlay, 1000))
        console.log('played the video!');

function onPlay({ seconds }) {
  localStorage.setItem(LOCALSTORAGE_KEY, seconds);
}

player.setCurrentTime(localStorage.getItem(LOCALSTORAGE_KEY));

