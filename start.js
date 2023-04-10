import { renderLevelOneScreens } from './levelOne.js';
import './src/style.css';

const container = document.querySelector('.app');

function renderStartPage(container) {
    const choiceForm = document.createElement('div');
    choiceForm.classList.add('choiceForm');

    const text = document.createElement('h1');
    text.classList.add('choiceForm__text');
    text.textContent = 'Выбери сложность';
    choiceForm.appendChild(text);

    const levelBox = document.createElement('div');
    levelBox.classList.add('choiceForm__levelBox');
    choiceForm.appendChild(levelBox);

    const levelOne = document.createElement('button');
    levelOne.classList.add('choiceForm__level-one');
    levelOne.textContent = '1';

    levelOne.addEventListener('click', () => {
        window.application.numbers = 1;
    });

    levelBox.appendChild(levelOne);

    const levelTwo = document.createElement('button');
    levelTwo.classList.add('choiceForm__level-two');
    levelTwo.textContent = '2';

    levelTwo.addEventListener('click', () => {
        window.application.numbers = 2;
    });

    levelBox.appendChild(levelTwo);

    const levelThree = document.createElement('button');
    levelThree.classList.add('choiceForm__level-three');
    levelThree.textContent = '3';

    levelThree.addEventListener('click', () => {
        window.application.numbers = 3;
    });

    levelBox.appendChild(levelThree);

    choiceForm.appendChild(levelBox);

    const start = document.createElement('button');
    start.classList.add('choiceForm__button');
    start.textContent = 'Старт';

    start.addEventListener('click', () => {
        renderLevelOneScreens(container);
    });

    choiceForm.appendChild(start);

    container.appendChild(choiceForm);
}

window.application.blocks['StartPage'] = renderStartPage;
window.application.renderBlock('StartPage', container);
