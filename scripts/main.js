// ------* selecting elements that will change with scene selection *--------
const header = document.querySelector('h1');
const select = document.querySelector('select');
const audio = document.querySelector('audio');

// ------* function declarations *---------

function onSceneOptionSelected(event) {
    const sceneSelection = event.target.value;
    localStorage.setItem('selection', sceneSelection);
    const selection = localStorage.getItem('selection');
    
    renderBackground(selection);
    renderSelectionBackground();
    renderAudio();
}

function renderBackground(selection) {
    if (selection === 'beach') {
        h1.innerText = 'Beach';
        select.style.background = '#4DB4C3';
        audio.setAttribute('src', '../audio/beach.mp3');
    } else if (selection === 'forest') {
        h1.innerText = 'Forest';
        select.style.background = '#A0D253';
        audio.setAttribute('src', '../audio/forest.mp3');
    } else if (selection === 'stream') {
        h1.innerText = 'Stream';
        select.style.background = '#6EC97E';
        audio.setAttribute('src', '../audio/stream.mp3');
    } else if (selection === 'rain') {
        h1.innerText = 'Rain';
        select.style.background = '#559FDF';
        audio.setAttribute('src', '../audio/rain.mp3');
    }
}