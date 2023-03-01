const container = document.querySelector('.app');

function renderStartPage(container) {
    const choiceForm = document.createElement('div');
    choiceForm.classList.add('choiceForm');

    const text = document.createElement('h1');
    text.classList.add('choiceForm__text');
    choiceForm.appendChild(text);

    const levelBox = document.createElement('div');
    levelBox.classList.add('choiceForm__levelBox');
    choiceForm.appendChild(levelBox);

    const levelOne = document.createElement('button');
    levelOne.classList.add('choiceForm__level');
    levelBox.appendChild(levelOne);

    const levelTwo = document.createElement('button');
    levelTwo.classList.add('choiceForm__level');
    levelBox.appendChild(levelTwo);

    const levelThree = document.createElement('button');
    levelThree.classList.add('choiceForm__level');
    levelBox.appendChild(levelThree);


    const start = document.createElement('button');
    text.classList.add('choiceForm__button');
    choiceForm.appendChild(start);

    container.appendChild(choiceForm);
}

window.application.blocks['StartPage'] = renderStartPage;
window.application.renderBlock('StartPage', container);

