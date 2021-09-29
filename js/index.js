// Targeting items
const images = document.querySelectorAll('img');
const heading = document.querySelector('h1');




// Add events
images.forEach(image => {
    image.addEventListener('mouseenter', () => alert('Hello World'))
})

heading.addEventListener('click', (event) => {
    event.target.style.color = 'blue';
})