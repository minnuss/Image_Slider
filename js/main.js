const btnPrev = document.querySelector('.prev')
const btnPlay = document.querySelector('.play')
const btnNext = document.querySelector('.next')
const sliderImage = document.querySelector('.slider__image')
const btnPlayIcon = document.querySelector('.play i')

// ARRAY OF IMAGES URL
let images = [
    'img/1.jpg',
    'img/2.jpg',
    'img/3.jpg',
    'img/4.jpg',
    'img/5.jpg'
]

// STARTING IMAGE INDEX
let currentImageIdx = 0;

// NEXT IMAGE
function nextImage() {
    currentImageIdx++
    if (currentImageIdx > images.length - 1) {
        currentImageIdx = 0
    }
    sliderImage.src = images[currentImageIdx]

    // ANIMATION ADDED IN CSS
    sliderImage.classList.add('nextImage')
    setTimeout(() => {
        sliderImage.classList.remove('nextImage')
    }, 750);
}

// PREVIOUS IMAGE
function prevImage() {
    currentImageIdx--
    if (currentImageIdx < 0) {
        currentImageIdx = images.length - 1
    }
    sliderImage.src = images[currentImageIdx]

    // ANIMATION ADDED IN CSS
    sliderImage.classList.add('prevImage')
    setTimeout(() => {
        sliderImage.classList.remove('prevImage')
    }, 750);
}

// INTERVAL VARIABLE
let interval

// AUTO PLAY NEXT IMAGE
function playImages() {

    // START AND CLEAR INTERVAL ON THE SAME BUTTON
    // if (interval) {
    //     clearInterval(interval)
    //     interval = null
    // } else {
    //     interval = setInterval(() => {
    //         btnNext.click()
    //     }, 2000)
    // }

    // CHECK IF BTN PLAY HAS CLASS, IF DOES, CHANGE IT
    if (btnPlayIcon.className === 'fas fa-play') {
        btnPlayIcon.className = 'fas fa-pause'

        // START INTERVAL ON FIRST CLICK
        interval = setInterval(() => {
            btnNext.click()
        }, 2000)

    } else if (btnPlayIcon.className === 'fas fa-pause') {
        btnPlayIcon.className = 'fas fa-play'

        // REMOVE INTERVAL ON SECOND CLICK
        clearInterval(interval)
    }
}

// EVENTS
btnNext.addEventListener('click', nextImage)
btnPrev.addEventListener('click', prevImage)
btnPlay.addEventListener('click', playImages)