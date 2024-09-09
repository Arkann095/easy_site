const cards = document.querySelectorAll('.carousel__item');
const countElement = document.querySelector('.slider__nav-count');
const prevButton = document.querySelector('.slider__nav-btn--prev');
const nextButton = document.querySelector('.slider__nav-btn--next');
const totalCards = cards.length - 1;
const cardsPerPage = 3

let currentIndex = 0;
let currentCount = parseInt(countElement.textContent.split(' / ')[0], 10);

function updateButtons() {
    prevButton.disabled = currentIndex === 0 ;
    nextButton.disabled = currentIndex >= (totalCards + 1) - cardsPerPage;
}

function changeCard() { 
    const cardWidth = cards[0].offsetWidth;
    const offset = currentIndex * (cardWidth + 20);
    document.querySelector('.carousel__list').style.transform = `translateX(-${offset}px)`;
    countElement.textContent = `${currentCount} / 6`; 
    updateButtons()

    nextButton.onclick = () => {
        console.log(currentIndex)
        if (currentIndex <= totalCards - cardsPerPage) {
            currentIndex++;
            currentCount++;
            changeCard();
        }
    };

    prevButton.onclick = () => {
        if (currentIndex > 0) {
            currentIndex--;
            currentCount--;
            changeCard();
        }
    };
}
changeCard();
