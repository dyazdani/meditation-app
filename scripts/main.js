// ------* selecting elements that will change with scene selection *--------
const html = document.documentElement;
const header = document.querySelector('h1');
const select = document.querySelector('select');
const audio = document.querySelector('audio');

// ------* function declarations *---------

function onSceneOptionSelected(event) {
    const sceneSelection = event.target.value;
    localStorage.setItem('selection', sceneSelection);
    const selection = localStorage.getItem('selection');

    const chooseSceneOption = document.querySelector('#choose');
    chooseSceneOption.remove();
    
    renderSelectedScene(selection);
}

function renderSelectedScene(selection) {
    renderBackground(selection);
    renderHeader(selection)
    renderSelectionBackground(selection);
    renderAudio(selection);
}

function renderBackground(selection) {
    if (selection === 'beach') {
        html.style.background = 'url("../images/beach.jpeg")';
        html.style.backgroundSize = 'cover';
    } else if (selection === 'forest') {
        html.style.background = 'url("../images/forest.jpeg")';
        html.style.backgroundSize = 'cover';
    } else if (selection === 'stream') {
        html.style.background = 'url("../images/stream.webp")';
        html.style.backgroundSize = 'cover';
    } else if (selection === 'rain') {
        html.style.background = 'url("../images/rain.jpeg")';
        html.style.backgroundSize = 'cover';
    }
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

function renderPage() {
    if (localStorage.getItem('selection')) {
        const selection = localStorage.getItem('selection');
        renderSelectedScene(selection);
        selectOptionElementMatchingLocalStorage(selection);

        const chooseSceneOption = document.querySelector('#choose');
        chooseSceneOption.remove();
        }
}

function selectOptionElementMatchingLocalStorage(selection) {
    const [...allOptionElements] = document.querySelectorAll('option');
    allOptionElements.forEach(option => {
        option.selected = false;
    })
    const selectedOptionElement = document.querySelector(`#${selection}`);
    selectedOptionElement.selected = true;
}

// ------* event listener *---------

select.addEventListener('input', (event) => {
    onSceneOptionSelected(event);
})

// -------* load scene saved in localStorage *----------
renderPage();