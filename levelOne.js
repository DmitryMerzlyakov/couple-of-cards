function renderLevelOneBlock(container) {
    
    console.log('Level 1');
}

window.application.blocks['LevelOneBlock'] = renderLevelOneBlock;

function renderLevelOneScreens() {
    const app = document.querySelector('.app');
    app.textContent = '';

    const LevelOne = document.createElement('div');

    window.application.renderBlock('LevelOneBlock', container);  

    container.appendChild(LevelOne);

};

window.application.screens['LevelOneScreens'] = renderLevelOneScreens;