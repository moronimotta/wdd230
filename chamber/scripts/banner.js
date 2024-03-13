const banner = document.querySelector('.banner');
const today = new Date();
const day = today.getDay();

const dismissButton = document.querySelector('#bannerButton');
dismissButton.addEventListener('click', () => {
    banner.style.display = 'none';
});




if (day === 1 || day === 2 || day === 3) {
    banner.style.display = 'block';
} else {
    banner.style.display = 'none';
}