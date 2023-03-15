function renderLevelThreeBlock(container) {
    console.log('Level 3')
    let secs = 00,
        mins = 00,
        interval
    const headerBox = document.createElement('div')
    headerBox.classList.add('headerBox')

    const timerBox = document.createElement('div')
    const timeMinute = document.createElement('div')
    timeMinute.textContent = '00'
    const timeDelimiter = document.createElement('div')
    timeDelimiter.textContent = ':'
    const timeSeconds = document.createElement('div')
    timeSeconds.textContent = '00'
    timerBox.id = 'timerid'
    timerBox.classList.add('headerBox__timer')

    timerBox.appendChild(timeMinute)
    timerBox.appendChild(timeDelimiter)
    timerBox.appendChild(timeSeconds)

    function startTimer() {
        secs++
        if (secs <= 9) {
            timeSeconds.innerText = '0' + secs
        }
        if (secs > 9) {
            timeSeconds.innerText = secs
        }
        if (secs > 60) {
            mins++
            timeMinute.innerText = '0' + mins
            secs = 0
            timeSeconds.innerText = '0' + secs
        }
    }

    const startGameBtn = document.createElement('button')
    startGameBtn.textContent = 'Начать игру'
    startGameBtn.classList.add('choiceForm__button')
    startGameBtn.addEventListener('click', () => {
        clearInterval(interval)
        interval = setInterval(startTimer, 1000)
    })

    const cardBox = document.createElement('div')
    cardBox.classList.add('cardBox')

    headerBox.appendChild(timerBox)
    headerBox.appendChild(startGameBtn)
    for (let i = 0; i < 18; i++) {
        const backImg = document.createElement('img')
        backImg.src = './img/cardBack.jpg'
        backImg.classList.add('cardBox__img')
        cardBox.appendChild(backImg)
    }
    container.appendChild(headerBox)
    container.appendChild(cardBox)
}

window.application.blocks['LevelThreeBlock'] = renderLevelThreeBlock

function renderLevelThreeScreens() {
    const app = document.querySelector('.app')
    app.textContent = ''

    const LevelThree = document.createElement('div')

    window.application.renderBlock('LevelThreeBlock', container)

    container.appendChild(LevelThree)
}

window.application.screens['LevelThreeScreens'] = renderLevelThreeScreens
