const modeButton = document.querySelector('#modeButton');
const body = document.querySelector('body');
const nav = document.querySelector('.mainMenu');


modeButton.addEventListener('click', () => {
    // if modeButton is checked, set dark mode
    if (modeButton.checked) {
      document.body.classList.toggle('dark-mode');
    } else {
        document.body.classList.toggle('dark-mode');
    }
});