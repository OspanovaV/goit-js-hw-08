
import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('#vimeo-player'); 
const player = new Player(iframe); 
const LOCALSTORAGE_KEY = 'videoplayer-current-time'; 


player.on('timeupdate', throttle(onPlay, 1000))
        

function onPlay({ seconds }) {
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(seconds));
}

if (LOCALSTORAGE_KEY || "") {
 }
  player.setCurrentTime(localStorage.getItem(LOCALSTORAGE_KEY));

