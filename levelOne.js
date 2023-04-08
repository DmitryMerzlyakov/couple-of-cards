function renderLevelOneBlock(container) {
    console.log('Level 1');
    let secs = 0;
    let mins = 0;
    let interval;
    const headerBox = document.createElement('div');
    headerBox.classList.add('headerBox');

    const timerBox = document.createElement('div');
    const timeMinute = document.createElement('div');
    timeMinute.textContent = '00';
    const timeDelimiter = document.createElement('div');
    timeDelimiter.textContent = ':';
    const timeSeconds = document.createElement('div');
    timeSeconds.textContent = '00';
    timerBox.id = 'timerid';
    timerBox.classList.add('headerBox__timer');

    timerBox.appendChild(timeMinute);
    timerBox.appendChild(timeDelimiter);
    timerBox.appendChild(timeSeconds);

    function startTimer() {
        secs++;
        if (secs <= 9) {
            timeSeconds.innerText = '0' + secs;
        }
        if (secs > 9) {
            timeSeconds.innerText = secs;
        }
        if (secs > 60) {
            mins++;
            timeMinute.innerText = '0' + mins;
            secs = 0;
            timeSeconds.innerText = '0' + secs;
        }
    }

    const startGameBtn = document.createElement('button');
    startGameBtn.textContent = 'Начать игру';
    startGameBtn.classList.add('choiceForm__button');
    startGameBtn.addEventListener('click', () => {
        interval = setInterval(startTimer, 1000);
        if (window.application.numbers == '1') {
            for (let i = 0; i < 3; i++) {
                arrayRandElement(cards);
            }
        } else if (window.application.numbers == '2') {
            for (let i = 0; i < 6; i++) {
                arrayRandElement(cards);
            }
        } else if (window.application.numbers == '3') {
            for (let i = 0; i < 9; i++) {
                arrayRandElement(cards);
            }
        };
        
        startGameBtn.setAttribute('disabled', '');
    });

    const cardBoxOne = document.createElement('div');
    cardBoxOne.classList.add('cardBox');
    const cardBoxTwo = document.createElement('div');
    cardBoxTwo.classList.add('cardBox');

    let cards = [];
    cards = window.application.cards;
    let arrRightClick = [];

    function arrayRandElement(cards) {
        let rand = Math.floor(Math.random() * cards.length);
        let randomCard = cards[rand];
        let ImgOne = document.createElement('img');
        let ImgTwo = document.createElement('img');
        ImgOne.src = randomCard.img;
        ImgOne.classList.add('cardBox__img');
        ImgTwo.src = randomCard.img;
        ImgTwo.classList.add('cardBox__img');
        cardBoxOne.appendChild(ImgOne);
        cardBoxTwo.appendChild(ImgTwo);
        let cardIdOne;
        const clickOne = () => {
            window.application.cardIdOne.id = randomCard.id;
            cardIdOne = JSON.stringify(window.application.cardIdOne);
            console.log(cardIdOne);
            ifMatch();
            gameOver(arrRightClick);
        };
        ImgOne.addEventListener('click', () => {
            clickOne();
        });
        let cardIdTwo;
        const clickTwo = () => {
            window.application.cardIdTwo.id = randomCard.id;
            cardIdTwo = JSON.stringify(window.application.cardIdTwo);
            console.log(cardIdTwo);
            ifMatch();
            gameOver(arrRightClick);
        };
        ImgTwo.addEventListener('click', () => {
            clickTwo();
        });
        function ifMatch() {
            if (cardIdOne == cardIdTwo) {
                ImgOne.src = './static/cardBack.jpg';
                arrRightClick.push(cardIdOne);
                ImgTwo.src = './static/cardBack.jpg';
                arrRightClick.push(cardIdTwo);
            }
        }
        console.log(arrRightClick);
    }

    function gameOver(arrRightClick) {
        if (arrRightClick.length == '6') {
            console.log('game over');
            clearInterval(interval);
            console.log(mins);
            console.log(secs);
            popup();
        }
    }

    function popup() {
        const popup = document.createElement('div');
        const win = document.createElement('h2');
        win.textContent = 'Вы выиграли!';
        popup.appendChild(win);
        container.appendChild(popup);
    }

    const fieldForGame = document.createElement('div');
    fieldForGame.classList.add('fieldForGame');
    fieldForGame.appendChild(cardBoxOne);
    fieldForGame.appendChild(cardBoxTwo);

    headerBox.appendChild(timerBox);
    headerBox.appendChild(startGameBtn);
    container.appendChild(headerBox);
    container.appendChild(fieldForGame);
}

window.application.blocks['LevelOneBlock'] = renderLevelOneBlock;

export function renderLevelOneScreens(container) {
    const app = document.querySelector('.app');
    app.textContent = '';

    const LevelOne = document.createElement('div');

    window.application.renderBlock('LevelOneBlock', container);

    container.appendChild(LevelOne);
}

window.application.screens['LevelOneScreens'] = renderLevelOneScreens;
