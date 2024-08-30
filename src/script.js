const cards = document.querySelectorAll('.slider__card');
const prevButton = document.querySelector('.slider__switcher-btn--prev');
const nextButton = document.querySelector('.slider__switcher-btn--next');
let currentIndex = 0;
const cardsPerPage = 3; // Количество карточек на странице

// Функция для обновления видимых карточек
function updateCards() {
    const totalCards = cards.length;
    const totalPages = Math.ceil(totalCards / cardsPerPage);
    
    // Вычисление смещения
    const offset = currentIndex * cardsPerPage * (100 / cardsPerPage);
    
    // Применение трансформации для сдвига карточек
    document.querySelector('.cards').style.transform = `translateX(-${offset}%)`;

    // Деактивация кнопок при достижении границ
    prevButton.disabled = currentIndex === 0;
    nextButton.disabled = currentIndex === totalPages - 1;
}

// Обработчик события для кнопки "Следующая"
nextButton.addEventListener('click', () => {
    if (currentIndex < (cards.length / cardsPerPage) - 1) {
        currentIndex++;
        updateCards();
    }
});

// Обработчик события для кнопки "Предыдущая"
prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateCards();
    }
});

// Инициализация
document.addEventListener('DOMContentLoaded', () => {
    updateCards();
});