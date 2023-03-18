// ------* selecting elements that will change with scene selection *--------
const header = document.querySelector('h1');
const select = document.querySelector('select');
const audio = document.querySelector('audio');

// ------* function declarations *---------

function onSceneOptionSelected(event) {
    const sceneSelection = event.target.value;
    localStorage.setItem('selection', sceneSelection);
    const selection = localStorage.getItem('selection');
    
    const h1 = document.querySelector('h1');
    const select = document.querySelector('select');
    const audio = document.querySelector('audio');
    
    renderBackground(selection);
    renderSelectionBackground();
    renderAudio();
}

function renderBackground(selection) {
    
    if (selection === 'beach') {

    }
}