/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./levelOne.js":
/*!*********************!*\
  !*** ./levelOne.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderLevelOneScreens": () => (/* binding */ renderLevelOneScreens)
/* harmony export */ });
/* harmony import */ var _src_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/style.css */ "./src/style.css");


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
        for (let i = 0; i < 3; i++) {
            arrayRandElement(cards);
        }
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

function renderLevelOneScreens(container) {
    const app = document.querySelector('.app');
    app.textContent = '';

    const LevelOne = document.createElement('div');

    window.application.renderBlock('LevelOneBlock', container);

    container.appendChild(LevelOne);
}

window.application.screens['LevelOneScreens'] = renderLevelOneScreens;


/***/ }),

/***/ "./levelThree.js":
/*!***********************!*\
  !*** ./levelThree.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderLevelThreeScreens": () => (/* binding */ renderLevelThreeScreens)
/* harmony export */ });
/* harmony import */ var _src_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/style.css */ "./src/style.css");


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


/***/ }),

/***/ "./levelTwo.js":
/*!*********************!*\
  !*** ./levelTwo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderLevelTwoScreens": () => (/* binding */ renderLevelTwoScreens)
/* harmony export */ });
/* harmony import */ var _src_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/style.css */ "./src/style.css");


function renderLevelTwoBlock(container) {
    console.log('Level 2');
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
        for (let i = 0; i < 6; i++) {
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

window.application.blocks['LevelTwoBlock'] = renderLevelTwoBlock;

function renderLevelTwoScreens(container) {
    const app = document.querySelector('.app');
    app.textContent = '';

    const LevelTwo = document.createElement('div');

    window.application.renderBlock('LevelTwoBlock', container);

    container.appendChild(LevelTwo);
}

window.application.screens['LevelTwoScreens'] = renderLevelTwoScreens;


/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!******************!*\
  !*** ./start.js ***!
  \******************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _levelOne_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./levelOne.js */ "./levelOne.js");
/* harmony import */ var _levelTwo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./levelTwo.js */ "./levelTwo.js");
/* harmony import */ var _levelThree_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./levelThree.js */ "./levelThree.js");
/* harmony import */ var _src_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/style.css */ "./src/style.css");





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
        if (window.application.numbers == '1') {
            // window.application.renderScreen('LevelOneScreens')
            (0,_levelOne_js__WEBPACK_IMPORTED_MODULE_0__.renderLevelOneScreens)(container);
        } else if (window.application.numbers == '2') {
            // window.application.renderScreen('LevelTwoScreens')
            (0,_levelTwo_js__WEBPACK_IMPORTED_MODULE_1__.renderLevelTwoScreens)(container);
        } else if (window.application.numbers == '3') {
            // window.application.renderScreen('LevelThreeScreens');
            (0,_levelThree_js__WEBPACK_IMPORTED_MODULE_2__.renderLevelThreeScreens)(container);
        }
    });

    choiceForm.appendChild(start);

    container.appendChild(choiceForm);
}

window.application.blocks['StartPage'] = renderStartPage;
window.application.renderBlock('StartPage', container);

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map