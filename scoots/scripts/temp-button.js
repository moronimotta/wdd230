const dismissButton = document.querySelector('#bannerButton');
const banner = document.querySelector('#message');
dismissButton.addEventListener('click', () => {
    banner.style.display = 'none';
});
