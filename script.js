
let isPlaying = false;
const audio = document.getElementById('birthdaySong');

function playSong() {
    if (isPlaying) {
        audio.pause();
        isPlaying = false;
    } else {
        audio.play();
        isPlaying = true;
    }
}
