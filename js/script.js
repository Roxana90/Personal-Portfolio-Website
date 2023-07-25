// Return to top
const scrollButton = document.querySelector('.scroll-button');

// Show button when scrolling down
window.addEventListener('scroll', () => {
    if(document.documentElement.scrollTop > 20) {
        scrollButton.style.display = 'block';
    } else {
        scrollButton.style.display = 'none';
    }
});

// Return to top when button is clicked

scrollButton.addEventListener('click', ()=> {
    document.documentElement.scrollTop = 0;
});