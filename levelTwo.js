function renderLevelTwoBlock(container) {
    console.log('Level 2');
};

window.application.blocks['LevelTwoBlock'] = renderLevelTwoBlock;

function renderLevelTwoScreens() {
    const app = document.querySelector('.app');
    app.textContent = '';

    const LevelTwo = document.createElement('div');

    window.application.renderBlock('LevelTwoBlock', container);  

    container.appendChild(LevelTwo);

};

window.application.screens['LevelTwoScreens'] = renderLevelTwoScreens;