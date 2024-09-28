// Script for basic animations and interactivity

document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.querySelector('main input');

    // Animate input field on focus
    searchInput.addEventListener('focus', function () {
        searchInput.style.width = '350px';
        searchInput.style.transition = 'width 0.5s ease';
    });

    // Return to normal size when not in focus
    searchInput.addEventListener('blur', function () {
        searchInput.style.width = '300px';
    });

    
});
