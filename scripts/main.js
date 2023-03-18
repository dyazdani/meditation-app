// ------* selecting elements that will change with screen selection *--------
const header = document.querySelector('h1');
const select = document.querySelector('select');
const audio = document.querySelector('audio');

// ------* function declarations *---------

function onScreenOptionSelected(event) {
    const screenSelection = event.target.value;
    localStorage.setItem('selection', screenSelection);
    const selection = localStorage.getItem('selection');

    
    renderBackground();
    renderSelectionBackground();
    renderAudio();
}