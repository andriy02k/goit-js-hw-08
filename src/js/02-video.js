import Player from '@vimeo/player';
import throttle from 'lodash/throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(function onPlay(event) {
    const currentTime = event.seconds;

    localStorage.setItem("videoplayer-current-time", currentTime);
}, 1000));

restorePlaybackPosition();

function restorePlaybackPosition() {
  const savedTime = localStorage.getItem("videoplayer-current-time");
  if (savedTime !== null) {
    player.setCurrentTime(Number(savedTime));
  }
}

