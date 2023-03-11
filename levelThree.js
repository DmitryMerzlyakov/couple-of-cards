function renderLevelThreeBlock(container) {
    console.log('Level 3');
};

window.application.blocks['LevelThreeBlock'] = renderLevelThreeBlock;

function renderLevelThreeScreens() {
    const app = document.querySelector('.app');
    app.textContent = '';

    const LevelThree = document.createElement('div');

    window.application.renderBlock('LevelThreeBlock', container);  

    container.appendChild(LevelThree);

};

window.application.screens['LevelThreeScreens'] = renderLevelThreeScreens;