import throttle from 'lodash.throttle';
import Player from '@vimeo/player';
// console.log(throttle);
// console.log(Player);

const iframe = document.querySelector('iframe');
// console.log(iframe);
const player = new Player(iframe);
// console.log(player);
const LOCALSTORAGE_KEY_TIME = 'videoplayer-current-time';
// console.log(LOCALSTORAGE_KEY);

const onPlay = function (data) {
  localStorage.setItem(LOCALSTORAGE_KEY_TIME, data.seconds);
    // console.log('data', data);
    // console.log('data.seconds', data.seconds);
    // data is an object containing properties specific to that event
};
player.on('timeupdate', throttle(onPlay, 1000));

player.setCurrentTime(localStorage.getItem(LOCALSTORAGE_KEY_TIME) || 0);
