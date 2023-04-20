function renderLevelOneBlock(container) {
    let secs = 0;
    let mins = 0;
    let interval;
    let count = 6;
    let countdownTime;
    const headerBox = document.createElement('div');
    headerBox.classList.add('headerBox');

    const timerBox = document.createElement('div');
    const timeMinute : HTMLDivElement = document.createElement('div');
    timeMinute.textContent = '00';
    const timeDelimiter = document.createElement('div');
    timeDelimiter.textContent = ':';
    const timeSeconds : HTMLDivElement = document.createElement('div');
    timeSeconds.textContent = '00';
    timerBox.id = 'timerid';
    timerBox.classList.add('headerBox__timer');

    timerBox.appendChild(timeMinute);
    timerBox.appendChild(timeDelimiter);
    timerBox.appendChild(timeSeconds);

    const countdownTimer = document.createElement('div');
    countdownTimer.classList.add('headerBox__timer');

    function countDown () {
        count--
        countdownTimer.innerHTML = `00:0${count}`
    }

    function startTimer() {
        if (count == 0) {
            cardBoxOne.style.pointerEvents='auto';
            cardBoxTwo.style.pointerEvents='auto';
            clearInterval(countdownTime)
            countdownTimer.textContent = 'Поехали!'
            secs++;
            if (secs <= 9) {
                timeSeconds.innerText = '0' + secs;
            }
            if (secs > 9) {
                timeSeconds.innerText = `${secs}`;
            }
            if (secs > 60) {
                mins++;
                timeMinute.innerText = '0' + mins;
                secs = 0;
                timeSeconds.innerText = '0' + secs;
            }
        }    
    }

   
    const startGameBtn = document.createElement('button');
    startGameBtn.textContent = 'Начать игру';
    startGameBtn.classList.add('choiceForm__button');
    startGameBtn.addEventListener('click', () => {
        container.removeChild(startBox);
        startBox.classList.add('none');
        countdownTimer.textContent = '00:06';
        cardBoxOne.style.pointerEvents='none';
        cardBoxTwo.style.pointerEvents='none';
        interval = setInterval(startTimer, 1000);
        countdownTime = setInterval(countDown, 1000)
        if (window.application.numbers == 1) {
            for (let i = 0; i < 3; i++) {
                arrayRandElement(neWcards);
            }
        } else if (window.application.numbers == 2) {
            for (let i = 0; i < 6; i++) {
                arrayRandElement(neWcards);
            }
        } else if (window.application.numbers == 3) {
            for (let i = 0; i < 9; i++) {
                arrayRandElement(neWcards);
            }
        }

        startGameBtn.setAttribute('disabled', '');
    });

    const startBox = document.createElement('div');
    startBox.classList.add('startBox');
    if (window.application.numbers !== 0) {
        for (let i = 0; i < 12; i++) {
            const startCard = document.createElement('img');
            startCard.classList.add('cardBox__img');
            startCard.src = './static/cardBack.jpg';
            startBox.appendChild(startCard);
        }
    }



    const cardBoxOne = document.createElement('div');
    cardBoxOne.classList.add('cardBox');
    const cardBoxTwo = document.createElement('div');
    cardBoxTwo.classList.add('cardBox');

    let neWcards = [];
    neWcards = window.application.cards;
    let arrRightClick : object[] = [];
    let firstExam : string[] = [];
    
    function arrayRandElement(neWcards) {
        let rand = Math.floor(Math.random() * neWcards.length);
        let randomCard = neWcards[rand];
        console.log(randomCard);
        let ImgOne = document.createElement('img');
        let ImgTwo = document.createElement('img');
        ImgOne.src = randomCard.img;
        ImgOne.classList.add('cardBox__img');
        ImgTwo.src = randomCard.img;
        ImgTwo.classList.add('cardBox__img');
        const cardInterval = setInterval(() => {
            ImgOne.src = './static/cardBack.jpg';
            ImgTwo.src = './static/cardBack.jpg';
        },6000)
        cardBoxOne.appendChild(ImgOne);
        cardBoxTwo.appendChild(ImgTwo);
        let newCardIdOne: string;
        const clickOne = () => {
            clearInterval(cardInterval)
            ImgOne.src = randomCard.img
            window.application.cardIdOne.id = randomCard.id;
            newCardIdOne = window.application.cardIdOne.id;
            firstExam.push(newCardIdOne);
            arrRightClick.push(firstExam);
            gameOver(arrRightClick);
        };
        ImgOne.addEventListener('click', () => {
            clickOne();
            console.log(arrRightClick);
            console.log(firstExam);
            if (firstExam.length >= 2) {
                if (newCardIdOne == newCardIdTwo) {
                    firstExam = []
                } else {
                    losepopup()
                }
            }
        });
        let newCardIdTwo: string; 
        const clickTwo = () => {
            clearInterval(cardInterval)
            ImgTwo.src = randomCard.img
            window.application.cardIdTwo.id = randomCard.id;
            newCardIdTwo = window.application.cardIdTwo.id;
            firstExam.push(newCardIdTwo);
            arrRightClick.push(firstExam);
            gameOver(arrRightClick);
        };
        ImgTwo.addEventListener('click', () => {
            clickTwo();
            console.log(arrRightClick);
            console.log(firstExam);
            if (firstExam.length >= 2) {
                if (newCardIdOne == newCardIdTwo) {
                    firstExam = []
                } else {
                    losepopup()
                }
            }
        });
    }

    function popup() {
        const popup = document.createElement('div');
        popup.classList.add('wrapper');
        popup.classList.add('popup');
        const winImg = document.createElement('img');
        winImg.src = './static/ImageWin.jpg';
        winImg.classList.add('popup__img');
        const win = document.createElement('h2');
        win.classList.add('popup__text')
        win.textContent = 'Вы выиграли!';
        const time = document.createElement('h2');
        time.textContent = 'Затраченное время:';
        const timeToWin = document.createElement('div');
        timeToWin.textContent = '00:00';
        timeToWin.classList.add('headerBox__timer');
        timerBox.classList.add('popup__time');
        const newGame = document.createElement('button');
        newGame.classList.add('choiceForm__button');
        newGame.classList.add('newGame');
        newGame.textContent = 'Играть снова';
        newGame.addEventListener('click', () => {
            renderLevelOneScreens(container);
            popup.classList.add('none');
        })
        countdownTimer.classList.add('none');
        popup.appendChild(winImg);
        popup.appendChild(win);
        popup.appendChild(time);
        popup.appendChild(timerBox);
        popup.appendChild(newGame);
        headerBox.appendChild(timeToWin);
        headerBox.appendChild(startGameBtn);
        container.removeChild(fieldForGame);
        container.appendChild(popup);
    }

    function losepopup() {
        clearInterval(interval);
        const losepopup = document.createElement('div');
        losepopup.classList.add('wrapper');
        losepopup.classList.add('popup');
        const winImg = document.createElement('img');
        winImg.src = './static/ImageLose.jpg';
        winImg.classList.add('popup__img');
        const win = document.createElement('h2');
        win.classList.add('popup__text')
        win.textContent = 'Вы проиграли!';
        const time = document.createElement('h2');
        time.textContent = 'Затраченное время:';
        const timeToWin = document.createElement('div');
        timeToWin.textContent = '00:00';
        timeToWin.classList.add('headerBox__timer');
        timerBox.classList.add('popup__time');
        const newGame = document.createElement('button');
        newGame.classList.add('choiceForm__button');
        newGame.classList.add('newGame');
        newGame.textContent = 'Играть снова';
        newGame.addEventListener('click', () => {
            renderLevelOneScreens(container);
            losepopup.classList.add('none');
        })
        countdownTimer.classList.add('none');
        losepopup.appendChild(winImg);
        losepopup.appendChild(win);
        losepopup.appendChild(time);
        losepopup.appendChild(timerBox);
        losepopup.appendChild(newGame);
        headerBox.appendChild(timeToWin);
        headerBox.appendChild(startGameBtn);
        container.removeChild(fieldForGame);
        container.appendChild(losepopup);
    }    

    function gameOver(arrRightClick) {
        if (arrRightClick.length == 6 && window.application.numbers == 1) {
            console.log('game over');
            clearInterval(interval);
            console.log(mins);
            console.log(secs);
            popup();
        } else if (arrRightClick.length == 12 && window.application.numbers == 2) {
            console.log('game over');
            clearInterval(interval);
            console.log(mins);
            console.log(secs);
            popup();
        } else if (arrRightClick.length == 18 && window.application.numbers == 3) {
            console.log('game over');
            clearInterval(interval);
            console.log(mins);
            console.log(secs);
            popup();
        }
    }

    const fieldForGame = document.createElement('div');
    fieldForGame.classList.add('fieldForGame');
    fieldForGame.appendChild(cardBoxOne);
    fieldForGame.appendChild(cardBoxTwo);

    headerBox.appendChild(timerBox);
    headerBox.appendChild(countdownTimer);
    headerBox.appendChild(startGameBtn);
    container.appendChild(headerBox);
    container.appendChild(startBox);
    container.appendChild(fieldForGame);
}

window.application.blocks['LevelOneBlock'] = renderLevelOneBlock;

export function renderLevelOneScreens(container) {
    const app : HTMLElement | null = document.querySelector('.app');
    app!.textContent = '';

    const LevelOne = document.createElement('div');

    window.application.renderBlock('LevelOneBlock', container);

    container.appendChild(LevelOne);
}

window.application.screens['LevelOneScreens'] = renderLevelOneScreens;
