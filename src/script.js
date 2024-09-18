document.addEventListener('DOMContentLoaded', function() {

    const cards = document.querySelectorAll('.slider__item');
    const countElement = document.querySelector('.members__nav-count');
    const prevButton = document.querySelectorAll('.members__btn')[0];
    const nextButton = document.querySelectorAll('.members__btn')[1];
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
        document.querySelector('.slider__list').style.transform = `translateX(-${offset}px)`;
        countElement.textContent = `${currentCount} / 6`; 
        updateButtons()

    }
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

});