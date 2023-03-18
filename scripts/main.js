// ------* selecting elements that will change with scene selection *--------
const html = document.documentElement;
const header = document.querySelector('h1');
const select = document.querySelector('select');
const audio = document.querySelector('audio');

console.log(html);

// ------* function declarations *---------

function onSceneOptionSelected(event) {
    const sceneSelection = event.target.value;
    localStorage.setItem('selection', sceneSelection);
    const selection = localStorage.getItem('selection');
    
    renderPage(selection);
}

function renderPage(selection) {
    renderBackground(selection);
    renderHeader(selection)
    renderSelectionBackground(selection);
    renderAudio(selection);
}

function renderHeader(selection) {
    if (selection === 'beach') {
        header.innerText = 'Beach';
    } else if (selection === 'forest') {
        header.innerText = 'Forest';
    } else if (selection === 'stream') {
        header.innerText = 'Stream';
    } else if (selection === 'rain') {
        header.innerText = 'Rain';
    }
}

function renderSelectionBackground(selection) {
    if (selection === 'beach') {
        select.style.background = '#4DB4C3';
    } else if (selection === 'forest') {
        select.style.background = '#A0D253';
    } else if (selection === 'stream') {
        select.style.background = '#6EC97E';
    } else if (selection === 'rain') {
        select.style.background = '#559FDF';
    }
}

function renderBackground(selection) {
    if (selection === 'beach') {
        html.style.background = 'url("../images/beach.jpeg")';
    } else if (selection === 'forest') {
        html.style.background = 'url("../images/forest.jpeg")';
    } else if (selection === 'stream') {
        html.style.background = 'url("../images/stream.webp")';
    } else if (selection === 'rain') {
        html.style.background = 'url("../images/rain.jpeg")';
    }
}

function renderAudio(selection) {
    if (selection === 'beach') {
        audio.setAttribute('src', '../audio/beach.mp3');
    } else if (selection === 'forest') {
        audio.setAttribute('src', '../audio/forest.mp3');
    } else if (selection === 'stream') {
        audio.setAttribute('src', '../audio/stream.mp3');
    } else if (selection === 'rain') {
        audio.setAttribute('src', '../audio/rain.mp3');
    }
}

// ------* event listener *---------

select.addEventListener('input', (event) => {
    onSceneOptionSelected(event);
})
