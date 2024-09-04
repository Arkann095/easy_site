const cards = document.querySelectorAll('.slider-container__card');
const prevButton = document.querySelector('.slider__switcher-btn--prev');
const nextButton = document.querySelector('.slider__switcher-btn--next');
const totalCard = cards.length - 1;

let currentIndex = 0;
let gapValue = parseInt(getComputedStyle(document.querySelector('.slider-container__cards')).gap);
let startShadow = cards[0].style.boxShadow = '0 4px 20px rgba(59, 131, 189, 0.5)';
let startButton = prevButton.style.backgroundColor = '#D6D6D6';
console.log(totalCard);


function changeCard() { 
    
    const cardWidth = cards[0].offsetWidth;
    const offset = currentIndex * (cardWidth + gapValue);
    cards[currentIndex - 1], cards[currentIndex + 1].style.boxShadow = 'none';
    cards[currentIndex].style.boxShadow = '0 4px 20px rgba(59, 131, 189, 0.5)';
    cards[currentIndex].style.boxShadow = '0 4px 20px rgba(59, 131, 189, 0.5)';
    document.querySelector('.slider-container__cards').style.transform = `translateX(-${offset}px)`;
}

nextButton.addEventListener('click', () => {
    startShadow = false;
    startButton = false;

    if (currentIndex <= totalCard - 3) {
        currentIndex++;
        prevButton.style.backgroundColor = ''; 
        changeCard();    
    } else if (currentIndex > totalCard - 3 && currentIndex < totalCard) {  
        currentIndex++;  
        cards[currentIndex].style.boxShadow = '0 4px 20px rgba(59, 131, 189, 0.5)';
        cards[currentIndex - 1].style.boxShadow = 'none';
    } else {
        nextButton.style.backgroundColor = '#D6D6D6'; 
        nextButton.disabled = currentIndex[totalCard];
        console.log(currentIndex);
    }
    

});

// prevButton.addEventListener('click', () => {
//     console.log(currentIndex)
//     if (currentIndex > 0) {
//         currentIndex--;
//         nextButton.style.backgroundColor = ''; 
//         changeCard(); 
        
//     } else {
//         prevButton.style.backgroundColor = '#D6D6D6';
//         nextButton.style.backgroundColor = '';
//     }
//     console.log(currentIndex)

// });


prevButton.addEventListener('click', () => {

    if (currentIndex > totalCard - 2 || currentIndex == totalCard) {
        nextButton.disabled = false
        currentIndex--;  
        cards[currentIndex].style.boxShadow = '0 4px 20px rgba(59, 131, 189, 0.5)';
        cards[currentIndex + 1].style.boxShadow = 'none'; 
        nextButton.style.backgroundColor = '';
        
    } else if (currentIndex > 0) {
        currentIndex--;
        changeCard(); 
    } else {
        prevButton.style.backgroundColor = '#D6D6D6';
    }
    console.log(currentIndex)

});