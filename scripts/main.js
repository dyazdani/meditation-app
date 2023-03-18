// ------* selecting elements that will change with screen selection *--------
const header = document.querySelector('h1');
const select = document.querySelector('select');
const audio = document.querySelector('audio');

// ------* function declarations *---------

function setAudio() {
    if (event.target.value === "beach") {
        audio.setAttribute('src', '../audio.beach.mp3');
    } else if (event.target.value === "forest") {
        audio.setAttribute('src', '../audio.forest.mp3');
    } else if (event.target.value === "rain") {
        audio.setAttribute('src', '../audio.rain.mp3');
    } else if (event.target.value === "stream") {
        audio.setAttribute('src', '../audio.stream.mp3');
    }
}