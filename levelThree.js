function renderLevelThreeBlock(container) {
    console.log('Level 3');
    let secs = 0,
        mins = 0,
        interval;
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
        clearInterval(interval);
        interval = setInterval(startTimer, 1000);
        for (let i = 0; i < 9; i++) {
            arrayRandElement(cards);
        }
    });

    const cardBoxOne = document.createElement('div');
    cardBoxOne.classList.add('cardBox');
    const cardBoxTwo = document.createElement('div');
    cardBoxTwo.classList.add('cardBox');

    let cards = [];
    cards = window.application.cards;

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
        };
        ImgTwo.addEventListener('click', () => {
            clickTwo();
        });
        function ifMatch() {
            if (cardIdOne == cardIdTwo) {
                ImgOne.src = './img/cardBack.jpg';
                ImgTwo.src = './img/cardBack.jpg';
            }
        }
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

window.application.blocks['LevelThreeBlock'] = renderLevelThreeBlock;

function renderLevelThreeScreens(container) {
    const app = document.querySelector('.app');
    app.textContent = '';

    const LevelThree = document.createElement('div');

    window.application.renderBlock('LevelThreeBlock', container);

    container.appendChild(LevelThree);
}

window.application.screens['LevelThreeScreens'] = renderLevelThreeScreens;
