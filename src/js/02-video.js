import Player from '@vimeo/player';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', onPlay);

function onPlay(event) {
    const currentTime = event.seconds;
    console.log(`Час відтворення:  ${currentTime} секунд`);

    localStorage.setItem("videoplayer-current-time", currentTime);

    player.setCurrentTime(Number(localStorage.getItem('videoplayer-current-time')));
};

// console.log(player);
