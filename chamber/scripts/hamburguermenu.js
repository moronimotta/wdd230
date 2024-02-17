// Get the button element
const hamburgerButton = document.getElementById('hamburgerMenu');

// Get the mobile menu element
const mobileMenu = document.querySelector('.mainMenu');

// Add a click event listener to the button
hamburgerButton.addEventListener('click', () => {
    // Toggle the visibility of the mobile menu
    mobileMenu.style.display = mobileMenu.style.display === 'none' ? 'block' : 'none';
});
